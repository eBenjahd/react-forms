import Form from '../form/Form'
import Header from './header/Header'
import Footer from './footer/Footer'
import './Main.scss'

function Main() {
  return (
    <div className='main'>
        <header>
          <Header />
        </header>

        <main>
          <h1>Become an exclusive member</h1>
          <p className='signup'>SIGN UP and join the partnership </p>
          <Form />
        </main>

        <Footer />
    </div>
  )
}

export default Main
