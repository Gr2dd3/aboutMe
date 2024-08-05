import { Link } from "react-router-dom";
import '../styling/StartPage.css';

export default function StartPage(){
    return (
        <>
        <Link class="segment1" to="/">Start</Link>
        <Link class="segment1" to="/ThisIsMe">About me</Link>
        </>
    )
}