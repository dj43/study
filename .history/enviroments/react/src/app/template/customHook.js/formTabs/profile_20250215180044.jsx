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
          onChange={(e) => {
            setFormData((prevData) => {
              return { ...prevData, name: e.target.value };
            });
          }}
        />
      </div>
    </>
  );
};
export default Profile;
