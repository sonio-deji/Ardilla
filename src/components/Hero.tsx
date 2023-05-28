import group from "../assets/Group.png";
import phone from "../assets/phone.png";
function Hero() {
  return (
    <section className="hero__section">
      <div className="hero__container">
        <div className="hero__inner">
          <div className="hero__main">
            <h1 className="hero__title">Your Access To More</h1>
            <p className="hero__subtitle">
              Ardilla helps you save and invest in achieving your financial
              goals, we have the most flexible and seamless way to grow your
              funds
            </p>

            <button className="hero__cta">Get Started</button>
          </div>
        </div>
        <img src={group} alt="group" className="group__1" />
        <img src={group} alt="group" className="group__2" />
        <img src={group} alt="group" className="group__3" />
        <img src={group} alt="group" className="group__4" />
        <img src={group} alt="group" className="group__5" />
        <div className="phone">
          <img src={phone} alt="group" className="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
