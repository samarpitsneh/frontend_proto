import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
function Header() {
  return (
    <div className='gpt3_header section'>
      <div className='gpt3_header-content'>
        <h1 className='gradient_text'>Let's build something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      </div>
      <div className='gpt3_header-content_input'>
        <input type="email" placeholder="Your Email Address"></input>
        <button>get started</button>
      </div>

      <div className='gpt3_header-content_people'>
        <img src={people}/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
      <div className='gpt3_header-image'>
          <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header