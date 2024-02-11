import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/Group 1329.png';
import { menus } from "../../utils/navigateMenu";
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
  const {user,  logOut} = useContext(AuthContext);

  const handleLogOut =()=>{
    logOut()
    .then(()=>{
      alert('User logOut Successfully')
    })
  }


    return (
        <section>
        <div className="navbar bg-blue-500 bg-opacity-70 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {menus}
            </ul>
          </div>
          <Link className="">
          <img src={logo} alt="Logo"  className='w-28'/>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
          {menus}
          </ul>
        </div>
        <div className="navbar-end">
        <div className="btn btn-ghost btn-circle avatar mr-3">
        <div className="w-8 rounded-full">
        {
           user.photoURL ?  <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
          : <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        }
        </div>
      </div>
            {user ?  <button onClick={handleLogOut}  className='btn btn-secondary btn-sm '>LogOut</button> :  <Link to='/register'>
            <button  className='btn btn-primary btn-sm '>Register</button>
            </Link>}
        </div>
        </div>
        </section>
    );
};

export default Header;