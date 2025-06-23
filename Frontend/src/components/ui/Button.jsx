
import React from "react";

export const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg"
  >
    {children}
  </button>
);