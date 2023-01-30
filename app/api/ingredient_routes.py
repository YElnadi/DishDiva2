from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Ingredient

ingredient_routes = Blueprint('ingredients', __name__)

##get all Ingredients
@ingredient_routes.route('')
def ingredients():
     ingredients = Ingredient.query.order_by(Ingredient.id.desc()).all()
     return {"Ingredeints": [ingredient.to_dict() for ingredient in ingredients]}


##update ingredient
@ingredient_routes.route('/update/<int:id>', methods=["PUT"])
# @login_required
def update_ingredients(id):
     ingredients = Ingredient.query.get(id)
     new_quantity = request.json['quantity']
     new_unit = request.json['unit']
     new_item_name = request.json['item_name']
     if ingredients:
          ingredients.quantity = new_quantity
          ingredients.unit = new_unit
          ingredients.item_name = new_item_name
          db.session.commit()
          return ingredients.to_dict()


##delete ingredient
@ingredient_routes.route('/delete/<int:id>', methods=["DELETE"])
##@login_required
def delete_ingredient(id):
     ingredient = Ingredient.query.get(id)
     if ingredient:
          db.session.delete(ingredient)
          db.session.commit()
          return {"message":"Ingredient Successfully deleted"}
     else:
          return{"message":f"No ingredient found with this id ${id}"}