import { useState } from "react";

const Contact = () => {
  const [userEmail, setUserEmail] = useState('')
  return ( 
    <div className="mt-auto text-white flex bg-slate-500 items-center justify-center gap-4 p-12">
      <div>
        <h1 className="text-2xl">Contact Us</h1>
        <p>or signup for the latest news updates</p>
      </div>
      <div>
        <form className="flex w-full gap-2">
          <input 
          type="email" 
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="p-2  text-black rounded-xl w-full min-w-[300px] focus:ring-2 focus:ring-green-400" 
          placeholder="Enter email for latest News" />  
          <button className="bg-green-400 rounded-xl px-5 py-2">Submit</button>
        </form>
      </div>
    </div>
   );
}
 
export default Contact;