import { useState } from "react";
import "./personalInfo.css";
import { useReducer } from "react";

export default function PersonalInfo({ formData, setFormData }) {
  const errorReducer = (state, action) => {
    switch (action.type) {
      case "ERROR_IN_EMAIL":
        return {
          ...state,
          email: true,
        };
      case "ERROR_IN_NAME":
        return {
          ...state,
          name: true,
        };
      case "ERROR_IN_NUMBER":
        return {
          ...state,
          number: true,
        };
      case "NO_ERROR_IN_EMAIL":
        return {
          ...state,
          email: false,
        };
      case "NO_ERROR_IN_NAME":
        return {
          ...state,
          name: false,
        };
      case "NO_ERROR_IN_NUMBER":
        return {
          ...state,
          number: false,
        };
      default:
        throw new Error(`Unhandled exception of ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(errorReducer, {
    name: false,
    email: false,
    number: false,
  });
  return (
    <div className="personalInfo">
      <label>
        <div className="inputLabel">
          <span>Name</span>
          <span className={state.name ? "errorMessage" : "noerror"}>
            This field is required
          </span>
        </div>
        <input
          type={"text"}
          value={formData.name}
          placeholder={"e.g. Swathi"}
          onChange={(event) => {
            dispatch({ type: "NO_ERROR_IN_NAME" });
            setFormData({ ...formData, name: event.target.value });
          }}
          onBlur={(event) => {
            if (event.target.value == "") {
              dispatch({ type: "ERROR_IN_NAME" });
            }
          }}
          required
        />
      </label>
      <label>
        <div className="inputLabel">
          <span>Email Address</span>
          <span className={state.email ? "errorMessage" : "noerror"}>
            This field is required
          </span>
        </div>

        <input
          type="email"
          required
          placeholder="e.g.swathi123@gmail.com"
          value={formData.email}
          onChange={(event) => {
            dispatch({ type: "NO_ERROR_IN_EMAIL" });
            setFormData({ ...formData, email: event.target.value });
          }}
          onBlur={(event) => {
            if (event.target.value == "") {
              dispatch({ type: "ERROR_IN_EMAIL" });
            }
          }}
        />
      </label>
      <label>
        <div className="inputLabel">
          <span>Phone Number</span>
          <span className={state.number ? "errorMessage" : "noerror"}>
            This field is required
          </span>
        </div>

        <input
          type={"tel"}
          // pattern="[0-9]{3}[0-9]{2}[0-9]{3}"
          required
          placeholder="e.g. +91 1234567890"
          value={formData.number}
          onChange={(event) => {
            dispatch({ type: "NO_ERROR_IN_NUMBER" });
            setFormData({ ...formData, number: event.target.value });
          }}
          onBlur={(event) => {
            if (event.target.value == "") {
              dispatch({ type: "ERROR_IN_NUMBER" });
            }
          }}
        />
      </label>
    </div>
  );
}
