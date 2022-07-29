import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();

  return (
    <main className="silderProj">
      <button
        className="sidebar-toggle"
        onClick={openSidebar}
      >
        <FaBars />
      </button>

      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
