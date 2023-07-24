from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Recipe
from .auth_routes import validation_errors_to_error_messages

search_routes = Blueprint('search', __name__)

##search
@search_routes.route('/search', methods=['GET'])
def search_recipes():
    query = request.args.get('q', '').strip()  # Get the 'q' parameter from the query string

    if query:
        # Fetch recipes from the database that match the search query (case-insensitive search)
        recipes = Recipe.query.filter(Recipe.title.ilike(f"%{query}%")).all()

        # Convert the list of recipes to a list of dictionaries
        results = [recipe.to_dict() for recipe in recipes]
    else:
        results = []

    return jsonify(results)
