import React from "react";
import ContainerStyles from "./Container.styles";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};

export default Container;
