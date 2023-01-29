from app.models import db, environment, SCHEMA, Ingredient

def seed_ingredients():
    ingredient_1 = Ingredient(
        recipe_id = 1,
        quantity = 1,
        unit = 'cup',
        item_name = 'quinoq, rinsed'
    )
    ingredient_2 = Ingredient(
        recipe_id = 1,
        quantity = 1,
        unit = '',
        item_name = 'lemon'
    )
    ingredient_3 = Ingredient(
        recipe_id = 1,
        quantity = 3,
        unit = 'tablespoons',
        item_name = 'extra-virgin olive oil'
    )
    ingredient_4 = Ingredient(
        recipe_id = 1,
        quantity = 3,
        unit = 'tablespoons',
        item_name = 'Dijon mustard'
    )
    ingredient_5 = Ingredient(
        recipe_id = 1,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'honey'
    )
    ingredient_6 = Ingredient(
        recipe_id = 1,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'apple cider vinegar Freshly ground black pepper'
    )
    ingredient_7 = Ingredient(
        recipe_id = 1,
        quantity = 1,
        unit = 'large',
        item_name = 'bunch broccoli (about 1½ pounds)'
    )
    ingredient_8 = Ingredient(
        recipe_id = 1,
        quantity = 1,
        unit = 'mdeium',
        item_name = 'tart and crisp apple'
    )
    ingredient_9 = Ingredient(
        recipe_id = 1,
        quantity = 4,
        unit = 'ounces',
        item_name = 'sharp Cheddar'
    )
    ingredient_10 = Ingredient(
        recipe_id = 1,
        quantity = 3/4,
        unit = 'cup',
        item_name = 'toasted pecans, roughly chopped'
    )
    ingredient_11 = Ingredient(
        recipe_id = 1,
        quantity = 1/2,
        unit = 'cup',
        item_name = 'dried cranberries'
    )
    ingredient_2_1 = Ingredient(
        recipe_id = 2,
        quantity = 24,
        unit = '',
        item_name = 'sage leaves'
    )
    ingredient_2_2 = Ingredient(
        recipe_id = 2,
        quantity = 3,
        unit = 'large',
        item_name = 'skin-on chicken breasts'
    )
    ingredient_2_3 = Ingredient(
        recipe_id = 2,
        quantity = 6,
        unit = '',
        item_name = 'garlic cloves, smashed and peeled Fine sea salt and freshly ground black pepp'
    )
    ingredient_2_4 = Ingredient(
        recipe_id = 2,
        quantity = 3,
        unit = 'tablespoons',
        item_name = 'olive oil'
    )
    ingredient_2_5 = Ingredient(
        recipe_id = 2,
        quantity = 3,
        unit = 'tablespoons',
        item_name = 'cold butter'
    )
    ingredient_2_6 = Ingredient(
        recipe_id = 2,
        quantity = 3/4,
        unit = 'cup',
        item_name = 'chicken stock, preferably homemade'
    )

    ingredient_2_7 = Ingredient(
        recipe_id = 2,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_3_1 = Ingredient(
        recipe_id = 3,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_3_2 = Ingredient(
        recipe_id = 3,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_3_3 = Ingredient(
        recipe_id = 3,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_3_4 = Ingredient(
        recipe_id = 3,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_3_5 = Ingredient(
        recipe_id = 3,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_3_6 = Ingredient(
        recipe_id = 3,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_4_1 = Ingredient(
        recipe_id = 4,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_4_2 = Ingredient(
        recipe_id = 4,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_4_3 = Ingredient(
        recipe_id = 4,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_4_4 = Ingredient(
        recipe_id = 4,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_4_5 = Ingredient(
        recipe_id = 4,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_4_6 = Ingredient(
        recipe_id = 4,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_5_1 = Ingredient(
        recipe_id = 5,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_5_2 = Ingredient(
        recipe_id = 5,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_5_3 = Ingredient(
        recipe_id = 5,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_5_4 = Ingredient(
        recipe_id = 5,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_5_5 = Ingredient(
        recipe_id = 5,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_5_6 = Ingredient(
        recipe_id = 5,
        quantity = 2,
        unit = 'tablespoons',
        item_name = 'ch fresh lemon juice, plus wedges for serving'
    )
    ingredient_6_1 = Ingredient(
        recipe_id = 6,
        quantity = 3,
        unit = 'tablespoons',
        item_name = 'vegetable oil'
    )
    ingredient_6_2 = Ingredient(
        recipe_id = 6,
        quantity = 3,
        unit = 'tablespoons',
        item_name = 'grated ginger'
    )
    ingredient_6_3 = Ingredient(
        recipe_id = 6,
        quantity = 1,
        unit = 'tablespoons',
        item_name = 'garam masala'
    )
    ingredient_6_4 = Ingredient(
        recipe_id = 6,
        quantity = 1,
        unit = '',
        item_name = 'can tomato paste'
    )
    ingredient_6_5 = Ingredient(
        recipe_id = 6,
        quantity = 3,
        unit = 'tablespoons',
        item_name = 'vegetable oil'
    )
    ingredient_6_6 = Ingredient(
        recipe_id = 6,
        quantity = 3,
        unit = 'tablespoons',
        item_name = 'vegetable oil'
    )
    ingredient_6_7 = Ingredient(
        recipe_id = 6,
        quantity = 3,
        unit = 'tablespoons',
        item_name = 'vegetable oil'
    )
    ingredient_6_8 = Ingredient(
        recipe_id = 6,
        quantity = 3,
        unit = 'tablespoons',
        item_name = 'vegetable oil'
    )
    ingredient_6_9 = Ingredient(
        recipe_id = 6,
        quantity = 3,
        unit = 'tablespoons',
        item_name = 'vegetable oil'
    )






    db.session.add(ingredient_1)
    db.session.add(ingredient_2)
    db.session.add(ingredient_3)
    db.session.add(ingredient_4)
    db.session.add(ingredient_4)
    db.session.add(ingredient_5)
    db.session.add(ingredient_6)
    db.session.add(ingredient_7)
    db.session.add(ingredient_8)
    db.session.add(ingredient_9)
    db.session.add(ingredient_10)
    db.session.add(ingredient_11)
    db.session.add(ingredient_2_1)
    db.session.add(ingredient_2_2)
    db.session.add(ingredient_2_3)
    db.session.add(ingredient_2_4)
    db.session.add(ingredient_2_5)
    db.session.add(ingredient_2_6)
    db.session.add(ingredient_2_7)
    db.session.add(ingredient_3_1)
    db.session.add(ingredient_3_2)
    db.session.add(ingredient_3_3)
    db.session.add(ingredient_3_4)
    db.session.add(ingredient_3_5)

    db.session.add(ingredient_4_1)
    db.session.add(ingredient_4_2)
    db.session.add(ingredient_4_3)
    db.session.add(ingredient_4_4)
    db.session.add(ingredient_4_5)
    db.session.add(ingredient_4_6)

    db.session.add(ingredient_5_1)
    db.session.add(ingredient_5_2)
    db.session.add(ingredient_5_3)
    db.session.add(ingredient_5_4)
    db.session.add(ingredient_5_5)
    db.session.add(ingredient_5_6)

    db.session.add(ingredient_6_1)
    db.session.add(ingredient_6_2)
    db.session.add(ingredient_6_3)
    db.session.add(ingredient_6_4)
    db.session.add(ingredient_6_5)
    db.session.add(ingredient_6_6)
    db.session.add(ingredient_6_7)
    db.session.add(ingredient_6_8)
    db.session.add(ingredient_6_9)





    db.session.commit()

    ingredients = [ingredient_1,ingredient_2,ingredient_3,ingredient_4,ingredient_5,ingredient_6,ingredient_7,ingredient_8,ingredient_9,ingredient_10,ingredient_11, ingredient_2_1,ingredient_2_2,ingredient_2_3,ingredient_2_4,ingredient_2_5,ingredient_2_6,ingredient_2_7, ingredient_3_6, ingredient_3_5, ingredient_3_1,ingredient_3_2,ingredient_3_3,ingredient_3_4, ingredient_4_6,ingredient_4_5,ingredient_4_3,ingredient_4_2,ingredient_4_4,ingredient_4_1, ingredient_5_6, ingredient_5_5, ingredient_5_4,ingredient_5_3,ingredient_5_2, ingredient_5_1, ingredient_6_9, ingredient_6_8, ingredient_6_7,ingredient_6_6,ingredient_6_5,ingredient_6_4,ingredient_6_3,ingredient_6_2,ingredient_6_1]
    return ingredients


def undo_ingredients():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.ingredients RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM ingredients")

    db.session.commit()






