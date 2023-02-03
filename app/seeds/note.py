from app.models import db, environment, SCHEMA, CookingNotes

def seed_notes():
    note_1 = CookingNotes(
        recipe_id = 1,
        user_id = 1,
        note = "I didn’t have baby spinach so I used frozen spinach. It worked out fine. I used the Vitamix for pureeing. I used spring onions instead of chives. The next day it was still fresh as can be. I fried up pumpkin seeds, coriander, red pepper flakes and almond slivers. All in a bit of canola oil, mixed Garam massala and some sugar and salt.So the soup was decorated with parsley, lemon zest, spring onion,seed mix and crème"
    )
    note_2 = CookingNotes(
        recipe_id = 2,
        user_id = 2,
        note = "Easy, fresh, and really delicious. I made a few swaps based on what I had in my fridge (fennel for celery, dill for parsley), and bulked up the last of my spinach with a few handfuls of arugula. It all made for a light and very springy soup."
    )
    note_3 = CookingNotes(
        recipe_id = 3,
        user_id = 3,
        note = "A lovely, fresh and healthy pea soup - a great take on what is often a tad lacklustre. Super easy and took about 40 mins in total. I used white wine and omitted the pasta at the end and instead served with Ali Slagle's Garlic Bread. What a wonderful dinner, highly recommend!"
    )


    db.session.add(note_1)
    db.session.add(note_2)
    db.session.add(note_3)

    db.session.commit()

    notes =[note_3, note_1, note_2]
    return notes

def undo_notes():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.notes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM notes")

    db.session.commit()
