import { useHistory } from "react-router-dom";



const NotFoundPage = () => {
    const history = useHistory()
    
    const homePage = (e) =>{
    e.preventDefault()
    history.push('/')
}
  return (
    <div>
      <div className="page-not-found">
        <div>
          <p>we are sorry we couldn't find the recipe you were looking for.</p>
          <p> Please check the URL and try again. </p>
          <p>If you are not sure what are you looking for,</p><p> you can browse our recipe categories to find something that catches your eye.</p>
          <img src="https://media1.giphy.com/media/YoVXiJR49pIXUyRYMz/giphy.gif?cid=ecf05e47i5y8brje28jcv3guke2ofy91y3eryg9upw36whmd&rid=giphy.gif&ct=g"></img>
        </div>
      </div>
      <div className="page-not-found-btn">
        <button onClick={homePage}className="page-not-found-btn-style">Home</button>
      </div>
    </div>
  );
};

export default NotFoundPage;