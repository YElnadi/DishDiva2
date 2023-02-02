from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

class CookingNotes(db.Model):
    __tablename__='notes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    recipe_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("recipes.id")))
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    note = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    recipe = db.relationship("Recipe", back_populates='notes')

    user = db.relationship("User", back_populates='notes')


    def to_dict(self):
        return{
            "id":self.id,
            "recipe_id":self.recipe_id,
            "user_id":self.user_id,
            "user":self.user.username,
            "note":self.note
        }
