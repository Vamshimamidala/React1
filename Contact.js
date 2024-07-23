 import React from 'react'
 
 const Contact = () => {
   return (
     <div className='container p-5 contact p-5'>
        <div className="row">
      <div className="col-12 col-lg-6">
        <form noValidate>
          <h2>Do you have a question or feedback?</h2>
          <p>Send us a message and we will get back to you.</p>
          <div>
            <label htmlFor="name">Your name<sup>*</sup></label>
            <input id="name" autoComplete="off" maxLength="30" name="name" required type="text" placeholder="" />
          </div>
          <div>
            <label htmlFor="phone-field-label">Your mobile number</label>
            <div>
              <span>+91</span>
              <input id="phone-field-label" autoComplete="off" maxLength="10" name="phoneNumber" type="text" />
            </div>
          </div>
          <div>
            <label htmlFor="email">Your email address<sup>*</sup></label>
            <input id="email" autoComplete="off" maxLength="55" name="email" required type="email" placeholder="" />
          </div>
          <div>
            <label htmlFor="message">Message<sup>*</sup></label>
            <textarea id="message" title="Your message" name="message" required></textarea>
          </div>
          <div>
            <iframe
              title="reCAPTCHA"
              src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LeQSyQaAAAAAP4PDgcemzzLuUgTjGkoWh7HmdLR&amp;co=aHR0cHM6Ly9maW56eS5jb206NDQz&amp;hl=en&amp;v=rKbTvxTxwcw5VqzrtN-ICwWt&amp;size=normal&amp;cb=a16zoz62y27z"
              name="a-1ulraku35zxm"
              width="304"
              height="78"
              frameBorder="0"
              scrolling="no"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
            ></iframe>
          </div>
          <div>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
     
    </div>
     </div>
   )
 }
 
 export default Contact
 