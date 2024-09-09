import React from 'react'
import { useAuth } from '../../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser] = useAuth();
    const handleLogout = ()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            });
            localStorage.removeItem('User')
            toast.success("Logout succesfully")
            setTimeout(()=>{
                window.location.reload();
            },2000)
        } catch (error) {
            toast.error("Error",error.message)
            setTimeout(() => {}, 2000);
        }
    }
  return (
    <div>
      <button className='bg-red-500 text-white rounded-md px-3 py-2' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
