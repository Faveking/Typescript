import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [viewResult, setViewResult] = useState<any>({});
  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          `https://fullstack-student-backend.onrender.com/api/auth/${id}`
        );
        // const { data } = await axios.get(
        //   `https://fullstack-student-backend.onrender.com/api/products/${id}`
        // );
        console.log(data);

        setViewResult(data);
      } catch (error) {
        console.error("Result not Found:", error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Product Details Screen Layout </h1>
      {/* <div>
        {viewResult?.products?.image?.map((item: any) => (
          <>
            <img src={item?.url} />
          </>
        ))}
      </div> */}
      {/* <h2>{viewResult?.products?.name}</h2>
      <h2>{viewResult?.products?.brand}</h2>
      <h3>{viewResult?.products?.category}</h3>
      <h1>{viewResult?.products?.quantity}</h1>
      <p>{viewResult?.products?.description}</p>
      <h3>{viewResult?.products?.createdAt}</h3>
      <h1>{viewResult?.products?.price}</h1> */}
      <h2>{viewResult?.firstName}</h2>
      <h2>{viewResult?.lastName}</h2>
      <h3>{viewResult?.phoneNumber}</h3>
      <h1>{viewResult?.email}</h1>
    </div>
  );
};

export default ProductDetails;
