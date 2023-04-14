import React from "react";
import loader from "../../img/loader.svg";

type PropsType = { size?: number };

export const Preloader = (props: PropsType) => {
  return (
    <div>
      <img style={{ width: props.size }} src={loader} alt={loader} />
    </div>
  );
};
