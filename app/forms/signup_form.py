from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, EqualTo
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

def fullname_valid(form, field):
    fullname = field.data
    if len(fullname) == 0 or len(fullname) > 50:
        raise ValidationError('Name must be more than 0 characters and less than 50.')
    if " " not in fullname:
        raise ValidationError('Your full name must contain a space between first and last names')

def city_valid(form, field):
    city= field.data
    if len(city) == 0 or len(city) > 50:
        raise ValidationError('City must be more than 0 characters and less than 50.')

def zipcode_valid(form, field):
    zipcode = field.data
    if zipcode < 1000 or zipcode > 999999:
        raise ValidationError('Zip Code must be more than 4 digits and less than 7.')


class SignUpForm(FlaskForm):
    fullname = StringField('fullname', validators=[DataRequired(), fullname_valid ])
    email = StringField('email', validators=[DataRequired(),Email(message='Provide a valid email address'), user_exists])
    password = StringField('password', validators=[DataRequired(), EqualTo('repeat_password',  message='Passwords must match')])
    repeat_password = StringField('repeat_password')
    city = StringField('city', validators=[DataRequired(), city_valid])
    zipcode = IntegerField('zip code', validators=[DataRequired(), zipcode_valid ])
