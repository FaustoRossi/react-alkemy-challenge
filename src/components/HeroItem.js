import React, { useState } from "react";
import PowerStats from "./PowerStats";
import "./HeroItem.css";
import Modal from "react-modal";

function HeroItem({ heroe }) {
  const [modal, setModal] = useState(false);

  Modal.setAppElement("#root");
  return (
    <>
      <div class="col-md-3   ">
        <div class="card bg-dark text-white border-0">
          <img src={heroe.image.url} class="card-img" alt={heroe.name} />
          <div class=" details card-img-overlay text-center">
            <h5 class="card-title text-center pt-2">{heroe.name}</h5>
            <p className="card-text  mt-4" style={{ fontWeight: "bold" }}>
              <PowerStats
                combat={heroe.powerstats.combat}
                speed={heroe.powerstats.speed}
                intelligence={heroe.powerstats.intelligence}
                power={heroe.powerstats.power}
                durability={heroe.powerstats.durability}
                strength={heroe.powerstats.strength}
              />
            </p>
            {/* Modal Button */}
            <button
              onClick={() => setModal(!modal)}
              type="button "
              class="btn btn-outline-primary mt-3 "
              data-toggle="modal"
              data-target="#myModal"
            >
              Info
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        closeTimeoutMS={600}
        className="modalContainer container-md"
        style={{ overlay: { backgroundColor: "#03071e" } }}
      >
        <div className="col d-flex justify-content-end">
          <button
            className="btn btn-danger shadow-none"
            onClick={() => setModal(false)}
          >
            X Close
          </button>
        </div>
        <div className="container text-center p-4 ">
          <p className="h1">{heroe.biography["full-name"]}</p>

          <p className="h3">AKA </p>
          <p className="h4">{heroe.biography.aliases[0]}</p>
          <p className="h4">{heroe.biography.aliases[1]}</p>
          <p className="h4">{heroe.biography.aliases[2]}</p>
          <hr />
          <p className="h4"> Weight: {heroe.appearance.weight[1]}</p>
          <p className="h4">Height: {heroe.appearance.height[1]}</p>
          <p className="h4">Eye Color: {heroe.appearance["eye-color"]}</p>
          <p className="h4">Hair Color: {heroe.appearance["hair-color"]}</p>
          <p className="h4">Height: {heroe.appearance.height[1]}</p>

          <p className="h4"> Workplace: {heroe.work.occupation}</p>
        </div>
      </Modal>
    </>
  );
}

export default HeroItem;
