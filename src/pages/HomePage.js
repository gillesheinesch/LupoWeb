import React from "react";
import { useUser } from "../components/UserProvider";

function HomePage() {
  const { userData, isLoggedIn } = useUser();

  return (
    <div>
      { isLoggedIn && <h1>Welcome { userData.name}!</h1>}
    </div>
  )
}

export default HomePage;