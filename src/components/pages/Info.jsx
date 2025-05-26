import React from 'react';
import { Link } from 'react-router-dom';

function Info() {
  return (
    <div className='info'>
      <h3>INFO</h3>

      <p>
        Ringvaartzijde 17, 1431 CJ Aalsmeer<br />
        M: +31 628522314<br />
        rvottens@gmail.com <br />
        Geboren: 29 oktober 1976<br />
        Nationaliteit: Nederlands<br />
        Rijbewijs: B<br />
        <br />
        <Link to='https://linkedin.com/in/rogier-o-9707119' target='blank' className='url-style'>
          LINKEDIN
        </Link><br />
        <br />
        <Link to='https://github.com/sjottens' target='blank'  className='url-style'>
          GITHUB
        </Link>     
      </p>
      <div className='btn-style'>
        <Link to='/contact' className=''>
          CONTACT
        </Link>
      </div>
    </div>
  )
}

export default Info