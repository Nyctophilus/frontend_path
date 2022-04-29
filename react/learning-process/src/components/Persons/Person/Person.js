import React, {
  useEffect,
  useRef,
  useContext,
} from "react";
import "./Person.css";
import styled from "styled-components";
import Aux from "../../../hoc/Auxiliary";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

// -HL Styled Components
const StyledPerson = styled.div`
	width: 60%;
	padding: 1rem;
	margin-inline: auto;
	box-shadow: 0 2px 3px #ccc;
	border: 1px solid #eee;
	text-align: center;
	margin-block: 3rem;

	&:hover{
		background-color: #eee;
	}

	"@media (min-width: 50rem)": {
		width: "45rem",
		},
`;

const Person = (props) => {
  console.log(`[Person.js] rendering..`);
  //   const style = {
  //     "@media (min-width: 50rem)": {
  //       width: "45rem",
  //     },
  //   };

  const inputElement = useRef(null); // give refs to gain access to ur dom elements

  useEffect(() => {
    inputElement.current.focus();
    // return () => {
    //   console.log(`useee`);
    // };
  });

  // -HL useContext
  const authCntx = useContext(AuthContext);

  console.log(authCntx.authenticated);

  return (
    // alt u can return array of jsx elements [p,div,h1]
    // <React.Fragment> built-in comp func as Aux too
    <Aux>
      <StyledPerson>
        {authCntx.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please, Log in!</p>
        )}

        <h3 onClick={props.click}>
          My name is {props.name} and I'm {props.age}
        </h3>
        <p onClick={props.delete}>{props.children}</p>
        <input
          // ref={(inputEl) => (inputElement = inputEl)} // older way
          ref={inputElement} // react 16+
          onChange={props.change}
          type="text"
          value={props.name}
        />
      </StyledPerson>
    </Aux>
  );
};

Person.prototype = {
  click: PropTypes.func,
  change: PropTypes.func,
  delete: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};

export default Person;
