import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Sidebar = () => {
  const { closeSidebar, isSidebar } = useGlobalContext();

  return (
    <aside
      className={`sidebar-wrapper ${isSidebar && "show"} `}
    >
      <div className="sidebar">
        <button
          className="close-btn"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>

        {sublinks.map((item, index) => {
          const { links, page } = item;

          return (
            <article key={index}>
              <h4>{page}</h4>

              <div className="sidebar-sublinks">
                {links.map((link, index) => {
                  const { label, icon, url } = link;

                  return (
                    <a key={index} href={url}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
