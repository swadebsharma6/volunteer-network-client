import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Provider/AuthProvider";


const Login = () => {
  const {signInUser} = useContext(AuthContext);

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log( email, password );
    // create user
    signInUser(email, password)
    .then(result =>{
      const user = result.user;
      console.log('sign', user)
    })
    .catch(error =>{
      console.log(error.message)
    })
  }

    return (
        <div className="hero min-h-screen max-w-5xl mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login Now !</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm  border-2 border-primary">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <p className="text-center">New to this Network ?<Link className="text-primary underline" to='/register'>Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;