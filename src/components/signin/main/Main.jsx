import { z } from "zod";
import MyForm from "../../form/MyForm";
import Footer from "../../footer/Footer";
import Nav from '../../Nav/Nav';

function Main() {
    const loginSchema = z.object({
        email: z.string().email('Invalid email').min(1, 'Email is required'),
        password: z.string().min(8, 'Enter a valid password'),
      });

      const handleLogin = data => console.log(data)
  return (
    <div className="main">
        <header>
            <Nav signup={false}/>
        </header>
        <main>
            <h1>WELCOME BACK EXCLUSIVE MEMBER</h1>
            <p className='signup'>LOG IN TO CONTINUE </p>
            <MyForm 
            fields={[
            { name: "email", type: "email", placeholder: "example@email.com " },
            { name: "password", type: "password", placeholder: "********" }
            ]}
            schema={loginSchema}
            onSubmit={handleLogin}/>
        </main>
        <Footer />
      
    </div>
  )
}

export default Main
