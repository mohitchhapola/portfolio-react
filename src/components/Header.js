import React from 'react'

// import "../assets/css/cyberpunk-2077.css "
import mohit from "../assets/pics/mohit.JPG"
function Header() {
  return (
    <>
   <div id='app'>
   <section className="cyberpunk"> 
      <a href="https://www.instagram.com/chhapola_mohit/?hl=en" className="cyberpunk2077 scannedh">INSTAGRAM</a>
      <a href='https://github.com/mohitchhapola' className="cyberpunk2077 green">Git_Hub</a>
      <a href='https://www.linkedin.com/in/mohit-kumar-062144234/' className="cyberpunk2077 purple">Linked_IN</a>
      <a href='https://twitter.com/mohitchhapola__' className="cyberpunk2077 blue">Twitter X</a>
    </section>
    <section className="cyberpunk black">
    <h1 className="cyberpunk glitched center">AAGYE TUM!!</h1>
      <h1 className="cyberpunk glitched">Mohit Chhapola, ULTIMATE FULL_STACK BEROZGAAR 😏😏 </h1> 
      <h2 className="cyberpunk"> SEARCH ME ON:- http://localhost:3000/</h2> 
      <h2 className="cyberpunk glitched">MERN , DJANGO , PYTHON , RESTapi</h2> 
      <h3 className="cyberpunk">JUST SHAKE YOUR JUICER</h3> 
    </section>
    <section className="cyberpunk ">
      <div className="center">
      <img className="cyberpunk dotted" width={"245px"} src={mohit} alt="" />
      </div>
      <h2 className='cyberpunk glitched'>RECENTLY LEARNING, SOON WILL APPEAR ON JOB </h2>
      
    </section>
   </div>
    </>
  )
}

export default Header