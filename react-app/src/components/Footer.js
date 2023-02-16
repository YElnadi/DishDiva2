function Footer() {

const currentYear = new Date(). getFullYear()
  return (
    <div  className='page-footer'>
     <p>&copy; <span id='date'>{currentYear}</span> Built by <a href='https://github.com/YElnadi/DishDiva2.git' style={{textDecoration:'none', fontWeight:'bold'}}>Yasmine Elnadi</a></p>
     
    </div>
  );
}

export default Footer;
  