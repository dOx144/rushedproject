import { useState } from 'react'

const RegisterForm = ({handleLogin}) => {


  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [agreed, setIsAgreed] = useState(false)
  const [confirmPass, setConfirmPass] = useState('')
  const [err, setErr] = useState(false)
  
  
  const [id, setId] = useState('')

  const userData = {
    id,
    innerdata:[]
  }


  const handleRegister = (e) => {
    e.preventDefault()

    const newUser = {user_id:id,
                      first_name:fName, 
                      last_name:lName, 
                      user_email:email, 
                      confirmPass, 
                      user_agree:agreed}

    if(pass === confirmPass){

      setLName('')
      setFName('')
      setEmail('')
      setPass('')
      setConfirmPass('')
      setIsAgreed(false)
      navigate('/login')

     }else {
       console.log('Passwords do not match')
    }
    
   
  }

  const checkPass = (e) => {
    const newPass = e.target.value
    setConfirmPass(newPass) 
    const tx = newPass === pass ? `#1e1e1e` : `#ff5252` 
    e.target.style.color = tx
    if(newPass != pass) {
      setErr(true)
    }
    else{
      setErr(false)
    }
  }



  return ( 
   <>
    <form action="#" onSubmit={handleRegister} className=" space-y-[10px]">
      <div className="flex gap-4">
        <input 
        className="p-3 bg-[#eee] rounded-xl w-full" 
        type="text" 
        name="firstNname" 
        placeholder="First Name" 
       
        required
        />
        
        <input className="p-3 bg-[#eee] rounded-xl w-full" 
        type="text"
         name="lastName" 
         placeholder="Last Name" 
         
         required
         />
      </div>
      <input className="p-3 bg-[#eee] rounded-xl w-full" 
        type="text"
         name="username" 
         placeholder="User Name" 
       
         />
      <input 
      className="p-3 bg-[#eee] rounded-xl w-full" 
      type="email" 
      name="email" 
      placeholder="Email"
     
      required
      />

      <input 
      className="p-3 bg-[#eee] rounded-xl w-full" 
      type="password" 
      name="pass" 
      placeholder="Password"
      minLength={8}
   
      required
       />

      <input className="p-3 bg-[#eee] rounded-xl w-full" 
      type="password" 
      name="confirmPass" 
      placeholder="Confirm Password"
      
      required
      />
      {err && 
      <label className="text-sm text-[#ff5252]" name='confirmPass'>Password do not match!</label>
      }
      

      <div className="text-[10px] flex items-center gap-2">
        <input type="checkbox" 
        checked = { agreed}
   
        required
        />
        By creating an account, you agree to our Terms and conditions.
      </div>
      <button className='w-full p-2 ring-1 bg-yellow-100 rounded-xl'>Register</button>
    </form>
      <div className='flex items-center '>
      <p>already have an account? </p>
      <button onClick={handleLogin}>Login</button>
    </div>
   </>
  );
}
 
export default RegisterForm;