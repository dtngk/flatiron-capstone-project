// src/components/Global.js
import React from "react";
import Main from "./Main";
import App from "./App";
import Login from "../forms/Login";

function Global(){

    const [user, setUser] = React.useState(null);
    
    React.useEffect(() => {
        // auto-login
        fetch("/me").then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
        }
        });
    }, []);
    
    function handleLogoutClick() {

        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
    }

    if (!user) return <Login onLogin={setUser} />;
    
    return (
        <Main.Provider value={{user: user, logout: handleLogoutClick}}>
            <App/>
        </Main.Provider>  
    );
}

export default Global;