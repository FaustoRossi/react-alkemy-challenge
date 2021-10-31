import React from "react";
import HeroItem from "./HeroItem";

function HeroList({ heroes }) {
  const renderedList = heroes.map((heroe) => {
    return <HeroItem heroe={heroe} key={heroe.id} />;
  });

  return (
    <div className="list-group ">
      <div className="container mt-4 mb-4 ">
        <div className="row justify-content-center g-4">{renderedList}</div>
      </div>
    </div>
  );
}

export default HeroList;
