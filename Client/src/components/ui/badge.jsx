import React from "react";

export function Badge({ children }) {
    return (
      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
        {children}
      </span>
    );
  }
  