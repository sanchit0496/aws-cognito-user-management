import React from 'react'
import Pool from "../UserPool";

function Home() {

    const logout = () => {
        const user = Pool.getCurrentUser();
        if (user) {
          user.signOut();
        }
      };

    return (
        <div>
            The Homepage of Web 
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home
