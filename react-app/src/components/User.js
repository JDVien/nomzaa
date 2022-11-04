import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>name</strong> {user.fullname}
      </li>
      <li>
        <strong>city</strong> {user.city}
      </li>
      <li>
        <strong>zipcode</strong> {user.zipcode}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
    </ul>
  );
}
export default User;
