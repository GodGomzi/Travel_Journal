import NatImg from "../Nature2.jpg"
function Header()
{
 return  (
    <header className="header">
    <img src={NatImg} alt="earth" className="img"/>
     <h6>my travel journal.</h6>
     </header>
    );
}
export default Header;