import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

//Here is the practical example of how I would apply the useUser hook to make a save, instead of receiving it by parameter

export const LoginForm = ({ setUser }) => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  //It is now based on useStates the parameters to pass to the inputs

  const handleSubmit = (e) => {
    e.preventDefault();

    //This validation is bad but it could be improved based on a yup or custom validationSchema
    if (email === "" || password === "") {
      return toast.error("Please fill all the fields");
    }
    if (password?.length < 6) {
       return toast.error("Password must be at least 6 characters");
    }
    if (email !== "manutest@gmail.com") {
      return toast.error("Email does not match, try again");
    }
    if (password !== "123456") {
      return toast.error("Password does not match, try again");
    }

    setUser([{ email, password }]);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setMail(e.target.value);
  };
  
  //I also think it is better to use formik or react-hooks-forms for the forms and simplify the validation and error logic.
  return (
    <form onSubmit={handleSubmit} className="container-form-login">
      <div className="header-form">
        <h1 className="title-header">Login</h1>
        <div className="underline" />
      </div>
      <div className="inputs">
        <div className="input">
          <FontAwesomeIcon icon={faEnvelope} className="icon-form" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="input">
          <FontAwesomeIcon icon={faKey} className="icon-form" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
      </div>
      <div className="submit-container">
        <button className="submit" type="submit">
          Login
        </button>
      </div>
      <Toaster />
    </form>
  );
};
