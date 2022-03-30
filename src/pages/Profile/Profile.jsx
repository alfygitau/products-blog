import { Edit } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "rsuite";
import "./Profile.css";

const Profile = () => {
  const user = useSelector((state) => state.login.user);
  console.log("user", user);
  return (
    <div className="profile">
      <h3>Profile</h3>
      <div className="profile-image">
        <Avatar
          size="lg"
          circle
          src="https://avatars.githubusercontent.com/u/12592949"
          alt="@SevenOutman"
        />
      </div>
      <div className="accountInfo">
        <h3>Account Information</h3>
        <hr />
        <h5>First Name: </h5>
        <span>{user.firstName}</span>
        <h5>Last Name: </h5> <span>{user.lastName}</span>
        <h5>Username: </h5> <span>{user.username}</span>
        <h5>Email: </h5> <span>{user.email}</span>
        <h5>Gender: </h5> <span>{user.gender}</span>
        <br/>
        <br/>
        <button type="button" className="btn btn-outline-dark">
          Edit Accounts Info. | <Edit/>
        </button>
      </div>
    </div>
  );
};

export default Profile;
