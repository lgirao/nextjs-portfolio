import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <div className="absolute left-0 top-20 w-full mt-5 bg-slate-100">
        <ul className="py-4 items-center">
          {links.map((link, index) => (
            <li key={index} className="leading-10 px-5">
              <NavLink href={link.path} title={link.title}/>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default MenuOverlay;