import React from "react";

const seasonConfig = {
  winter: {
    text: "Burr! Its chilly",
    icon: "snowflake"
  },
  summer: {
    text: "Let's hit beach",
    icon: "sun"
  }
};
function getSeason(lat, month) {
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  else return lat > 0 ? "winter" : "summer";
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { icon, text } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`}></i>
      <div>{text}</div>
      <i className={`icon-right massive ${icon} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
