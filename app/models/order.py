from .db import db
from datetime import datetime

class Order(db.Model):
  __tablename__ = 'orders'

  id = db.Column(db.Integer, primary_key=True)
  status = db.Column(db.String(50))
  total = db.Column(db.Float(precision=4, asdecimal=False), nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  product_id = db.Column(db.Integer, db.ForeignKey("products.id", ondelete='CASCADE'))
  created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
  updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

  # user = db.relationship("User", back_populates='orders')
  # products = db.relationship("Product", back_populates="order")

  def to_dict(self):
    return {
      'id': self.id,
      'status': self.status,
      'user_id': self.user_id,
      'product_id': self.product_id,
      'created_at': self.created_at,
      'updated_at': self.updated_at,
      'product': self.product.to_dict()
    }
