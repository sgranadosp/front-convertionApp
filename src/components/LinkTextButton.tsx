import React from "react";
import { useNavigate } from "react-router-dom";

interface LinkTextButtonProps {
  to: string;
  children: React.ReactNode;
}

const LinkTextButton: React.FC<LinkTextButtonProps> = ({ to, children }) => {
  const navigate = useNavigate();

  return (
    <span
      onClick={() => navigate(to)}
      style={{
        color: "blueviolet",
        textDecoration: "underline",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      {children}
    </span>
  );
};

export default LinkTextButton;
