from crypt import methods
from flask import Blueprint, request, session
from app.models import db, Product, Saved_Item, Cart_Item
from flask_login import current_user

saved_routes = Blueprint("saved", __name__)

@saved_routes.route('')
def get_saved():
  all_saved =Saved_Item.query.join(Product).filter(current_user.id == Saved_Item.user_id).all()
  return {"saved": [saved.to_dict() for saved in all_saved]}

@saved_routes.route('<int:id>', methods=["DELETE"])
def delete_saved(id):
  saved = Saved_Item.query.filter(Saved_Item.id == id).delete()
  db.session.commit()
  return "successful delete"

@saved_routes.route('', methods=['POST'])
def create_saved():
  data = request.get_json()
  new_saved = Saved_Item(
    user_id = data['user_id'],
    product_id = data['product_id'],
    purchased = data['purchased'],
    cartitem_id = data['cartitem_id'],
    saved = data['saved'],
    order_id = data['order_id'],
    quantity = data['quantity']
  )
  db.session.add(new_saved)
  db.session.commit()
  return new_saved.to_dict()

@saved_routes.route('/', methods=['PUT'])
def update_saved():
  data = request.get_json()
  saveds_list = []
  saved_order = Saved_Item.query.get(data[0]['id'])
  for item in data:
    saved_item = Saved_Item.query.get(item['id'])
    saved_item.saved = True
    saveds_list.append(saved_item.to_dict())

  db.session.commit()
  return {'saveds': saveds_list}
