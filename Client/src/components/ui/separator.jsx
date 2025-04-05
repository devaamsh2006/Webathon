import React from "react";

export function Separator({ className = "", ...props }) {
    return (
      <hr
        className={`my-4 border-t border-gray-300 ${className}`}
        {...props}
      />
    );
  }
  