import { Link } from "react-router-dom";
import '../styling/StartPage.css';

export default function StartPage(){
    return (
        <>
        
        
        <Link class="segment a2" to="/ThisIsMe">
        
        <Link class="home" to="/"><h4>Hem</h4></Link>
        <img src="C:\Users\gradd\source\repos\myWebPage\mywebpage-fe\src\data\img\Mattias23.jpg" alt="profile" />
        <h1>Mattias Gradin</h1>
        </Link>
        
        </>
    )
}