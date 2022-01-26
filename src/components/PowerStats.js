import React from "react";

function PowerStats({
  combat,
  speed,
  intelligence,
  strength,
  durability,
  power,
}) {
  return (
    <>
      <div class="progress m-3">
        <div
          class="progress-bar  progress-bar-striped progress-bar-animated "
          role="progressbar"
          style={{ width: `${combat}%` }}
          aria-valuenow={{ combat }}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span> Combat {combat}% </span>
        </div>
      </div>
      <div class="progress m-3">
        <div
          class="progress-bar  progress-bar-striped progress-bar-animated "
          role="progressbar"
          style={{ width: `${speed}%` }}
          aria-valuenow={{ speed }}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span style={{ zIndex: "300 !important" }}>Speed {speed}%</span>
        </div>
      </div>
      <div class="progress m-3">
        <div
          class="progress-bar  progress-bar-striped progress-bar-animated "
          role="progressbar"
          style={{ width: `${intelligence}%` }}
          aria-valuenow={{ intelligence }}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Intelligence {intelligence}%
        </div>
      </div>
      <div class="progress m-3">
        <div
          class="progress-bar  progress-bar-striped progress-bar-animated "
          role="progressbar"
          style={{ width: `${durability}%` }}
          aria-valuenow={{ durability }}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Durability {durability}%
        </div>
      </div>
      <div class="progress m-3">
        <div
          class="progress-bar  progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{ width: `${power}%` }}
          aria-valuenow={{ power }}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Power {power}%
        </div>
      </div>
      <div class="progress m-3">
        <div
          class="progress-bar  progress-bar-striped progress-bar-animated "
          role="progressbar"
          style={{ width: `${strength}%` }}
          aria-valuenow={{ strength }}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Strength {strength}%
        </div>
      </div>
    </>
  );
}

export default PowerStats;

// hero.powerstats: combat, durability intelligence power speed strength
