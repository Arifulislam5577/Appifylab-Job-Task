import React from "react";

const Dawnload = () => {
  return (
    <div className="p-5 bg-white rounded-md">
      <h2 className="text-dark text-base font-semibold">Dawnload App</h2>
      <div className="img-box flex items-center w-full gap-2 mt-1">
        <div className="w-1/2">
          <img src="images/ap.png" alt="apple" />
        </div>
        <div className="w-1/2">
          <img src="images/gp.png" alt="google" />
        </div>
      </div>
    </div>
  );
};

export default Dawnload;
