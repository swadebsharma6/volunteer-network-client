import { NavLink } from "react-router-dom";

export const menus =  <>
<li>
  <NavLink
    to="/"
    className={({ isActive}) =>
       isActive ? "text-orange-500 font-bold" : ""
    }
  >
   Home
  </NavLink>
</li>
<li>
  <NavLink
    to="/donation"
    className={({ isActive}) =>
       isActive ? "text-orange-500 font-bold" : ""
    }
  >
  Donation
  </NavLink>
</li>
<li>
  <NavLink
    to="/events"
    className={({ isActive}) =>
       isActive ? "text-orange-500 font-bold" : ""
    }
  >
Events
  </NavLink>
</li>
</>
