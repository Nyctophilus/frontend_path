import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/nyctophilus";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("Default User");

  const fetchUsers = async () => {
    try {
      const res = await fetch(url);
      if (res.status >= 200 && res.status <= 299) {
        const user = await res.json();
        setIsLoading(false);
        setUser(user);
      } else {
        setIsLoading(false);
        setIsError(true);
        throw new Error(res.statusText);
      }
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };
  useEffect(() => {
    setIsLoading(true);

    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }

  return (
    <div>
      <img src={user.avatar_url} alt={user.name} />
      <h2>{user.name}</h2>
    </div>
  );
};

export default MultipleReturns;
