import logo from "../static/images/logoo.png";
import { NavLink, Redirect } from "react-router-dom";

const About = () => {
  return (
    <div className="main">
        <h2>About me</h2>
      <p style={{wordBreak: "break-word", width:'80%'}}>Dish Diva is a cutting-edge recipe web app that combines the power of Flask in the backend with the versatility of React-Redux in the frontend. This innovative platform offers a wealth of features that are designed to help you find, create, and manage recipes with ease. With four key functions - recipe, ingredients, preparations, and cooking notes - Dish Diva gives you full CRUD functionality and the ability to organize and keep track of your recipes in a comprehensive and user-friendly manner. Whether you're a professional chef or simply looking to experiment in the kitchen, Dish Diva is the perfect tool for all your culinary needs.</p>
      <div className="sideNav">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "auto 0",
            }}
          >
            <div style={{ backgroundColor: "rgb(242, 243, 239)" }}>
              <div>
                <NavLink to="/" exact={true} activeClassName="active">
                  <img src={logo} style={{ width: "200px" }} />
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                textAlign: "center",
                marginTop: "50px",
                fontSize: "25px",
              }}
            >
              {" "}
              <i className="fa-solid fa-house"></i> Home
            </NavLink>

            <a style={{
                textDecoration: "none",
                color: "black",
                textAlign: "center",
                marginTop: "20px",
                fontSize: "40px",
            }}
            href='https://github.com/YElnadi/DishDiva2.git'><i className="fa-brands fa-github"></i></a>

            <a style={{
                textDecoration: "none",
                color: "black",
                textAlign: "center",
                marginTop: "20px",
                fontSize: "40px",
            }}
            href='https://linkedin.com/in/yasmine-elnadi-117912142'><i className="fa-brands fa-linkedin"></i></a>
            
            

          </div>
        </div>
    </div>
  );
}

export default About;
