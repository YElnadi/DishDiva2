import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadRecipesThunk } from "../store/recipes";
import HomeRecipeCards from "./HomeRecipeCards";
import CoverPhoto from "./CoverPhoto";
import "./Home.css";
import "./SingleRecipeDetails.css";
import image from "../static/images/background.jpeg";
import Footer from "./Footer";

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

      <div
        style={{
          marginLeft: "100px",
          marginBottom: "20px",
          textDecoration: "underline",
          fontWeight: "bold",
        }}
      >
        The Cooking Newsletter
      </div>

      <h2
        style={{
          marginLeft: "100px",
          marginBottom: "20px",
          fontSize: "40px",
        }}
      >
        What to Cook this Weekend
      </h2>

      <div style={{display:'flex', flexDirection:'column'}}>
        <h2 style={{ inlineSize: 700, textAlign:'left', margin:'0 auto', width:'50%', marginBottom:'20px'}}>
          Good morning. This week, Eric Kim brought us a recipe for sautéed
          chicken breasts with a gin and sage pan sauce (above), adapted from
          the one he found in Amy Thielen’s forthcoming cookbook, “Company.”
        </h2>

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
      <div style={{ paddingBottom: "200px" }}></div>
     <div style={{backgroundColor:'black'}}><Footer/></div> 
    </>
  );
};

export default Home;
