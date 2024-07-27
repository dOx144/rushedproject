

const LoginFrom = () => {
 
  return ( 
    <form  className="space-y-3 text-black">
        <input
        //  value={username}
        //   onChange={(e)=>setUsername(e.target.value)} 
          className="w-full focus:outline-[#fcab10] rounded-xl p-[12px]"
          type="text" 
          placeholder="User Name" 
          required />
       
       <input  
        // value={password}
        // onChange={(e)=>setPassword(e.target.value)}
        className="w-full focus:outline-[#fcab10] rounded-xl p-[12px]" 
        type="password"
        placeholder="password"
        minLength={8} 
        required
        />

        <div className="flex w-full justify-between text-[14px] text-slate-50">
          <p className="flex gap-1 "> 
            <input type="checkbox"
            //  checked={remembered} 
            //  onChange={()=>setIsRemembered(!remembered)} 
             required />
              Remember me</p>
          <p><u>Forgot Password?</u></p>
        </div>
        {/* <Button3 name={`Login`}/> */}
    </form>
   );
}
 
export default LoginFrom;