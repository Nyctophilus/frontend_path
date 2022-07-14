import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenu,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);

  const [cols, setCols] = useState(2);

  useEffect(() => {
    setCols(2);
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.top = `${bottom}px`;
    submenu.style.left = `${center}px`;

    if (links.length === 3) setCols(3);
    if (links.length > 3) setCols(4);
  }, [location, links]);
  return (
    <aside
      className={`submenu ${isSubmenu && "show"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center col-${cols}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;

          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
