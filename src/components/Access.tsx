import send from "../assets/send-2.png";
import { accessData } from "../AccessData";

function Access() {
  return (
    <section className="access__section">
      <div className="access__container">
        <div className="access__top">
          <h1 className="access__title">Access More With Your Money</h1>
          <p className="access__subtitle">
            Earn, learn, parlay, and grow financially. With Ardilla, you have
            more opportunities than ever at your finger tips. Why not take
            advantage today?
          </p>
          <button className="access__cta">
            <span>Learn more about savings </span>
            <span className="access__image-wrapper">
              <img src={send} alt="send" />
            </span>
          </button>
        </div>
        <div className="access__bottom">
          <div className="access__cards">
            {accessData.map((d) => (
              <div className="access__card" key={d.name}>
                <img src={d.image} alt={d.name} className="access__image" />

                <h3 className="access__card-name">{d.name}</h3>
                <p className="access__card-subtitle">{d.text}</p>
                <p>Learn More</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Access;
