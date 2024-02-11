import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Provider/AuthProvider";
import SocialLogin from "./SocialLogin";


const Register = () => {

  const {createUser} = useContext(AuthContext);

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photo);
    // create user
    createUser(email, password)
    .then(result =>{
      const user = result.user;
      console.log('register', user)
    })
    .catch(error =>{
      console.log(error.message)
    })
  }

    return (
        <div className="hero min-h-screen max-w-5xl mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now !</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm  border-2 border-primary">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="file" name="photo" className="file-input file-input-bordered w-full max-w-xs" />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
              <p className="text-center">All ready have an account ?<Link className="text-primary underline" to='/login'>Login</Link></p>
            </form>
            <div className="divider divider-primary">Social Login</div>
            <SocialLogin/>
          </div>
        </div>
      </div>
    );
};

export default Register;