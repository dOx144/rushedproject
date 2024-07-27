import { BrowserRouter, Routes ,Route} from "react-router-dom"
import Home from "./Pages/Home"
import { FaCarTunnel } from "react-icons/fa6"
import CheckOut from "./Pages/CheckOut"
import NoPage from "./Pages/NoPage"


function App() {

  return (

    <div>

      <BrowserRouter>

        <Routes>
          {/* <Route index path='/' element={<Welcome/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/credits" element={<Credits/>} />
          // <Route path="*" element={<NoPage/>}/> */}
          <Route index path="/" element={<Home/>} />
          <Route path="/checkout" element={<CheckOut/>} />
          <Route path="*" element={<NoPage/>}/>
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
