import logo from "../../static/images/restaurant-logo.jpg";

const Title = () => (
  <a href="/">
    <img data-testid="logo" src={logo} className="logo" alt="logo" key="logo" />
  </a>
);

export default Title;
