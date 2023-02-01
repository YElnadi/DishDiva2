from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Preparation, Recipe
from app.forms.preparation_form import PreparationForm
from .auth_routes import validation_errors_to_error_messages


preparation_routes = Blueprint('preparations', __name__)

#get all preparations
@preparation_routes.route('')
def preparations():
    preparations = Preparation.query.order_by(Preparation.id.desc()).all()
    return{"Preparations":[preparation.to_dict() for preparation in preparations]}

#update Preparations
@preparation_routes.route('/update/<int:id>', methods=["PUT"])
#@login_required
def update_preparation(id):
    form = PreparationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        preparation = Preparation.query.get(id)
        preparation.step = form.data['step']
        preparation.instruction = form.data['instruction']
        db.session.commit()
        updated_recipe = Recipe.query.get(preparation.recipe_id)
        return updated_recipe.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


#delete preparation
@preparation_routes.route('/delete/<int:id>', methods=["DELETE"])
#@login_required
def delete_preparation(id):
    preparation = Preparation.query.get(id)
    recipe_id = preparation.recipe_id
    if preparation:
        db.session.delete(preparation)
        db.session.commit() 
        updated_recipe = Recipe.query.get(recipe_id)
        return updated_recipe.to_dict()
    else:
          return{"message":f"No preparation found with this id ${id}"}