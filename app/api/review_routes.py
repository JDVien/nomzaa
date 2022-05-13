from flask import Blueprint, jsonify, request
from app.models import Review, db
from flask_login import current_user
from app.forms.review_form import ReviewProduct
# from app.forms.review_edit_form import EditReview
review_routes = Blueprint('reviews', __name__)

@review_routes.route('/')
def get_reviews():
  reviews_list = Review.query.all()
  return {'reviews_list': [review.to_dict() for review in reviews_list]} #list comprehension to to_dict


@review_routes.route('/<int:id>')
def get_one_review(id):
  review = Review.query.get(id)
  return {'review': review.to_dict()}

@review_routes.route('/', methods=["POST"])
def post_review():
  form = ReviewProduct()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    review = Review(
      review_title = form.review_title.data,
      content = form.content.data,
      rating = form.rating.data,
      product_id = form.product_id.data,
      user_id = form.user_id.data,
    )
    db.session.add(review)
    db.session.commit()
    return review.to_dict()
  else:
    print(form.errors)
    return "Bad data"

@review_routes.route('/<int:id>', methods=["POST"])
def edit_review(id):
  form = EditReview()
  form['csrf_token'].data = request.cookies['csrf_token']
  review = Review.query.get(id)
  if request.method == "POST":
    if (review):
      review.review_title = form.review_title.data
      review.content = form.content.data
      review.rating = form.rating.data
      review.product_id = form.product_id.data
      review.user_id = form.user_id.data
    db.session.commit()
    return review.to_dict()
  else:
    print(form.errors)
    return "Bad data"

@review_routes.route('/<int:id>', methods=["DELETE"])
def delete_review(id):
  review = Review.query.filter(Review.id == id).delete()
  db.session.commit()
  return "successful delete"
