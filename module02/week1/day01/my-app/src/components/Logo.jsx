const Logo = (props) => {
  const text = props.text || "something cool";
  return (
    <>
      <img src={props.logoImage} className="App-logo" alt="logo" />
      <h6>{text}</h6>
    </>
  );
};

export default Logo;
