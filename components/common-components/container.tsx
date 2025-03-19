import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="lg:max-w-[1170px] lg:w-full mx-auto">{children}</div>;
};

export default Container;
