import { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { TodoWrapper } from "./components/TodoWrapper";
import "./App.css";

//I decided to make a simple application in terms of code but explain to myself about many improvements that could improve it.
//This is the main component, where I manage everything based on a use state and to each component based on a conditional I pass its props,
//to set a user to the login form and the user, if there is one, with the setUser to directly set the all to the user


//The first substantial improvement to improve the structure of a project as long as it is in javascript is to migrate it to typescript
// to have the most solid foundations regarding the props and much more controlled error handling.
function App() {
  //Suppose this is an app that is going to keep sessions alive based on (JWT, Cookies, Hooks or LocalStorage) of users in a database,
  //based on a context that calls an API we could ask if such a user exists with their parameters to be able to skip the login but let's use an API call as an example

  // const { isUnauthenticated } = useEasySession();
  //This hook would be the one that makes the call to the backend. If a session does not exist, you must log in.

  const [user, setUser] = useState([]);

  //If it is Unauthenticated we send it to the login, otherwise we send it to the TodoWrapper
  //If the user is authenticated, it should come from a database and we should only send them the data directly in the child components to avoid re-rendering.
  //would be another hook const { saveUser } = useUser(); directly using it in the places to update without going through the parameter,
  // it would be a context that keeps in constant consultation if such a user exists to avoid inconveniences

  return (
    <div className="App">
      {!user?.length > 0 ? (
        <LoginForm setUser={setUser} />
      ) : (
        <TodoWrapper user={user} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
