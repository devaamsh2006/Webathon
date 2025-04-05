import { useState } from "react";
import React from "react";

export function Tabs({ defaultValue, children }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleChange = (value) => {
    setActiveTab(value);
  };

  // Clone TabsList and pass activeTab, setActiveTab to its children
  return (
    <div className="w-full">
      {React.Children.map(children, (child) =>
        child.type.name === "TabsList"
          ? React.cloneElement(child, { activeTab, onTabChange: handleChange })
          : React.cloneElement(child, { activeTab })
      )}
    </div>
  );
}

export function TabsList({ children, activeTab, onTabChange }) {
  return (
    <div className="flex border-b">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, onTabChange })
      )}
    </div>
  );
}

export function TabsTrigger({ value, children, activeTab, onTabChange }) {
  const isActive = activeTab === value;

  return (
    <button
      className={`px-4 py-2 ${
        isActive ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"
      }`}
      onClick={() => onTabChange(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, activeTab, children }) {
  return activeTab === value ? <div className="p-4">{children}</div> : null;
}
