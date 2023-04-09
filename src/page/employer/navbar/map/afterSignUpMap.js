import React from "react";
import { NavLink } from "react-router-dom";
import { afterSignUpData } from "../data/afterSignUpData";

const afterSignUpMap = () => {
  return (
    <>
      <div>
        {tabData.map((data) => {
          return (
            <>
              <span>{data.heading}</span>
              <div>
                {data.childTab.map((data) => (
                  <NavLink to={"/profile"}>{data.child}</NavLink>
                ))}
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
};

export default afterSignUpMap;
