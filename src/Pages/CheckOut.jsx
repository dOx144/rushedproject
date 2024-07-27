import { Navigate } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footers from "../Components/Footers";
import Contact from "../Components/Contact";

const CheckOut = () => {
  return ( 
    <div className="min-h-[100vh] flex flex-col">
      <Navigation/>
      <div className="text-center">
        <h1 className="text-2xl">You have Nothing to Checkout</h1>
        <p>Please put some items one the shopping cart!!</p>
      </div>
      <Contact/>
      <Footers/>
    </div>
   );
}
 
export default CheckOut;