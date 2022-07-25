import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <form>
        <div className="contact-container">
          <div className="contact-box">
            <div className="left"> </div>
            <div className="right">
              <h2>Contact Us</h2>
              <input
                type="text"
                className="field"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                className="field"
                placeholder="Last Name"
                required
              />
              <input
                type="email"
                className="field"
                placeholder="E-Mail"
                required
              />
              <textarea
                className="field area"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit" className="btn">
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
