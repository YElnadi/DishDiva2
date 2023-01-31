from flask_wtf import FlaskForm
from wtforms import StringField,PasswordField
from wtforms.validators import DataRequired, Email, ValidationError,EqualTo
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def password_length(form, field):
    password = field.data
    if len(password)<8:
        raise ValidationError('Password should not be less than 8')

def check_email(form,field):
    email = field.data
    if email is not Email:
        raise ValidationError('Please enter a valid email.')



class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists, check_email])
    password = PasswordField('password', validators=[DataRequired(), password_length])
    # repeat_password = PasswordField('repeat_password', validators=[DataRequired(), EqualTo('password')])