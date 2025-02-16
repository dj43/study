"use client";
import React, { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setUserData({
        name: "John Doe",
        email: "johndoe@example.com",
      });
    }, 2000); // Wait 2 seconds before setting the data
  }, []);

  return (
    <div>
      <h1>Welcome to the User Info Page</h1>
      <UserDetailsWithLoading data={userData} />
    </div>
  );
}

export default App;
