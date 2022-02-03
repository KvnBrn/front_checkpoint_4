//import emailjs from 'emailjs-com';

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm(
    //   'service_0nkucvi',
    //   'template_fyawrff',
    //   e.target,
    //   'user_2q5ee1RYRTjglVbkWn7xs'
    // );
    alert('Message envoyé! ');
    e.target.reset();
  };
  return (
    <div className="container text-white">
      <div className="row text-center p-5">
        <h2 className="text-center mb-5">Un avis ? Une suggestion ?</h2>
        <form className="col-lg-6 col-md-6 col-xs-12 mx-auto" onSubmit={sendEmail}>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">Votre demande</label>
            <input type="text" className="texte" name="email" id="email" required="required"/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="texte" name="email" id="email" required="required"/>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Votre Message</label>
            <textarea type="message" className="texte" name="message" id="message" required="required"/>
          </div>
          <button type="submit" className="button-65 m-auto" required>Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
