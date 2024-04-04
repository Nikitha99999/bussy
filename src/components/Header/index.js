// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div>
    <div className="comp-align">
      <img
        className="company"
        alt="company"
        src="https://res.cloudinary.com/dr7oz1ugl/image/upload/v1711952439/1592026327216_yzuscd.png"
      />
    </div>

    <nav className="header-container">
      <div className="logo-and-title-container">
        <img
          alt="facebook"
          className="logo"
          src="https://res.cloudinary.com/dr7oz1ugl/image/upload/v1711952643/svg_r3uotb.png"
        />
        <img
          alt="insta"
          className="logo"
          src="https://res.cloudinary.com/dr7oz1ugl/image/upload/v1711952643/svg_1_booeui.png"
        />
        <img
          alt="linkdien"
          className="logo"
          src="https://res.cloudinary.com/dr7oz1ugl/image/upload/v1711952642/svg_2_ga4rlw.png"
        />
        <img
          alt="twitter"
          className="logo"
          src="https://res.cloudinary.com/dr7oz1ugl/image/upload/v1711952641/svg_3_jotd5t.png"
        />
      </div>

      <ul className="nav-items-list">
        <li className="link-item">
          <Link className="route-link" to="/">
            Home
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="/fashion">
            Fashion
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="/technology">
            Technology
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="/lifestyle">
            LifeStyle
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="/environment">
            Environment
          </Link>
        </li>
      </ul>
      <div>
        <img
          src="https://res.cloudinary.com/dr7oz1ugl/image/upload/v1711952641/Frame_yvyx5n.png"
          alt="search bar"
        />
      </div>
    </nav>
  </div>
)

export default Header
