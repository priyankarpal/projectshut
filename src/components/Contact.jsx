import React from 'react';

function Contact() {
  return (
    <div id="contact-form">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your email address" />
      <textarea placeholder="Your message" />
      <button type="button">Send Message</button>
      <span>Thank you for your message, we will be in touch in no time!</span>
    </div>
  );
}

export default Contact;
