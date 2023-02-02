from flask_wtf import FlaskForm
from wtforms import StringField, TextField, SubmitField, IntegerField, FloatField
from wtforms.validators import DataRequired, ValidationError

class NoteForm(FlaskForm):
    recipe_id = IntegerField("Recipe id")
    user_id = IntegerField("User id")
    note = TextField("Note", validators=[DataRequired()])
    submit = SubmitField("Save")
