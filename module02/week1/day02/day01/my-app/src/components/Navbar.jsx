import LogoComponent from "./Logo";

const Navbar = ({ names, food, country, logoImage, text }) => {
  console.log("the props we sent");
  //First you could just write props
  //Second you could destructure the props on a new line
  //ex
  // const { names, food, country } = props;
  // console.log("names destructured", names);
  //Third and best in my opinion, destructor straight in the ( ) of the component
  return (
    // this is a react Fragment, its to make less divs on your page
    <>
      <LogoComponent logoImage={logoImage} text={text} />

      <h1>This is {names.dogName}'s Navbar</h1>
      <h2>My fav food is {food}</h2>
      <h3>And I am currently in {country}</h3>
    </>
  );
};
export default Navbar;

// // example of named and un named exports
// export const Navbar2 = (pizza, pizza1) => {
//   return (
//     <div>
//       <h1>This is our Navbar 2</h1>
//     </div>
//   );
// };
