import React from "react";

export const Textarea = ({ id, ...props }) => (
  <textarea
    id={id}
    {...props}
    className="w-full border border-blue-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
);