import React, { useState } from "react";
import { FaPhone, FaTrash } from "react-icons/fa";
import DelecteModal from "./DelecteRough"

const Events = () => {
    const [deleteData, setDeleteData] = useState(false)
  const sample = () => {};
  const [toggle, setToggel] = useState<any>("God is good");
  console.log(toggle);
  const handleclick = () => {
    setToggel("100");
  };
    const handleDelete = () => {
        setDeleteData(true)
    };
  return (
    <div>
      <button onClick={handleclick}>
        clink me pls <span>{toggle}</span>{" "}
      </button>
      <div>
        <button onClick={handleDelete}>
          <FaPhone style={{ color: "green" }} />
          <FaTrash style={{ color: "red" }} />
        </button>
      </div>
      {deleteData && <DelecteModal/>}
    </div>
  );
};

export default Events;
