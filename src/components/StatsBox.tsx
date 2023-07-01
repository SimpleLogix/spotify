import React from "react";

type Props = { pos: string; stat: string };

const StatsBox = ({ pos, stat }: Props) => {
  return (
    <div className={`stats-container-${pos} frosty column space-bw`}>
      <div className="stats-top">{pos}</div>
      <div className="stats-bot">{stat}</div>
    </div>
  );
};

export default StatsBox;
