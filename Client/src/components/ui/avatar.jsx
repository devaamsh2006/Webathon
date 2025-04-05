import React from "react";

export function Avatar({ children }) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
        {children}
      </div>
    );
  }
  
  export function AvatarImage({ src, alt }) {
    return (
      <img src={src} alt={alt} className="w-full h-full object-cover rounded-full" />
    );
  }
  
  export function AvatarFallback({ children }) {
    return <span>{children}</span>;
  }
  