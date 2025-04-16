import Header from "./Header";
import Footer from "./Footer";
import PopUp from "./PopUp";
import '../styles/Contact.scss';
import { useRef } from 'react';

export default function Contact() {
  const popupRef = useRef(null);
  const handleClick =  () => {
    popupRef.classList.togle("inactive")
  }

  return(
    <>
      <div className="contact-us-form-container">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us!</p>
        <form action="javascript:void(0)" className="contact-us-form" onSubmit={handleClick}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input id="first_name" type="text" placeholder="First Name"/>
          </section>
          <section>
            <label htmlFor="last_name">Last Name</label>
            <input id="last_name" type="text" placeholder="Last Name" />
          </section>
          <section>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Email"/>
          </section>
          <section>
            <textarea id="message" placeholder="Message" rows="10" cols="30"></textarea>
          </section>
          <section>
            <button>Send Message</button>
          </section>
        </form>
      </div>
    </>
  )
}
