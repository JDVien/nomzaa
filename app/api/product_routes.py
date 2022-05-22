from crypt import methods
from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.models import Product, db

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def get_products():
  products_list = Product.query.all()
  return {'products_list': [product.to_dict() for product in products_list]}

@product_routes.route('/<int:id>')
def get_specific_product(id):
    product = Product.query.get(id)
    # print('================', product.to_dict())
    return {'product': product.to_dict()}

@product_routes.route('/', methods=['PUT'])
def update_product():
  data = request.get_json()
  products_list = []
  product = Product.query.get(data[0]['id'])
  for item in data:
    product_item = Product.query.get(item['id'])
    product_item.stock -= product.stock

    products_list.append(product_item.to_dict())

  db.session.commit()
  return {'products': products_list}


