import { NavLink, Outlet } from "react-router-dom";

import "./styles/menu-style.css";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <div className="navbar-container">
          <nav className="side-navbar">
            <ul className="side-navbar-list">
              <li className="side-navbar-list-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="side-navbar-list-item">
                <NavLink to="applicants">Applicants</NavLink>
              </li>
              <li className="side-navbar-list-item">
                <NavLink to="orders">Orders</NavLink>
              </li>
              <li className="side-navbar-list-item">
                <NavLink to="lookups">Lookups</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
