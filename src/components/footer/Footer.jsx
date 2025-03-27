import InformationSvg from './components/Information'
import './Footer.scss'

function Footer() {
  return (
    <>
      <footer className='principal'>
        <p>Copyright 2025 FoxHub Inc. All rights Reserved</p>
        <p><a href="#"><span>{<InformationSvg />}</span>Need help?</a></p>
      </footer>
    </>
  )
}

export default Footer
