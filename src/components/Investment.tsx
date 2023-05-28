import frame from "../assets/Frame 2834.png";
function Investment() {
  return (
    <section className="investment__section">
      <div className="investment__container">
        <h1 className="investment__title">
          <span>Unlimited</span> Investment <br /> Opportunities{" "}
        </h1>
        <p className="investment__subtitle">
          Plan towards your future by investing with ardilla, Grow your money
          confidently and securely with the available investment oppurtuinities
        </p>
        <button className="investment__cta">
          <span>Invest with ardilla (Coming Soon)</span>{" "}
          <span>
            <img src={frame} alt="frame" />
          </span>
        </button>
      </div>
    </section>
  );
}

export default Investment;
