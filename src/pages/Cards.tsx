import React,{useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default function Cards() {
  const [data, setData] = React.useState<any>([]);
  let Id = 0;

  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res: any) => {
        setData(res.data);
        console.log(Id, "Id");

        console.log(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-center mb-4">API Product List</h1>
      <hr />
      <div className="container d-flex flex-column gap-3">
        <div className="row">
          {data.map((item: any) => {
            return (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="card border-danger">
                  <div className="card-body">
                    <div style={{ height: "280px" }}>
                      <img
                        src={item.image}
                        alt=""
                        className="w-100"
                        style={{ height: "280px" }}
                      />
                    </div>

                    <div className=" mt-2 border border-0 border-top">
                      <h6 className="card-title text-center">{item.title}</h6>
                      <h5 className="card-title text-center">$ {item.price}</h5>
                      <div className="d-flex justify-content-between w-100 gap-2">
                        <Link
                          to={`/product/${item.id}`}
                          className="btn btn-outline-danger w-100"
                        >
Product Details                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 


