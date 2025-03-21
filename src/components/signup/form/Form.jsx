import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import InputForm from './inputform/InputForm';
import {z} from 'zod';
import Arrow from './arrowSvg/Arrow';
import Button from './button/Button';
import './Form.scss'

const schema = z.object({
    nombre: z.string().min(1,'Name is required.'),
    email: z.string().email('Invalid email').min(1,'Email is required'),
    password: z.string().min(8,'Create a valid password'),
    confirmPassword: z.string().min(8,'Password confirmation is required'),
}).refine(data => data.password === data.confirmPassword,{
    message: 'Passwords do not match',
    path: ['confirmPassword'],
})

function MyForm() {

    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm 
                name='nombre'
                control = {control}
                placeholder='Johnson Doe'
                error = {errors.nombre ? errors.nombre.message : undefined}
            />
            <InputForm 
                name='email'
                control = {control}
                placeholder='example@gmail.com'
                type="email"
                error = {errors.email ? errors.email.message : undefined}
            />
            <InputForm 
                name='password'
                control = {control}
                placeholder='**********'
                type="password"
                error = {errors.password ? errors.password.message : undefined}
            />
            <InputForm 
                name='confirmPassword'
                control = {control}
                placeholder='**********'
                type="password"
                error = {errors.confirmPassword ? errors.confirmPassword.message : undefined}
            />
            <Button text='Become a member' Component={<Arrow/>} />
        </form>
    )
}

export default MyForm