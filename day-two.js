import React from 'react';
import './App.css';

function Product(props){
    return(
        <div className='product'>
            <h3>Title</h3>
            <img id='img_size' src={props.url} alt="logo" />
            <br />
            <h4>Price: Rs.{props.price}</h4>
            <button>add to cart</button>
        </div>
    )
}

function Webpage(){
    return(
        <div>
            <div className='Header'>
            <img id='logo' src="https://img.icons8.com/ios-filled/1x/monzo.png" alt="" />
            <div id='anchor'>
            <a href="https://medium.com/@vitaliysteffensen/react-js-how-to-add-an-image-a-beginners-guide-66334f1d18be">Home</a>
            <a href="https://medium.com/@vitaliysteffensen/react-js-how-to-add-an-image-a-beginners-guide-66334f1d18be">Menu</a>
            <a href="https://medium.com/@vitaliysteffensen/react-js-how-to-add-an-image-a-beginners-guide-66334f1d18be">About</a>
            </div>
            </div>
            <h2 className='fp'>Featured products</h2>
            
            <section id='product'>
            <Product price = "300" url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7zWkUod2gEK5xFBTAd2XAiIoJhVFSjcdLA&usqp=CAU" />
            <Product price = "799" url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjal7P9MfSpxt_PNuEa63XV9zu8z8aJhhtg&usqp=CAU" />
            <Product price = "999" url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7zWkUod2gEK5xFBTAd2XAiIoJhVFSjcdLA&usqp=CAU" />
            </section>
          
           
            <footer>
            <a href="https://www.linkedin.com/home">Twitter</a>
            <a href="https://www.linkedin.com/home">Instagram</a>
            <a href="https://www.linkedin.com/home">Facebook</a>
            <a href="https://www.linkedin.com/home">LinkedIn</a>
            </footer>
           
            
        </div>
    )
}

export default Webpage;