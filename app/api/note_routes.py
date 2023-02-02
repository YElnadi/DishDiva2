from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Ingredient, Recipe, CookingNotes
from app.forms.notes_form import NoteForm
from .auth_routes import validation_errors_to_error_messages


note_routes = Blueprint('notes', __name__)

##get all notes
@note_routes.route('')
def notes():
    notes = CookingNotes.query.order_by(CookingNotes.id.desc()).all()
    return {"notes":[note.to_dict() for note in notes]}



##update notes
@note_routes.route('/update/<int:id>', methods=["PUT"])
def update_note(id):
    form = NoteForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        note = CookingNotes.query.get(id)
        note.note = form.data['note']
        db.session.commit()
        updated_recipe = Recipe.query.get(note.recipe_id)
        return updated_recipe.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


##delete note
@note_routes.route('/delete/<int:id>', methods=["DELETE"])
def delete_note(id):
    note = CookingNotes.query.get(id)
    recipe_id = note.recipe_id
    if note:
        db.session.delete(note)
        db.session.commit()
        updated_recipe = Recipe.query.get(recipe_id)
        return updated_recipe.to_dict()
    else:
        return{"message":f"No note found with this id ${id}"}