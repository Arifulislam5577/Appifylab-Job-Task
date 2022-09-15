import React from "react";

const Suggested = () => {
  return (
    <div className="suggest p-5 bg-white rounded-md">
      <h2 className="text-dark text-base font-semibold">Suggested people</h2>
      <div className="users flex items-center justify-between gap-2 mt-3">
        <div className="user flex items-center gap-2">
          <img
            src="images/user-2.jpg"
            alt="user"
            className="h-10 w-10 rounded-full"
          />
          <p className="text-darkLight font-semibold text-sm">Sadek Hossian</p>
        </div>
        <button className="border px-2 py-1 text-sm text-darkLight capitalize rounded">
          add+
        </button>
      </div>
    </div>
  );
};

export default Suggested;
