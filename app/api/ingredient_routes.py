from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Ingredient, Recipe
from app.forms.create_recipe_form import IngredientForm
from .auth_routes import validation_errors_to_error_messages

ingredient_routes = Blueprint('ingredients', __name__)

##get all Ingredients
@ingredient_routes.route('')
def ingredients():
     ingredients = Ingredient.query.order_by(Ingredient.id.desc()).all()
     return {"Ingredients": [ingredient.to_dict() for ingredient in ingredients]}

##get all Ingredeints by recipe id
# @ingredient_routes.route('/<int:recipeId>')
# def ingredients(recipeId):
#      recipe_ingredients = [ingredient for ingredient in ingredients if ingredient['recipeId']==recipeId]
#      return recipe_ingredients.to_dict()
     


##update ingredient
@ingredient_routes.route('/update/<int:id>', methods=["PUT"])
#@login_required
def update_ingredient(id):
     form = IngredientForm()
     form['csrf_token'].data = request.cookies['csrf_token']
     if form.validate_on_submit():
          ingredient = Ingredient.query.get(id)
          ingredient.quantity = form.data['quantity']
          ingredient.unit = form.data['unit']
          ingredient.item_name = form.data['item_name']
          db.session.commit()
          updated_recipe = Recipe.query.get(ingredient.recipe_id)
          return updated_recipe.to_dict()
     return {'errors': validation_errors_to_error_messages(form.errors)}, 401
          
# ##update ingredient
# @ingredient_routes.route('/update/<int:id>', methods=["PUT"])
# #@login_required
# def update_ingredient(id):
#      form = IngredientForm()
#      form['csrf_token'].data = request.cookies['csrf_token']
#      if form.validate_on_submit():
#           ingredient = Ingredient.query.get(id)
#           ingredient.quantity = form.data['quantity']
#           ingredient.unit = form.data['unit']
#           ingredient.item_name = form.data['item_name']
#           db.session.commit()
#           updated_recipe = Recipe.query.get(ingredient.recipe_id)
#           return updated_recipe.to_dict()
#      return {'errors': validation_errors_to_error_messages(form.errors)}, 401

##delete ingredient
@ingredient_routes.route('/delete/<int:id>', methods=["DELETE"])
#@login_required
def delete_ingredient(id):
     ingredient = Ingredient.query.get(id)
     recipe_id = ingredient.recipe_id
     if ingredient:
          db.session.delete(ingredient)
          db.session.commit()
          updated_recipe = Recipe.query.get(recipe_id)
          return updated_recipe.to_dict()
     else:
          return{"message":f"No ingredient found with this id ${id}"}
     

# ##delete ingredient
# @ingredient_routes.route('/delete/<int:id>', methods=["DELETE"])
# #@login_required
# def delete_ingredient(id):
#      ingredient = Ingredient.query.get(id)
#      recipe_id = ingredient.recipe_id
#      if ingredient:
#           db.session.delete(ingredient)
#           db.session.commit()
#           updated_recipe = Recipe.query.get(recipe_id)
#           return updated_recipe.to_dict()
#      else:
#           return{"message":f"No ingredient found with this id ${id}"}