

import { useRef } from 'react';

export default function Contact() {
  const messageRef = useRef(null);
  
  function handleClick() {

    messageRef.current.innerText = "Message Sent!"

    let inputs = document.querySelectorAll("input, textarea")
    inputs.forEach((input) => {
      input.value = ""
    })

  }
  return(
    <>
      <div className="contact-us-form-container">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us!</p>
        <form action="javascript:void(0)" className="contact-us-form" onSubmit={handleClick}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input id="first_name" type="text" placeholder="First Name" required/>
          </section>
          <section>
            <label htmlFor="last_name">Last Name</label>
            <input id="last_name" type="text" placeholder="Last Name" required/>
          </section>
          <section>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Email" required/>
          </section>
          <section>
            <textarea id="message" placeholder="Message" rows="10" cols="30" required></textarea>
          </section>
          <section>
            <button>Send Message</button>
          </section>
          <h3 ref={messageRef}></h3>
        </form>
      </div>
    </>
  )
}
