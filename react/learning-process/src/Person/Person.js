import React from "react";
import "./Person.css";
import styled from "styled-components";

const Person = (props) => {
  //   const style = {
  //     "@media (min-width: 50rem)": {
  //       width: "45rem",
  //     },
  //   };

  // -HL Styled Components
  const StyledPerson = styled.div`
			width: 60%;
			padding: 1rem;
			margin-inline: auto;
			box-shadow: 0 2px 3px #ccc;
			border: 1px solid #eee;
			text-align: center;
			margin-block: 3rem;

		"@media (min-width: 50rem)": {
				width: "45rem",
				},
`;

  return (
    <StyledPerson>
      <h3 onClick={props.click}>
        My name is {props.name} and I'm {props.age}
      </h3>
      <p onClick={props.delete}>{props.children}</p>
      <input
        onChange={props.change}
        type="text"
        value={props.name}
      />
    </StyledPerson>
  );
};

export default Person;
