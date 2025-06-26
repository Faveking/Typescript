import React, { useState } from "react";
import { FaPhone, FaTrash } from "react-icons/fa";
import DelecteModal from "./DelecteRough";
import img1 from "../Componet/service-1.jpg";
import img2 from "../Componet/service-2.jpg";
import img3 from "../Componet/service-3.jpg";

const Events = () => {
  const [deleteData, setDeleteData] = useState(false);
  const [DataInfo, setDataInfo] = useState<any>([]);
  console.log(DataInfo);
    const sample = () => {};
  const fetchData = () => {
    setDataInfo([
      {
        id: 1,
        title: "Web Design",
        image: img1,
        description:
          "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
      },
      {
        id: 2,
        title: "Graphic Design",
        image: img2,
        description:
          "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
      },
      {
        id: 3,
        title: "Content Creation",
        image: img3,
        description:
          "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
      },
    ]);
  };
  const [toggle, setToggel] = useState<any>("God is good");
  console.log(toggle);
  const handleclick = () => {
    setToggel("100");
  };
  const handleDelete = () => {
    setDeleteData(true);
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
      {deleteData && <DelecteModal />}
      <div>
        {DataInfo.map((items: any) => (
                  <>
        <div>
          <img src={items.image} />
          <p>{items.desc}</p>
          <h3>{items.title}</h3>
        </div>
        </>
        ))}
        <h1 onClick={fetchData} style={{ cursor: "grab" }}>
          display my data
        </h1>

      </div>
    </div>
  );
};

export default Events;
