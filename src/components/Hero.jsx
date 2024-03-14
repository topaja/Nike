const Hero = () => {
  return (
    <>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
          </div>
          <div className="available-on">
            <p>Also Available On</p>
          </div>
          <div className="brand-icons">
            <img src="./img/flipkart.png" alt="" />
            <img src="./img/amazon.png" alt="" />
          </div>
        </div>
        <div className="hero-img">
          <img src="./public/img/shoe_image.png" alt="" />
        </div>
      </main>
    </>
  );
};

export default Hero;
