import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../redux/auth";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    navigate("/");
    toast.success("successfully logged in");
  };
  return (
    <>
      <div className="login-container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter your Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setUsername(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your username with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Enter your Password
            </label>
            <div class="input-group mb-3">
              <input
                type={passwordShown ? "text" : "password"}
                class="form-control"
                placeholder="Enter your password"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                class="input-group-text"
                id="basic-addon2"
                onClick={togglePassword}
              >
                {passwordShown ? <VisibilityOff /> : <Visibility />}
              </span>
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button onClick={handleLogin} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
