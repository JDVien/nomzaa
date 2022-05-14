from flask_wtf import FlaskForm
from sqlalchemy import Integer
from wtforms import StringField, IntegerField, DateField
from wtforms.validators import DataRequired
from app.models import Review

class EditReview(FlaskForm):
  review_title = StringField('review_title', validators=[DataRequired()])
  content = StringField('content', validators=[DataRequired()])
  rating = IntegerField('rating', validators=[DataRequired()])
  product_id = IntegerField('product_id')
  user_id = IntegerField('user_id')
