import React from "react";

export const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block mb-1 font-medium text-blue-900">
    {children}
  </label>
);