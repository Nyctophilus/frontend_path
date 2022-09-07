import React from "react";
import Setup from "./tutorial/12-memo-useMemo-useCallback/setup";
import Project from "./YT-tut-projects/Cocktails";

import WdsTodo from "./WDS-30m-learn/";
import BookList from "./YT-tut-projects/YT-codingaddict--BookList";
import Cart from "./YT-tut-projects/Cart/";
import Accordion from "./YT-tut-projects/Accordion/Accordion";
import BasicCocktails from "./YT-tut-projects/Cocktails";
import ColorGenerator from "./YT-tut-projects/Color-Generator/App";
import GroceryBud from "./YT-tut-projects/Grocery-Bud/bud";
import Menu from "./YT-tut-projects/Menu/App";
import Navbar from "./YT-tut-projects/Navbar/App";
import ParagGenerator from "./YT-tut-projects/ParagGenerator/App";
import Reviews from "./YT-tut-projects/Reviews/Reviews";
import Sidebar from "./YT-tut-projects/Sidebar/App";
import Slider from "./YT-tut-projects/Slider/App";
import StripeSubmenus from "./YT-tut-projects/Stripe-Submenus/App";
import Tabs from "./YT-tut-projects/Tabs/App";
import Tours from "./YT-tut-projects/tours/Tours";
import Pokemon from "./Pokemen/App";

import ExpenseCalculator from "./Expense_Calculator/App";
import CourseGoal from "./CourseGoal/App";
import SimpleValidateForm from "./SimpleValidateForm/App";
import SideEffects from "./sideEffects/App";
import StarwarsMovies from "./FetchMovies--http/App";
import CustomHooks from "./CustomHooks/App";
import AddTasks from "./CustomHooks--AddTasks/App";
import FormsAndValidation from "./Forms&Validation/App";
import Redux from "./Redux";
import AdvancedRedux from "./Redux-Advanced";
import Authentication from "./Authentication";
import Animations from "./Animations/App";
import FavItem from "./ReplaceRedux-useContext--FavItem/App";
import TypeScript from "./TypeScript/App.tsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const projects = [
  { GroceryBud: <GroceryBud /> },
  { Accordion: <Accordion /> },
  { ColorGenerator: <ColorGenerator /> },
  { Cart: <Cart /> },
  { Menu: <Menu /> },
  { Navbar: <Navbar /> },
  { ParagGenerator: <ParagGenerator /> },
  { Reviews: <Reviews /> },
  { Sidebar: <Sidebar /> },
  { Slider: <Slider /> },
  { StripeSubmenus: <StripeSubmenus /> },
  { Tabs: <Tabs /> },
  { Tours: <Tours /> },
  { WdsTodo: <WdsTodo /> },
  { BookList: <BookList /> },
  { Pokemon: <Pokemon /> },
  { BasicCocktails: <BasicCocktails /> },
  { ExpenseCalculator: <ExpenseCalculator /> },
  { CourseGoal: <CourseGoal /> },
  { SimpleValidateForm: <SimpleValidateForm /> },
  { SideEffects: <SideEffects /> },
  { StarwarsMovies: <StarwarsMovies /> },
  { CustomHooks: <CustomHooks /> },
  { AddTasks: <AddTasks /> },
  { FormsAndValidation: <FormsAndValidation /> },
  { Redux: <Redux /> },
  { AdvancedRedux: <AdvancedRedux /> },
  { Animations: <Animations /> },
  { TypeScript: <TypeScript /> },
];

function App() {
  return (
    <Router
    // basename ="my-app"
    >
      <div className="App">
        <Routes>
          {projects.map((project) => {
            // console.log(...Object.keys(project));

            const pathname = [...Object.keys(project)]
              .toString()
              .split(/(?=[A-Z])/)
              .join("-")
              .toLowerCase();

            const el = [...Object.values(project)];

            return (
              <Route
                key={
                  pathname +
                  new Date().getMilliseconds() *
                    Math.random()
                }
                path={pathname}
                element={el}
              />
            );
          })}
          <Route path="/" element={<Navigators />} />

          <Route
            path="Authentication/*"
            element={<Authentication />}
          />

          <Route
            path="/favorite-item/*"
            element={<FavItem />}
          />
        </Routes>

        <Link to="/">
          <button className="btn" style={{ zIndex: "99" }}>
            Home
          </button>
        </Link>
      </div>
    </Router>
  );
}
console.log(typeof window.location.pathname);

const Navigators = () => (
  <section style={{ marginTop: "1.6rem" }}>
    <h1
      style={{
        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "italic",
      }}
    >
      Pick a Project!
    </h1>
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        marginBottom: "10rem",
      }}
    >
      {projects.map((project) => {
        const pathname = [...Object.keys(project)]
          .toString()
          .split(/(?=[A-Z])/)
          .join("-")
          .toLowerCase();

        const projectName = [...Object.keys(project)]
          .toString()
          .split(/(?=[A-Z])/)
          .join(" ");

        return (
          <Link key={pathname} to={pathname}>
            <button
              className="btn"
              style={{ width: "unset" }}
            >
              {projectName}
            </button>
          </Link>
        );
      })}
      <Link to="Authentication">
        <button className="btn" style={{ width: "unset" }}>
          Authentication
        </button>
      </Link>

      <Link to="favorite-item">
        <button className="btn" style={{ width: "unset" }}>
          Favorite Item
        </button>
      </Link>
    </ul>
  </section>
);

export default App;
