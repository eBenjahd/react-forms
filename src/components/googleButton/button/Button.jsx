import './Button.scss'
import GoogleLogo from '../googleLogo/GoogleLogo'

function Button({signup}) {
  return (
    <button>
      <GoogleLogo />
      <p>{signup}</p>
    </button >
  )
}

export default Button
