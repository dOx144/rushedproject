import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import LoginFrom from "./LoginForm";
import RegisterForm from "./RegisterForm";
import empty from '../assets/images/computer/Hero/empty.png'

const Navigation = () => {

  // const lists = [
  //   {
  //     name:<FaShoppingCart />,
  //     link:'/credits'
  //   },
  //    {
  //     name:'Login / register',
  //     link:'/login'
  //   }
  // ]
  const [login,setIsLoggingIn] = useState(false)
  const [register,setIsRegistering] = useState(false)
  const [isClose,setIsClose] = useState(false)
  const [showList,setShowList] = useState(false)

  const handleLogin = () => {
    setIsLoggingIn(true)
    setIsRegistering(false)
    setIsClose(false)
    }

  const handleRegister = () => {
      setIsRegistering(true)
      setIsLoggingIn(false)
    }
    
  const handleClose = () => {
    setIsClose(true)
  }
  const handleLists = () =>{
    setShowList(!showList)
  }

  return ( 
      <header className="flex w-full p-2 justify-between shadow-md ">
        <Link to={'/'} className="cursor-pointer font-bold text-xl">Computer Shop</Link>
        <div className="w-[40%] max-w-[500px] ring-1 relative flex items-center bg-white rounded-xl">
          <input type="search" className="w-full  p-1 bg-transparent"/>
          <div className="cursor-pointer size-[25px]">
            <CiSearch className="h-full w-full"/>
          </div>
        </div>
      <ul className="flex gap-4 items-center justify-center">
        <Link onClick={handleLists}><FaShoppingCart/></Link>
        <Link onClick={handleLogin}>{login ? "logout":"Login"}</Link>
      </ul>

      {login  && <div className={`z-10 absolute w-full h-full top-0 left-0 flex items-center justify-center bg-slate-800 opacity-95 ${isClose && 'hidden'}`}>
        <div className="flex flex-col gap-2 bg-slate-500 py-4 px-2 rounded-xl">
          <div className="flex items-center justify-between">
          <h3 className="text-2xl text-white">Login</h3>
          <button onClick={handleClose} className={`text-2xl font-bold text-white hover:text-red-500 transition `}>X</button>
          </div>
          <LoginFrom/>
          <button className="w-full p-2 ring-1 rounded-xl bg-white">Login</button>
          <div className="flex items-center gap-2">
            <p>Dont have an account?</p>
            <button onClick={handleRegister} className="underline hover:text-green-400 transition">Register now!!</button>
          </div>
        </div>
      </div>}
      {register  && <div className={`z-10 absolute w-full h-full top-0 left-0 flex items-center justify-center bg-slate-800 opacity-95  ${isClose && 'hidden'}`}>
        <div className="flex flex-col gap-2 bg-slate-500 py-4 px-2 rounded-xl">
          <div className="flex items-center justify-between"> 
            <h3 className="text-2xl text-white">
              Register
            </h3>
            <button onClick={handleClose} className={`text-2xl font-bold text-white hover:text-red-500 transition `}>X</button>
          </div>

          <RegisterForm handleLogin={handleLogin}/>
          <div>
          </div>
        </div>
      </div>}

{/* slide item list */}
  <div>
    <div className={`max-w-[350px]  min-w-[200px] absolute top-0 right-0  bg-slate-400 min-h-screen max-h-full ${showList ?'translate-x-0 block':'translate-x-[100%] hidden'} transition-all p-2  flex flex-col gap-8 z-10`}>
      <div className="">
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-bold">Your Cart</h2>
          <button onClick={handleLists} className="text-xl font-bold font-sans">X</button>
        </div> 
        <div className="flex flex-col items-center justify-center text-center min-h-[150px]">
          <img className="size-[85px]" src={empty} alt="Empty Cart" />
          <h2 className="font-bold">Your Cart is Empty</h2>  
          <p>Looks like you haven't added anything to your cart yet.😟</p>
        </div>
      </div>
    <Link to={'/checkout'} className="p-2 place-self-center bg-green-400 rounded-xl text-white active:scale-95 transition max-w-fit">Proceed to Checkout</Link>
    </div>
  </div>
   

      </header>
   );
}
 
export default Navigation;