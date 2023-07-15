import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='foot'>
        <div className="footerleft" color='#718006'>
            <p>@ 2023 <span><a href="/">cinimate</a></span>. All Rights Reserved.</p>
        </div>
        <div className="footerright">
            <ul>
              <li><a href="https://www.instagram.com/avinashreddy.2678/" target='_blank' rel="noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/avinash-mamidi-2687782i/" target='_blank' rel="noreferrer">Linkedin</a></li>
              <li><a href="https://github.com/avinashreddy2678/" target='_blank' rel="noreferrer">Github</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
