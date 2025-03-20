import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="lg:max-w-[1202px] lg:w-full mx-auto px-4">{children}</div>
  );
};

export default Container;
