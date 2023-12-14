import { NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                            <NavLink className={(NavDate) => NavDate.isActive ? "nav-link text-white text-capilatize bg-success" : "nav-link text-white text-capilatize"} to="/">
                               Home 
                            </NavLink>
              </li>
            {/* <li className="nav-item">
                            <NavLink className={(NavDate) => NavDate.isActive ? "nav-link text-white text-capilatize bg-success" : "nav-link text-white text-capilatize"} to="/Users">
                               users 
                            </NavLink>
              </li> */}
              <li className="nav-item">
                            <NavLink className={(NavDate) => NavDate.isActive ? "nav-link text-white text-capilatize bg-success" : "nav-link text-white text-capilatize"} to="/posts">
                               User 
                            </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     );
}
 
export default Header;