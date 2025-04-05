import React from "react";

export function Input(props) {
    return (
      <input
        className="px-4 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    );
  }
  