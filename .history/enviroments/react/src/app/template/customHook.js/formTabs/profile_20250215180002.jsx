"use client";
import { forwardRef } from "react";
import "../../../styles.css";

const Profile = ({ formData, setFormData }) => {
  console.log(formData, setFormData);

  return (
    <>
      <div>profile</div>
      <div>
        <input
          type="text"
          value={formData["name"] || ""}
          required="true"
          onChange={() => {
            setFormData((prevData) => {
              return { ...prevData };
            });
          }}
        />
      </div>
    </>
  );
};
export default Profile;
