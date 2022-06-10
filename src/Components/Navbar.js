import React from 'react'
import { Link } from 'react-router-dom'
import  "./Nav.css";
function Navbar() {
  return (
    <>
      <div className='nav'>
        <div className='company'>ATools</div>
        <div className='option'>
        <nav >
          <ul >
            <li><button className='buttfree'><Link to="/trial" className='free'>Free Trial</Link></button></li>
            <li><button className='buttLog'><Link to="/" className='login'>Login</Link></button></li>
          </ul>
        </nav>
        </div>
        
        
      </div>
    </>

  );
}

export default Navbar