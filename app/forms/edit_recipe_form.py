from flask_wtf import FlaskForm
from wtforms import StringField, TextField, SubmitField, IntegerField
from wtforms.validators import DataRequired, ValidationError

def check_description_length(form, field):
  description = field.data
  if len(description)<100:
    raise ValidationError("Description must be greater than 100 characters")

class EditRecipeForm(FlaskForm):
  title = StringField('Title', validators=[DataRequired()])
  description = TextField('Description', validators=[DataRequired(), check_description_length] )
  servings = IntegerField('Servings',  validators=[DataRequired()])
  cook_time = IntegerField('Time', validators=[DataRequired()])
  user_id = IntegerField('User Id')
  submit = SubmitField('Save')

  