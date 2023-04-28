import React from "react";

function Hoc1<T extends { number: number }>(Component: React.ComponentType<T>) {
  return (props: T) => {
    return <Component {...props} number={100} />;
  };
}

type TestComponentType = {
  title: string;
  number: number;
};

const TestComponent: React.FC<TestComponentType> = (props) => {
  return <div>{props.title}</div>;
};

const C1Container = Hoc1(TestComponent);
