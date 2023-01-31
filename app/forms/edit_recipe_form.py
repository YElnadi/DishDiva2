from flask_wtf import FlaskForm
from wtforms import StringField, TextField, SubmitField, IntegerField
from wtforms.validators import DataRequired, ValidationError


class EditRecipeForm(FlaskForm):
  title = StringField('Title', validators=[DataRequired()])
  description = TextField('Description', validators=[DataRequired()] )
  servings = IntegerField('Servings',  validators=[DataRequired()])
  cook_time = IntegerField('Time', validators=[DataRequired()])
  ingredients = TextField('Ingredients', validators=[DataRequired()])
  user_id = IntegerField('User Id')
  submit = SubmitField('Save')

  