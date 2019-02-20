import React from "react";

const seasonConfig = {
  winter: {
    text: "Lets hit the ski mountain",
    iconName: "snowflake"
  },
  summer: {
    text: "Wow it summer hot outside",
    iconName: "sun"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());

  const { text, iconName } = seasonConfig[season];

  return (
    <div>
    <i className={`${iconName} icon`} />
    <div>The weather for you is in: {season}</div>;
    </div>
    )
};

export default SeasonDisplay;
