import FreeTrial from "./freeTrial/FreeTrial"
import Title from "./title/Title"
import SignUp from "./googleButton/signup/SignUp"
import Background from "./Background/Background"
import './App.scss'

function App() {
  return (
    <div className="main">
        <div className="form">
            <FreeTrial />
            <Title />
            <SignUp />
        </div>
    </div>
  )
}

export default App
