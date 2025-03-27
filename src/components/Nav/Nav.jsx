import { Link } from "react-router-dom"
import Return from './components/Return'

function Nav({signup}) {
  const textDisplayed = signup ? `Already a member?` : `Not a member yet?`
  const link = signup ? <span>Log in Now</span> : <span>Join now</span>
  const redirect = signup ? '/login' : '/signup'
  return (
    <nav>
      <ul>
        <li>
            <Link to='/home'>{<Return/>}Return Home</Link>
        </li>
        <li>
            <Link to={redirect} >{textDisplayed} {link}</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
