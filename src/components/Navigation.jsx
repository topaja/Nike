const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="./img/brand_logo.png"></img>
      </div>
      <ul>
        <li href="menu">MENU</li>
        <li href="location">LOCATION</li>
        <li href="about">ABOUT</li>
        <li href="contact">CONTACT</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navigation;

