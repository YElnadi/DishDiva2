from flask_wtf import FlaskForm
from wtforms import StringField, TextField, SubmitField, IntegerField, FloatField
from wtforms.validators import DataRequired, ValidationError

def check_image_type(form, field):
  image_url = field.data
  if not image_url.endswith(".jpeg") or not image_url.endswith(".jpg"):
    raise ValidationError("Image type not supported")

def check_description_length(form,field):
  description = field.data
  if len(description) <100:
    raise ValidationError("Description must be greated that 100 characters")

def check_title_length(form,field):
  title = field.data
  if len(title) >50:
    raise ValidationError("Description must be less than 50 characters")


class RecipeForm(FlaskForm):
  title = StringField('Title', validators=[DataRequired(), check_title_length])
  image_url = TextField('Recipe Image URL', validators=[DataRequired(), check_image_type])
  description = TextField('Description', validators=[DataRequired(),  check_description_length] )
  servings = IntegerField('Servings',  validators=[DataRequired()])
  cook_time = IntegerField('Time', validators=[DataRequired()])
  ingredients = TextField('Ingredients', validators=[DataRequired()])
  preparations = TextField('Preparations',validators=[DataRequired()])
  user_id = IntegerField('User Id')
  submit = SubmitField('Save')




# def check_item_name(form, field):
#   item_name = field.data
#   if len(item_name)>10:
#     raise ValidationError("ingredient name must be less than 10 characters")

def check_quantity(form, field):
  quantity = field.data
  try:
    float_value = float(quantity)
    if float_value == 0:
      return "Error: the value entered is not a positive number"
    else:
      return float_value
  except ValueError:
    return "Error: the entered value is not correct"


class IngredientForm(FlaskForm):
  recipe_id = IntegerField("Recipe Id")
  quantity = FloatField("Quantity", validators=[DataRequired(), check_quantity])
  item_name = StringField("Item Name", validators=[DataRequired()])
  unit = StringField("Unit")
  submit = SubmitField("save")