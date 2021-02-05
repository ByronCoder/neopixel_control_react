import React from "react";
import useAxios from "axios-hooks";

function PatternButton(props) {
  // eslint-disable-next-line
  const [{ data }, postData] = useAxios(
    {
      url: `https://io.adafruit.com/api/v2/webhooks/feed/4zVqBduBFcU7mFaj2y4KQwpx4DUe`,
      method: "POST",
      data: {
        value: props.pattern
      }
    },
    { manual: true }
  );

  return (
    <button className="btn btn-dark button" onClick={postData}>
      <div className="item">
        <span className="caption">{props.text}</span>
        <img className="btnImage" src={props.img} alt="" />
      </div>
    </button>
  );
}

export default PatternButton;
