import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";
import Loader from "../Loader/Loader";
const RecentlyAdded = () => {
  const [Data, setData] = useState();
  const [error, setError] = useState(null);

    const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

   useEffect(() => {
    const fetch = async () => {
      try {
        const token = localStorage.getItem("token");
        const id = localStorage.getItem("id");

        const config = token
          ? { headers: { id, authorization: `Bearer ${token}` } }
          : {};

        const response = await axios.get(
          "http://localhost:1000/api/v1/get-recent-books");

        setData(response.data.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching the recent books:", err);
      }
    };
    fetch();
  }, []);

  return (
    <div className="mt-8 px-4 ">
      <h4 className="text-3xl text-yellow-100">Recently added books</h4>
      {!Data && (
              <div className="flex items-center justify-center my-8">
              <Loader />
            </div>
      )}
      <div className="my-8 grid sm:grid-cols-3 md:grid-cols-4 gap-8">
        {Data &&
          Data.map((items, i) => (
            <div key={i}>
              <BookCard data={items} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
