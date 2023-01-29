from app.models import db, environment, SCHEMA, Recipe


def seed_recipes():
    recipe_1 = Recipe(        
        user_id=1,
        title="Rotisserie Chicken and Greens Pasta",
        image_url="https://static01.nyt.com/images/2023/01/25/multimedia/cr-rotisserie-chicken-and-greens-pasta-lvbp/cr-rotisserie-chicken-and-greens-pasta-lvbp-articleLarge.jpg?w=1280&q=75",
        description="This cozy, comforting pot of soup comes together quickly with a few pantry staples. Creamy canned navy beans and jasmine rice add body to a base of softened vegetables stained with turmeric. You may be tempted to add stock, but be assured that using water is enough here. The sum of the ingredients can stand on its own and doesnt need the added boost of stock. (If you do add stock, be mindful of the amount of salt you use.) The dill  which can be dried or fresh  and turmeric brighten up the soup and offer a bright reminder of spring any time of year.",
        servings=6,
        cook_time=30
        )
    recipe_2 = Recipe(        
        user_id=1,
        title="Crispy Smashed Chicken Breasts With Gin and Sage",
        image_url="https://static01.nyt.com/images/2023/01/29/multimedia/29EAT-crispy-smashed-chicken-breasts-with-gin-and-sage-wmtk/29EAT-crispy-smashed-chicken-breasts-with-gin-and-sage-wmtk-master768.jpg?w=1280&q=75",
        description="This stellar chicken dinner, adapted from Amy Thielen’s forthcoming cookbook “Company” (W. W. Norton, 2023), is full of delights and surprises. Boneless, skin-on breasts, cooked almost entirely on their skin sides, gain a savory, juniper-pierced jus and taste fabulous in between bites of crispy sage leaves. “If someone were to stand over a pan of sautéing chicken holding an ice-cold martini and happen to slosh it into the pan, you would have this sauce,” she writes.",
        servings=6,
        cook_time=60
        )
    recipe_3 = Recipe(        
        user_id=2,
        title="James Beard’s Farmer’s Chicken",
        image_url="https://static01.nyt.com/images/2020/12/16/dining/15Beardrex/merlin_178770246_fd9eec73-7aea-4d2c-a7d8-bbce7eb8c0b2-master768.jpg?w=1280&q=75",
        description="This recipe from the eminent American food writer came to The Times through the chef Andrew Zimmern, who was a frequent guest at James Beard’s legendary Sunday and holiday open houses when he was a child. The savory combination of red peppers, onions, raisins, almonds and green olives was new and exciting to him in the 1970s, and still tastes fresh today. ",
        servings=6,
        cook_time=60
        )
    recipe_4 = Recipe(        
        user_id=2,
        title="Buffalo Chicken Dip",
        image_url="https://static01.nyt.com/images/2019/02/03/dining/03a3_recipe/as-buffalo-dip-master768-v2.jpg?w=1280&q=75",
        description="Sour cream and onion, spinach-artichoke, queso and fondue are warm dips you know and love, but we'd urge you to get to know Buffalo chicken dip a little better. It’s a quick, one-pan snack, spicy from a heavy pour of hot sauce, luscious from sour cream and cream cheese and a little funky from the blue cheese. With just the right amount of acid and salt, it'll keep people coming back for more. It also plays well with beer, but that you already knew.",
        servings=6,
        cook_time=20
        )
    recipe_5 = Recipe(        
        user_id=3,
        title="Queso",
        image_url="https://static01.nyt.com/images/2020/01/29/dining/aw-queso/aw-queso-master768.jpg?w=1280&q=75",
        description="Queso, a popular Tex-Mex dip made with processed American cheese and canned tomatoes, was inspired by chile con queso, a Mexican dip of melted cheese and chiles that made its way to the United States in the 1930s and ’40s. As the two-ingredient Americanized adaptation gained popularity, supermarkets began placing Ro-tel canned tomatoes near shelf-stable Velveeta cheese, and queso became mainstream. Purists will argue that any ingredient beyond American cheese and spicy diced tomatoes is unnecessary, but you can customize this recipe by adding any combination of black beans, scallions, cilantro, garlic, cumin, red-pepper flakes, oregano, lime zest or juice.",
        servings=6,
        cook_time=20
        )
    recipe_6 = Recipe(        
        user_id=3,
        title="Slow-Cooker Butter Chicken",
        image_url="https://static01.nyt.com/images/2017/07/12/multimedia/12crowdrex-copy/12crowdrex-master768.jpg?w=1280&q=75",
        description="Not every version of butter chicken uses butter. Coconut milk gives this slow-cooker chicken its creamy richness. This is a fast recipe for the cook: Just prep it earlier in the day, even during your morning routine, getting your onion and spices going on the stove while simultaneously making lunches for grumpy children, folding dish towels, feeding the dogs and wondering once again why no one else has done any of the above. If you're preparing pork or beef in the slow cooker, you'll want to brown the meat first, but that's not necessary with boneless cuts of chicken. The meat will be cooked within 4½ or 5 hours, but if you need to let it sit a little longer — up to 7 hours total, on low heat — it will still be delicious, though the chicken may be very soft and shred a tad.",
        servings=6,
        cook_time=120
        )
    db.session.add(recipe_1)
    db.session.add(recipe_2)
    db.session.add(recipe_3)
    db.session.add(recipe_4)
    db.session.add(recipe_5)
    db.session.add(recipe_6)


    db.session.commit()


def undo_recipes():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.recipes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM recipes")

    db.session.commit()
