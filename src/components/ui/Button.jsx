import React from "react";
import clsx from "clsx";

export function Button({ variant = "default", size = "md", className, ...props }) {
  const baseStyles =
    "rounded-lg font-medium focus:outline-none transition-colors duration-200";

  const variants = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100", // darker text + subtle hover
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
