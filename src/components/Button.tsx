"use client";
import React from "react";

export const Button = () => {
  console.log("Button");
  return (
    <button
      className="btn bg-blue-700 py-2 px-4"
      onClick={() => alert("Hello")}
    >
      Click me
    </button>
  );
};
