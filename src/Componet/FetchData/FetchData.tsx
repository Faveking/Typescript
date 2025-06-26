import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const FetchAllData = () => {
  const [viewResult, setViewResult] = useState([]);
  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://fullstack-student-backend.onrender.com/api/auth"
        );
        // const { data } = await axios.get(
        // "https://fullstack-student-backend.onrender.com/api/products"
        // );
        console.log(data);

        setViewResult(data);
      } catch (error) {
        console.error("Result not Found:", error);
      }
    };
    fetchPosts();
  }, []);
  const navigate = useNavigate();
  const productDetails = (_id: any) => {
    navigate(`/ProductDetails/${_id}`);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: "10px",
        }}
      >
        {viewResult.map((item: any) => (
          <>
            <Card style={{ width: "18rem" }}>
              {/* {item.images.map((item: any) => (
                <>
                  <Card.Img variant="top" src={item.url} />
                </>
              ))} */}
              {/* {item.images.map(item.any)} */}

              {/* <Link to={`/productDetails/${item._1d}`}> */}
              {/* <a href={`/productDetails/${item._id}`}> */}
              <Card.Body onClick={() => productDetails(item._id)}>
                <Card.Title>{item.firstName}</Card.Title>
                <Card.Text>{item.lastName}</Card.Text>
                <Card.Text>{item.phoneNumber}</Card.Text>
                <Card.Text>{item.email}</Card.Text>
                {/* <Button variant="primary">Add to cart</Button> */}
              </Card.Body>
              {/* </a> */}
              {/* </Link> */}
            </Card>
          </>
        ))}
      </div>
      <h1>Display Data Screen</h1>
    </div>
  );
};

export default FetchAllData;

// First way to map an image <img src={items.fileurl} alt="" />

// second way to map an image {NavItem.fileurl.map((list:any) =>(
//   <>
//   <img src={list} />
//   </>
// ))}
