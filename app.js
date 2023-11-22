import React from "react";
import ReactDOM from "react-dom/client"

//plan the ui mock and component structure before coding 

/*
Food ordering app planning

Component level structure

*Heading
-logo
-nav items
*Body
-search bar
- Resturant Container(contains all the resturant cards)
- each  resturant  container will have Image Preview and it details
*footer
- copyright
- address
*/

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                 <img className="logo" src="https://cdn.dribbble.com/userupload/9902999/file/original-de06ad0905f8f51f1e1d0adbf2c4e538.jpg?resize=400x0"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Help</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const ResturantCard = () => {
    return (
        <div className="res-card">
                <img  className="res-logo" src="https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg" />
            <h3>Al Bek Resturant</h3>
            <h4>Biryani</h4>
            <h4>4.1</h4>
        </div>
    )
} 
const Body  = () => {
    return (
        <div>
            <div className="search-bar">
                <h4>search</h4>
            </div>
            <div className="resturant-container">
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
            </div>
        </div>
    )
}

const AppmainLayout = () => {
    return (
        <div className="main-comp">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppmainLayout/>)
