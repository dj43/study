"use client";
import { forwardRef } from "react";
import "../../../styles.css";

const Settings = ({ formData, setFormData }) => {
  console.log(formData);

  return (
    <>
      <select
        value={formData["select"]}
        onChange={(e) => {
          setFormData((prevData) => {
            return { ...prevData, select: e.target.value };
          });
        }}
        name="test"
        id="test"
      >
        <option value={""}>Select</option>
        <option value={"one"}>one</option>
        <option value={"two"}>two</option>
        <option value={"three"}>three</option>
      </select>
    </>
  );
};
export default Settings;
