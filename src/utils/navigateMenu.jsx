import { NavLink } from "react-router-dom";

export const menus =  <>
<li>
  <NavLink
    to="/"
    className={({ isActive}) =>
       isActive ? "text-primary font-bold" : ""
    }
  >
   Home
  </NavLink>
</li>
<li>
  <NavLink
    to="/donation"
    className={({ isActive}) =>
       isActive ? "text-primary font-bold" : ""
    }
  >
  Donation
  </NavLink>
</li>
<li>
  <NavLink
    to="/events"
    className={({ isActive}) =>
       isActive ? "text-primary font-bold" : ""
    }
  >
Events
  </NavLink>
</li>
</>
