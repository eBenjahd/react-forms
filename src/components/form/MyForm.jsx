import './MyForm.scss'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputForm from "./inputform/InputForm";
import Button from "./button/Button";
import Arrow from './arrowSvg/Arrow'

function MyForm({fields, schema, onSubmit}) {
  const {control, handleSubmit, formState: {errors} } = useForm({
    resolver: zodResolver(schema)
  })
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <InputForm 
        key={field.name}
        name={field.name}
        control={control}
        placeholder={field.placeholder}
        type={field.type}
        error={errors[field.name] ? errors[field.name].message : undefined}
        />
      ))
      }
      <Button text='Proceed to my account' Component={<Arrow />}/>
    </form>
  )
}

export default MyForm
