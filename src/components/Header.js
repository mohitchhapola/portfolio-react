import React from 'react'

// import "../assets/css/cyberpunk-2077.css "
import mohit from "../assets/pics/mohit.JPG"
function Header() {
  return (
    <>
   <div id='app'>
    <section className="cyberpunk ">
      <div className="center">
      <img className="cyberpunk dotted" width={"245px"} src={mohit} alt="" />
      </div>
      <h2 className='cyberpunk glitched'>I AM THE CODE, DONT INSPECT IT </h2>
      
    </section>
    <section className="cyberpunk black">
    <h1 className="cyberpunk glitched center">AAGYE TUM!!</h1>
      <h1 className="cyberpunk glitched">Mohit Chhapola, ULTIMATE FULL_STACK BEROZGAAR 😏😏 </h1> 
      <h2 className="cyberpunk"> SEARCH ME ON:- http://localhost:3000/</h2> 
      <h2 className="cyberpunk glitched">MERN , DJANGO , PYTHON , RESTapi</h2> 
      <h3 className="cyberpunk">JUST SHAKE YOUR JUICER</h3> 
    </section>
   <section className="cyberpunk"> 
      <a href="https://www.instagram.com/chhapola_mohit/?hl=en" className="cyberpunk2077 scannedh">INSTAGRAM</a>
      <a href='https://github.com/mohitchhapola' className="cyberpunk2077 green">Git_Hub</a>
      <a href='https://www.linkedin.com/in/mohit-kumar-062144234/' className="cyberpunk2077 purple">Linked_IN</a>
      <a href='https://twitter.com/mohitchhapola__' className="cyberpunk2077 blue">Twitter X</a>
    </section>
    <section id="contact" class="cyberpunk black">
        <h1 class="cyberpunk glitched center">Got Something for me  👀?  Let's Connect 🤝 !! </h1>
        <div class="center">
        <form style={{maxwidth: `500 px`}}>
          <input class="cyberpunk" placeholder="Full Name" type="text" />
          <input class="cyberpunk" placeholder="Email" type="text" />
          <textarea placeholder="Message" class="cyberpunk"></textarea>
          <button type="submit" class="cyberpunk2077 blue">Submit_</button>
        </form>
      </div>
      </section>
    <aside class="cyberpunk">
        <ul>
          <li><a href="https://www.instagram.com/chhapola_mohit/?hl=en" target="_blank">&#9760; Instagram</a></li>
          <li><a href="#contact">&#x2622; Contact us</a></li>
          <li><a href="#">&#x267B; Location in the map</a></li>
        </ul>
      </aside>
   </div>
    </>
  )
}

export default Header