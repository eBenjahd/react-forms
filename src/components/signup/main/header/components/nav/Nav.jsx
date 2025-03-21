import { Link } from "react-router-dom"
import Return from './components/Return'

function Nav() {
  return (
    <nav>
      <ul>
        <li>
            <Link to='/home'>{<Return/>}Return Home</Link>
        </li>
        <li>
            <Link to='/login'>Already a member? <span>Log in Now</span></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
