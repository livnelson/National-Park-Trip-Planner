import React from "react";
import { useHistory } from "react-router-dom";

function Logout() {

  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();

    fetch("/logout")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        history.push("/");
      });
  }

  return (
    <div>
      <button onClick={handleClick}>
        Log Out
      </button>
    </div>
  );
}

export default Logout;