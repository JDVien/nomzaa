from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime
# datetime required for created_at and updated_at timestamps


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(100), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    zipcode = db.Column(db.Integer, nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    merchant_name = db.Column(db.String(255), unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'fullname': self.fullname,
            'city': self.city,
            'zipcode': self.zipcode,
            'merchant_name': self.merchant_name,
            'email': self.email,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
