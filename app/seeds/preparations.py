from app.models import db, environment, SCHEMA, Preparation

def seed_preparations():
    step_1 = Preparation(
        recipe_id = 1,
        step = 1,
        instruction = "Bring a large pot of water to a boil. Season generously with salt and cook the pasta until al dente, then drain pasta." 
    )
    step_2 = Preparation(
        recipe_id = 1,
        step = 2,
        instruction="While the pasta is cooking, prep the chicken: Separate the skin from the meat and separate the meat from the bones; discard the bones and shred the meat into bite-size pieces. Season the chicken meat with 1½ teaspoons pepper and salt to taste. Gather the skin in a mound on a cutting board; slice it thinly then finely chop it and set aside."
    )
    step_3 = Preparation(
        recipe_id = 1,
        step = 3,
        instruction="Place a Dutch oven or large heavy pot over medium heat and add the butter. Once melted and bubbling, add onions, season with salt and pepper and cook, stirring and pressing often with a spatula or wooden spoon to help them cook down faster, until very soft, translucent and almost jammy with golden brown edges, about 10 minutes. Stir in the garlic and mustard and cook until very fragrant and softened, about 2 minutes."
    )
    step_4 = Preparation(
        recipe_id = 1,
        step=4,
        instruction="Turn the heat up to high, add ¾ cup stock and the heavy cream (if using) and scrape up any browned bits on the bottom of the pot. Bring to a simmer, then stir in the pasta, seasoned chicken and the skin. In small handfuls, add the greens, stirring until wilted and tender. Turn off the heat, add the lemon zest and juice the lemon halves over the top; stir again. Add the remaining ¼ cup stock if more sauciness is desired."
    )
    step_5 = Preparation(
        recipe_id=1,
        step = 5,
        instruction ="Sprinkle with grated Parmesan. Serve immediately, with more pepper and salt to taste."
    )
    step_2_1 = Preparation(
        recipe_id=2,
        step = 1,
        instruction ="Rinse the sage leaves and dry thoroughly with a towel. If the chicken breasts have the rib cage attached, remove it — and any other bones — with a sharp knife (or ask your butcher to do it for you). Don’t trim off any skin or fat. Set each chicken breast skin side down on a cutting board and pound with a large meat mallet to even out the hump, flattening the chicken to an even thickness."
    )
    step_2_2 = Preparation(
        recipe_id=2,
        step = 2,
        instruction ="Put the chicken in a large bowl or baking dish and add the garlic cloves, 12 sage leaves, ½ teaspoon salt and ½ teaspoon pepper. Turn the chicken to coat evenly in the seasonings, then arrange the chicken skin side up on top of the garlic and sage in a single layer. Cover and refrigerate for at least 1 hour and up to 6 hours."
    )
    step_2_3 = Preparation(
        recipe_id=2,
        step = 3,
        instruction ="Heat the olive oil and 1 tablespoon butter in a very large stainless steel sauté pan over medium-low. When the butter melts, add remaining 12 sage leaves and fry, turning and flipping them gently with a fork, until crisp, about 3 minutes. Remove the crispy sage to a plate.."
    )
    step_2_4 = Preparation(
        recipe_id=2,
        step = 4,
        instruction ="Turn the heat to medium and add the chicken, skin side down, along with its garlic and sage. Cook the chicken slowly but steadily, lowering the heat if the oil starts to smoke, until the skin crisps and turns a deep caramel color and the white sign of doneness creeps two-thirds of the way up the sides of the breasts, 25 to 30 minutes. Be prepared to stay stoveside, pressing on the chicken with a spatula to force contact with the pan and moving the chicken when it releases naturally from the pan for even cooking. Remove any garlic cloves or sage leaves that threaten to burn and save them for the sauce."
    )
    step_2_5 = Preparation(
        recipe_id=2,
        step = 5,
        instruction ="When the chicken skin has turned dark amber, flip the chicken, lower the heat to medium-low and cook gently until browned, 5 to 10 minutes. Turn off the heat. The residual heat will continue to cook the chicken while you finish the sauce."
    )
    step_2_6 = Preparation(
        recipe_id=2,
        step = 6,
        instruction ="Transfer the chicken to a serving platter and add the gin to the pan. Turn the heat to medium-low and simmer for 30 seconds to burn off the sharpness, then add the chicken stock and cook, scraping at the browned residue on the bottom of the pan to loosen it, until the liquid has reduced by half, 2 to 3 minutes. (You should have about ½ cup of sauce.) Add the lemon juice, any reserved garlic cloves and the remaining 2 tablespoons cold butter. Remove from the heat and swirl the pan to emulsify the sauce; taste and adjust salt and pepper as needed."
    )
    step_2_7 = Preparation(
        recipe_id=2,
        step = 7,
        instruction ="Move the chicken breasts to a cutting board and slice crosswise, taking care to cut neatly through the skin, then return to the platter. Pour the sauce around the perimeter of the platter — not over the chicken, which would dampen and soften the crispy skin — and top with the crispy sage leaves. Garnish with lemon wedges and serve immediately."
    )
    step_3_1 = Preparation(
        recipe_id=3,
        step = 1,
        instruction ="Pat chicken pieces dry and sprinkle with salt and pepper."
    )
    step_3_2 = Preparation(
        recipe_id=3,
        step = 2,
        instruction ="In a wide skillet with a lid, heat oil over medium. Working in batches if necessary to avoid crowding the pan, brown the chicken, rotating as needed, until the skin is golden and releases easily from the pan, at least 5 minutes per side. Adjust the heat to avoid scorching. As the pieces are browned, transfer them to a plate."
    )
    step_3_3 = Preparation(
        recipe_id=3,
        step = 3,
        instruction ="Once all the chicken is browned, add the onion and bell pepper to the skillet. Sprinkle with salt and cook, stirring, until softened and beginning to brown around the edges, about 5 minutes. Stir in the oregano and paprika."
    )
    step_3_4 = Preparation(
        recipe_id=3,
        step = 4,
        instruction ="Add the wine and simmer, stirring up the browned bits from the bottom of the pan, until the pan is almost dry, about 5 minutes."
    )
    step_3_5 = Preparation(
        recipe_id=3,
        step = 5,
        instruction ="Stir in stock, olives and currants, and bring to a simmer. Carefully return the chicken pieces to the pan. Cover and let simmer over low heat for 20 minutes. Remove the lid, stir and let simmer, uncovered, until the chicken is tender and the liquid reduces slightly, about 15 minutes. (The sauce will be quite loose.) Taste the sauce for salt and pepper. (Recipe can be made up to this point and refrigerated for up to 3 days.)"
    )
    step_3_6 = Preparation(
        recipe_id=3,
        step = 6,
        instruction ="When ready to serve, heat through and stir in lemon zest and juice. Divide among shallow bowls and sprinkle with parsley and almonds (if using). Serve with rice, orzo or toast."
    )
    step_4_1 = Preparation(
        recipe_id=4,
        step = 1,
        instruction ="Heat the oven to 375 degrees. In an 8-inch cast-iron or ovenproof skillet, melt the butter over medium-high heat. Add the chicken and hot sauce and simmer until the sauce has thickened and reduced by half, 2 to 3 minutes."
    )
    step_4_2 = Preparation(
        recipe_id=4,
        step = 2,
        instruction ="Turn off the heat, then stir in the lemon juice, sour cream and cream cheese until combined. Sprinkle the Cheddar cheese over the top."
    )
    step_4_3 = Preparation(
        recipe_id=4,
        step = 3,
        instruction ="Bake until bubbling around the edges and the cheese has melted, about 10 minutes. If you’d like the top to get browned, run it under the broiler for a minute or two."
    )
    step_4_4 = Preparation(
        recipe_id=4,
        step = 4,
        instruction ="Immediately garnish with blue cheese and chives. Serve with chips, bread or vegetables for dipping."
    )
    step_5_1 = Preparation(
        recipe_id=5,
        step = 1,
        instruction ="Roughly chop the processed cheese into 1-inch cubes, then add to a medium saucepan. Stir in the tomatoes and their juices, plus ⅔ cup water, then heat over medium-low, stirring frequently, until cheese is melted and mixture is creamy, 5 to 7 minutes. You can stop here, and serve immediately with chips, or proceed to Step 2, if you’re feeling extra."
    )
    step_5_2 = Preparation(
        recipe_id=5,
        step = 2,
        instruction ="Stir in any combination of desired additions: black beans, scallions, cilantro, garlic, cumin, red-pepper flakes, oregano, and lime zest and juice. Heat over low, stirring occasionally, until warmed and flavors meld, about 5 minutes. If you like some extra heat, stir in chipotle chiles en adobo. Season to taste with salt, and additional red-pepper flakes, if desired, and serve immediately. (You could also keep your queso in a slow-cooker on a low setting, stirring occasionally, to keep it molten.) Mixture will keep refrigerated for up to 1 week."
    )
    step_6_1 = Preparation(
        recipe_id=6,
        step = 1,
        instruction ="In medium skillet, heat oil over medium-high heat. Add onions to skillet, and cook until softened, about 3 minutes. Reduce heat to medium, add garlic and ginger, and cook another 2 minutes. Add garam masala, tomato paste and salt; cook and stir 2 minutes."
    )
    step_6_2 = Preparation(
        recipe_id=6,
        step = 2,
        instruction ="Place chicken pieces in a slow cooker, then add tomato paste mixture, lime zest and juice, coconut milk and chicken stock. Stir everything together, cover and cook on low heat setting for 4½ to 5 hours, until the chicken is cooked through. (You may let it cook up to 7 hours if necessary, but the chicken may be very soft and shred.) Garnish with cilantro and serve with basmati or jasmine rice, and naan if you have some."
    )
    
   



    db.session.add(step_1)
    db.session.add(step_2)
    db.session.add(step_3)
    db.session.add(step_4)
    db.session.add(step_5)
    db.session.add(step_2_1)
    db.session.add(step_2_2)
    db.session.add(step_2_3)
    db.session.add(step_2_4)
    db.session.add(step_2_5)
    db.session.add(step_2_6)
    db.session.add(step_2_7)
    db.session.add(step_3_1)
    db.session.add(step_3_2)
    db.session.add(step_3_3)
    db.session.add(step_3_4)
    db.session.add(step_3_5)
    db.session.add(step_3_6)
    db.session.add(step_4_1)
    db.session.add(step_4_2)
    db.session.add(step_4_3)
    db.session.add(step_4_4)
    db.session.add(step_5_1)
    db.session.add(step_5_2)

    db.session.add(step_6_1)
    db.session.add(step_6_2)






    db.session.commit()

    preparations = [step_1,step_2,step_3,step_4,step_5, step_2_7,step_2_6,step_2_5,step_2_4,step_2_3,step_2_2,step_2_1,step_3_6,step_3_5,step_3_4,step_3_3,step_3_2,step_3_1,step_4_4,step_4_3,step_4_2,step_4_1,step_5_2,step_5_1, step_6_1,step_6_2]
    return preparations

def undo_preparations():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.preparations RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM preparations")

    db.session.commit()

