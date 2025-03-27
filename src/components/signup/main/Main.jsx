// import Form from '../form/Form'
import MyForm from '../../form/MyForm'
import Header from './header/Header'
import Footer from '../../footer/Footer'
import { z } from 'zod'
import './Main.scss'

function Main() {
  const signupSchema = z.object({
    nombre: z.string().min(1,'Name is required.'),
    email: z.string().email('Invalid email').min(1,'Email is required'),
    password: z.string().min(8,'Create a valid password'),
    confirmPassword: z.string().min(8,'Password confirmation is required'),
}).refine(data => data.password === data.confirmPassword,{
    message: 'Passwords do not match',
    path: ['confirmPassword'],
})

  const handleSignup = data => console.log(data)
  return (
    <div className='main'>
        <header>
          <Header />
        </header>

        <main>
          <h1>Become an exclusive member</h1>
          <p className='signup'>SIGN UP and join the partnership </p>
          <MyForm 
          fields={[
            { name: "nombre", type:'', placeholder: "Johnson Doe " },
            { name: "email", type: "email", placeholder: "example@email.com " },
            { name: "password", type: "password", placeholder: "********" },
            { name: "confirmPassword", type: "password", placeholder: "********" },
          ]}
          schema={signupSchema}
          onSubmit={handleSignup}
          />
          {/* <Form /> */}
        </main>

        <Footer />
    </div>
  )
}

export default Main
