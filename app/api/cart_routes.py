from crypt import methods
from flask import Blueprint, request, session
from app.models import db, Product, Cart_Item
from flask_login import current_user
import random

cart_routes = Blueprint("carts", __name__)

@cart_routes.route('')
def get_carts():
  all_carts =Cart_Item.query.join(Product).filter(current_user.id == Cart_Item.user_id).all()
  return {"carts": [cart.to_dict() for cart in all_carts]}

@cart_routes.route('<int:id>', methods=["DELETE"])
def delete_cart(id):
  cart = Cart_Item.query.filter(Cart_Item.id == id).delete()
  db.session.commit()
  return "successful delete"


@cart_routes.route('', methods=['POST'])
def create_cart():
  data = request.get_json()
  new_cart = Cart_Item(
    user_id = data['user_id'],
    product_id = data['product_id'],
    purchased = data['purchased'],
    saved = data['saved'],
    order_id = data['order_id'],
    quantity = data['quantity']
  )
  db.session.add(new_cart)
  db.session.commit()
  return new_cart.to_dict()

@cart_routes.route('/', methods=['PUT'])
def update_cart():
  data = request.get_json()
  carts_list = []
  cart_order = Cart_Item.query.get(data[0]['id'])
  for item in data:
    cart_item = Cart_Item.query.get(item['id'])
    cart_item.order_id = cart_order.id + len(data)
    cart_item.purchased = True

    carts_list.append(cart_item.to_dict())

  db.session.commit()
  return {'carts': carts_list}
