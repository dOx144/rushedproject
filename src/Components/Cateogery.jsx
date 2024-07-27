import { useState } from "react";
import Items from "../Components/Items";


const Category = () => {

  const [computer,setShowComputer] = useState(false)

  const handleComputer = () => {
    setShowComputer(!computer)
  }

  const handleNoComp = () => { 
    setShowComputer(false)
  }



  const links = ['Monitor','Keyboard','Mouse','Processor']

  return ( 
    <div className="p-4 gap-2 flex flex-col items-center ">
      <h2 className="text-2xl">Category</h2>
      <ul className="flex gap-4 *:cursor-pointer *:transition">
        <li className="cursor-pointer hover:bg-slate-400 hover:text-white p-2 rounded-xl"><button onClick={handleComputer}>Computer</button></li>
        <li className="cursor-pointer hover:bg-slate-400 hover:text-white p-2 rounded-xl"><button onClick={handleNoComp}>laptop</button></li>
      </ul>

      {computer && 
        <ul className="flex gap-4 transition duration-500">
          {links.map((el,i)=>(
            <li className="cursor-pointer hover:bg-slate-400 hover:text-white p-2 rounded-xl" key={i}>{el}</li>
          ))}
        </ul>
      }

    <Items/>

    </div>
  );
}
 
export default Category;