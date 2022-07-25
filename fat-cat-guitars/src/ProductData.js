import React, { useEffect, useState } from "react";

import Filter from "./components/Filter";
import "./pages/Home.css";
// import Home from "./pages/Home";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
//result === data
//setBackendData === setItems
// ! Empty Array [] means this UseEffect will run once
function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [backendData, setBackendData] = useState([]);

  // set search query to empty string
  const [q, setQ] = useState("");
  // then we set search parameters
  // searching through guitars by electric/acoustic
  const [searchParam] = useState([""]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setBackendData(data);
          console.log(data[0].id, data[0].ProdTitle);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error:{error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      // <div>{backendData.length > 0 && <ul>{backendData.map(id=>{
      //   <li key={id.ProdImg}</li>
      // })}</ul>}</div>
      <div>
        <div className="products">
          {backendData.map((data, i) => {
            return (
              <div key={i} className="inventory">
                <img key={data.ProdImg} src={data.ProdImg} alt="guitar" />
                <div className="product-info">
                  <h3 key={data.ProdTitle}> {data.ProdTitle}</h3>
                  <h4 key={data.ProdPrice}>{data.ProdPrice}</h4>
                  <p key={data.ProdDesc}>{data.ProdDesc}</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      //   {typeof backendData.id === "undefined" ? (
      //     <p>Loading...</p>
      //   ) : (
      //     backendData.map((data) => <p key={data[0]}>{data[0]}</p>)
      //   )}
      // </div>
    );
  }
}
export default App;
