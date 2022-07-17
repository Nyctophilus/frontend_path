import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch(url);
    const users = await res.json();

    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ul className="users">
      {users.map((user) => {
        const { login, id, avatar_url, html_url } = user;

        return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>profile</a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default UseEffectFetchData;
