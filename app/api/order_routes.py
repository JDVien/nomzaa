from crypt import methods
from flask import Blueprint, request, session
from app.models import db, Product, Cart_Item
from flask_login import current_user

cart_routes = Blueprint("orders", __name__)

@cart_routes.route('<int:id>', methods=["DELETE"])
def delete_order(id):
  cart = Cart_Item.query.filter(Cart_Item.id == id).delete()
  db.session.commit()
  return "successful delete"

