from turtle import back
from .db import db
from datetime import datetime


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    review_title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.String(2500), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    # products = db.relationship("Product", back_populates="reviews")
    users = db.relationship("User", back_populates="reviews_user")

    def to_dict(self):
        return {
            'id': self.id,
            'review_title': self.review_title,
            'content': self.content,
            'rating': self.rating,
            'product_id': self.product_id,
            'user_id': self.user_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'users': self.users.to_dict()
        }
