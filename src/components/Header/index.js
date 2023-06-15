// Write your JS code here
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => {
  ;<div className="head-cont">
    <ul className="list-cont">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </ul>
  </div>
}

export default withRouter(Header)
