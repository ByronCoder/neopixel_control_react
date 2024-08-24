import React from "react";
import useAxios from "axios-hooks";

function PatternButton(props) {
  // eslint-disable-next-line
  const [{ data }, getRequest] = useAxios(
    {
      url: `http://10.0.0.99:3001/${props.pattern}`,
      method: "GET",
    },
    { manual: true }
  );

  return (
    <button className="btn btn-dark button" onClick={getRequest}>
      <div className="item">
        <span className="caption">{props.text}</span>
        <img className="btnImage" src={props.img} alt="" />
      </div>
    </button>
  );
}

export default PatternButton;
