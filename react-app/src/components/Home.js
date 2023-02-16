import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadRecipesThunk } from "../store/recipes";
import HomeRecipeCards from "./HomeRecipeCards";
import CoverPhoto from "./CoverPhoto";
import "./Home.css";
import "./SingleRecipeDetails.css";
import image from "../static/images/background.jpeg";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Home = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes.allRecipes);
  //console.log("all recipes",allRecipes)
  //const recipesList = Object.values(allRecipes)
  //console.log("recipesList",recipesList)

  useEffect(() => {
    dispatch(loadRecipesThunk());
  }, [dispatch]);

  return (
    <>
     <NavBar/>
      {/* <CoverPhoto/> */}
      <img src={image} className="banner-image" />
      <div style={{ marginTop: "100px" }}></div>
      <h1
        style={{
          fontWeight: 900,
          textAlign: "center",
          fontSize: "50px",
          paddingBottom: 0,
        }}
      >
        What to cook this week
      </h1>

      <h3
        style={{
          textAlign: "center",
          fontSize: "15px",
          paddingTop: 0,
          paddingBottom: "20px",
        }}
      >
        RECIPES, GUIDES AND MORE FOR THE WEEK OF{" "}
        {new Date().toLocaleString("en-US", { month: "long" }).toUpperCase()}{" "}
        {new Date().toLocaleString("en-US", { day: "2-digit" })}th{" "}
      </h3>

      <div
        style={{
          border: "5px solid black",
          marginLeft: "100px",
          marginRight: "100px",
          marginBottom: "20px",
        }}
      ></div>

      <h2
        style={{
          marginLeft: "100px",
          marginBottom: "20px",
          fontSize: "40px",
        }}
      >
        Developer Favorite Recipes
      </h2>

      <div style={{display:'flex', flexDirection:'column' }}>
        <div>
        <p
          style={{
            inlineSize: 800,
            marginBottom: "20px",
            wordBreak:'break-word',
            fontWeight:'bold',
            fontSize:'20px',
            float:'right',
            width:'70%',
            marginRight:'100px'
            
          }}
        >
          DishDiva is a recipe web app created by Yasmine, a developer and food lover. In this app, Yasmine showcases her favorite recipes and invites other tech enthusiasts to share their culinary creations. DishDiva is more than just a recipe database - it's a platform for the tech community to come together and share their love for food and code. With a user-friendly interface, full CRUD functionality, and a wide variety of recipes to choose from, DishDiva is the ultimate resource for developers who love to cook. So join Yasmine on this delicious journey and discover new recipes, cooking tips, and techniques that will take your love for technology and taste to the next level.
        </p>
        </div>

        <div className="cards-container">
          {Object.values(allRecipes).length > 0 && (
            <>
              {Object.values(allRecipes).map((recipe) => (
                <HomeRecipeCards key={recipe.id} recipe={recipe} />
              ))}
            </>
          )}
        </div>
      </div>
      <div><Footer/></div>
    </>
  );
};

export default Home;
