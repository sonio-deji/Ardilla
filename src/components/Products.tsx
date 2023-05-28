import frame2890 from "../assets/Frame 2890.png";
function Products() {
  return (
    <section className="products__section">
      <div className="products__container">
        <div className="products__inner">
          <h2 className="products__title">Products</h2>
          <div className="scroll__wrapper">
            <div className="products__main">
              <div className="products__scroll">
                <img src={frame2890} alt="frame2890" />
                <img src={frame2890} alt="frame2890" />
                <img src={frame2890} alt="frame2890" />
                <img src={frame2890} alt="frame2890" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
