import React from "react";

export function Card({ children, ...props }) {
    return (
      <div className="rounded-xl border bg-white text-black shadow" {...props}>
        {children}
      </div>
    );
  }
  
  export function CardHeader({ children }) {
    return <div className="border-b p-4 font-semibold">{children}</div>;
  }
  
  export function CardTitle({ children }) {
    return <h3 className="text-lg font-bold">{children}</h3>;
  }
  
  export function CardDescription({ children }) {
    return <p className="text-sm text-gray-500">{children}</p>;
  }
  
  export function CardContent({ children }) {
    return <div className="p-4">{children}</div>;
  }
  
  export function CardFooter({ children }) {
    return <div className="border-t p-4 text-right">{children}</div>;
  }
  