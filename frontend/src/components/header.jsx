import "./header.css"
export default function Header()
{
    var city;
    return (
    <div className="header">
        <div className="left">
        <h1>Trazer</h1>
        </div>
        <div className="right">
        <div className="rightItems">
        <input type="search"  id="search" name="cityname" placeholder= " search for loaction" height="41.6px" />
        <input type="submit" className="submit" value="search" />
        <a href="/"><li className="items ">home</li></a>
        <a href="/about"><li className="items">about</li></a>
        <a href="/username"><li className="items">profile</li></a>
        </div>
        </div>
    </div>);
}
