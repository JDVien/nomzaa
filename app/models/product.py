from turtle import back
from .db import db
from datetime import datetime


class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(300), nullable=False, unique=True)
    brand = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float(precision=4, asdecimal=False), nullable=False)
    description = db.Column(db.String(2500), nullable=False)
    details = db.Column(db.String(255))
    stock = db.Column(db.Integer, nullable=False)
    category  = db.Column(db.String, nullable=False)
    img = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)


    user = db.relationship("User", back_populates="products")
    reviews = db.relationship("Review", backref="products", cascade='all,delete')
    # image = db.relationship("Image", back_populates="products")
    # image = db.relationship("Image", backref="products", cascade='all,delete')
    # orders = db.relationship("Order", back_populates="products")
    cart_item = db.relationship("Cart_Item", backref="products", cascade='all,delete')
    saved_item = db.relationship("Saved_Item", backref="products")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'brand': self.brand,
            'price': self.price,
            'description': self.description,
            'details': self.details,
            'stock' : self.stock,
            'category': self.category,
            'img': self.img,
            'user_id': self.user_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
            # 'images': [img.to_dict() for img in self.image],
        }
