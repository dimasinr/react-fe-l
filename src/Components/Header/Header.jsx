import './header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div id='welcome'>
     <div className="headerContainer">
     <h1 className="headerTitle">Find Beauty from</h1>
    <h1 className="til">
     NEAREST
    </h1>
      <p className="headerDesc">
      1st booking application for beauty treatment.
      </p>
      <p className='headerDescs'>
      You can discover beauty services, and book instantly anytime, anywhere.
      </p>
      <Link to='/login'>
      <button className="headerBtn">Sign in / Register</button>
      </Link>
     </div>
    </div>
  )
}
