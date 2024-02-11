import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../components/Provider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin} = useContext(AuthContext);
  const handleGoogle =()=>{
    googleLogin()
    .then(result =>{
      const user = result.user;
      console.log('google', user)
    })
    .catch(error =>{
      console.log(error.message)
    })
  }

    return (
       
     <div className="text-center mb-4">
     <button onClick={()=>handleGoogle()} className="btn btn-wide  btn-warning">
     Google
     <FaGoogle className="text-xl text-red-800" />
   </button> 
     </div>
       
    );
};

export default SocialLogin;