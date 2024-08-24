import React, { Fragment } from "react";
import PatternButton from "./PatternButton";

function ButtonList() {
  return (
    <Fragment>
      <div className="btn-group-vertical buttonList">
        <PatternButton pattern="off" text="Turn Strip Off" img="img/off.jpg" />
        <PatternButton
          pattern="norm"
          text="Normal Pattern"
          img="img/rainbow.png"
        />
        <PatternButton pattern="july" text="July Pattern" img="img/usa.png" />
        <PatternButton pattern="fall" text="Fall Pattern" img="img/fall.png" />
        <PatternButton pattern="xmas" text="Xmas Pattern" img="img/xmas.png" />
      </div>
    </Fragment>
  );
}

export default ButtonList;
