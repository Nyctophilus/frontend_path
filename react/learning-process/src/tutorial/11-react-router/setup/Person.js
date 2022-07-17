import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const { id } = useParams();
  const [name, setName] = useState("default");

  useEffect(() => {
    const { name } = data.find(
      (person) => person.id === parseInt(id)
    );

    console.log(name);

    setName(name);
  }, []);
  return (
    <div>
      <h2>{name}</h2>

      <Link className="btn" to="/people">
        back
      </Link>
    </div>
  );
};

export default Person;
