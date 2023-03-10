from .db import db, environment, SCHEMA, add_prefix_for_prod

class Image(db.Model):
    __tablename__ = "images"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    # user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    url = db.Column(db.String)

    # user = db.relationship("User", back_populates="images")

    def to_dict(self):
        return {
            "id": self.id,
            # "username": self.user.id,
            "url": self.url,
        }