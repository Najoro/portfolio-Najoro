const Formulaire = () => {
  return (
    <div className="talk">
      <h2>Let's talk ?</h2>
      <p>
        merci pour ta contribution et de me laisser une commantaire qui peut
        m'ameliorer en tant que developpeure
      </p>
      <form>
        <input type="text" name="name" id="name" placeholder="name" />
        <div className="phon-email">
            <input type="email" name="email" id="email" placeholder="email" />
            <input type="number" name="phon" id="phone" placeholder="your phone number"/>
        </div>
        <input type="text" name="subject" id="subject"placeholder="what new?"/>
        <textarea name="coms" id="coms" cols="20" rows="10" placeholder="tel me your project?" ></textarea>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
};

export default Formulaire;
