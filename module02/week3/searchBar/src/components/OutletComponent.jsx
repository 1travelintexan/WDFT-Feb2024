import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const OutletComponent = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
