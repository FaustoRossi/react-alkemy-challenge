import React from "react";

function Spinner() {
  return (
    <button
      class="btn btn-primary shadow-none"
      style={{ backgroundColor: " #3ad29f", border: "none" }}
      type="submit"

      //   disabled
    >
      <span
        class="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Loading...
    </button>
  );
}

export default Spinner;
