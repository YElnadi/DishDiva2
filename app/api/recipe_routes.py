from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Recipe, Ingredient,Preparation
from ..forms.create_recipe_form import RecipeForm, IngredientForm
from ..forms.edit_recipe_form import EditRecipeForm
from ..forms.preparation_form import PreparationForm
from .auth_routes import validation_errors_to_error_messages
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

recipe_routes = Blueprint('recipes', __name__)

# get all recipes
@recipe_routes.route('/')
def recipes():
    recipes = Recipe.query.all()
    return {"recipes": [recipe.to_dict()for recipe in recipes]}


# get single recipe
@recipe_routes.route('/<int:recipe_id>', methods=["GET"])
def get_single_recipe(recipe_id):
    recipe = Recipe.query.get(recipe_id)
    if not recipe:
        return {"error": "recipe not found"}, 404
    return recipe.to_dict()

# get All recipes by user id
@recipe_routes.route('/users/<int:id>')
def get_my_recipes(id):
    recipes = Recipe.query.filter_by(user_id=id).all()
    if len(recipes):
        return {
            'recipes': [recipe.to_dict() for recipe in recipes]
        }
    else:
        return {'recipe': {}}


# Create a Recipe
# @recipe_routes.route('/new-recipe', methods=["POST"])
# @login_required
# def create_recipe():
#     form = RecipeForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         new_recipe = Recipe(
#             title = form.data['title'],
#             description = form.data['description'],
#             preparations = form.data['preparations'],
#             servings = form.data['servings'],
#             cook_time = form.data['cook_time'],
#             image_url = form.data['image_url'],
#             user_id = current_user.id,
#         )
#         db.session.add(new_recipe)
#         db.session.commit()
#         return new_recipe.to_dict()
#     return {"errors":validation_errors_to_error_messages(form.errors)}, 401

# create a recipe
@recipe_routes.route("/new", methods=["POST"])
@login_required
def upload_image():
    if "image" not in request.files:
        return {"errors": "image required"}, 400
    print('request files:', request.files)

    image = request.files["image"]
    data = request.form.to_dict()
    print("data from recipe route", data)
    description = data['description']

    if len(description)<100:
        return {"errors":"Description must be greater than 100 characters"}
    

    if not allowed_file(image.filename):
        return {"errors": "image of type pdf, png, jpg, jpeg, gif are the only allowed"}, 400
    
    

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)
    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    # new_image = Image(user=current_user, url=url)
    new_recipe = Recipe(
        image_url=url,
        title=data['title'],
        description=data['description'],
        servings=data['servings'],
        cook_time=data["cook_time"],
        # ingredients = data["ingredients"],
        # Ingredients = Ingredient(
        #     unit = data["unit"],
        #     quantity = data["quantity"],
        #     item_name = data["item_name"]
        # ),
        user_id=current_user.id,
    )
    db.session.add(new_recipe)
    db.session.commit()
    return new_recipe.to_dict()


# Delete a recipe
@recipe_routes.route("/<int:id>", methods=['DELETE'])
@login_required
def delete_recipe(id):
    recipe = Recipe.query.get(id)
    if recipe:
        db.session.delete(recipe)
        db.session.commit()
        return {"message": "Recipe has been deleted successfully"}
    else:
        return {"message": f"No recipe found with id f {id}"}


# Edit Recipe
@recipe_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_recipe(id):
    form = EditRecipeForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        recipe = Recipe.query.get(id)
        recipe.title = form.data['title']
        recipe.description = form.data['description']
        recipe.servings = form.data['servings']
        recipe.cook_time = form.data['cook_time']
        db.session.commit()
        return recipe.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# add ingredients to recipe
@recipe_routes.route("/<int:id>/add-ingredients", methods=["POST"])
# @login_required
def add_ingredients_to_recipe(id):
    # recipe = Recipe.query.get(id)
    form = IngredientForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_ingredient = Ingredient(
            quantity=form.data["quantity"],
            unit=form.data["unit"],
            item_name=form.data["item_name"],
            recipe_id=form.data["recipe_id"],
        )
        # recipe.append(new_ingredient)
        db.session.add(new_ingredient)
        db.session.commit()
        updated_recipe = Recipe.query.get(form.data['recipe_id'])
        return updated_recipe.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


##Add preparations to recipe
@recipe_routes.route("/<int:id>/add-preparations", methods=['POST'])
def add_preparations_to_recipe(id):
    form = PreparationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_preparation = Preparation(
            step=form.data["step"],
            instruction = form.data["instruction"],
            recipe_id=form.data["recipe_id"],
        )
        db.session.add(new_preparation)
        db.session.commit()
        updated_recipe = Recipe.query.get(form.data['recipe_id'])
        return updated_recipe.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

