import React, { Fragment } from "react";
import PatternButton from "./PatternButton";

function ButtonList() {
  return (
    <Fragment>
      <div className="btn-group-vertical buttonList">
        <PatternButton pattern="z" text="Turn Strip Off" img="img/off.jpg" />
        <PatternButton pattern="n" text="Normal Pattern" img="img/rainbow.png" />
        <PatternButton pattern="j" text="July Pattern" img="img/usa.png" />
        <PatternButton pattern="f" text="Fall Pattern" img="img/fall.png" />
        <PatternButton pattern="c" text="Xmas Pattern" img="img/xmas.png" />
      </div>
    </Fragment>
  );
}

export default ButtonList;
