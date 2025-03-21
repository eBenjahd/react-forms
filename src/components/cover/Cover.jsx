import './Cover.scss'
import Logo from './logo/Logo'
import Handshake from './handshake/Handshake'
import Subtitle from './subtitle/Subtitle'

function Cover() {
  return (
    <section className='cover'>
      <Logo/>
      <Handshake />
      <Subtitle />
    </section>
  )
}

export default Cover
