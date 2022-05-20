from .db import db
from datetime import datetime

class Cart_Item(db.Model):
    __tablename__ = 'cart_items'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("products.id", ondelete='CASCADE'))
    quantity = db.Column(db.Integer, nullable=False)
    purchased = db.Column(db.Boolean)
    order_id = db.Column(db.Integer)
    saved = db.Column(db.Boolean)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    #default=datetime.now
    # product = db.relationship('Product', backref="Cart_Item", passive_deletes=True)
    product = db.relationship('Product', back_populates="cart_item")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'quantity': self.quantity,
            'purchased': self.purchased,
            'saved': self.saved,
            'order_id': self.order_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'product': self.product.to_dict()
        }
