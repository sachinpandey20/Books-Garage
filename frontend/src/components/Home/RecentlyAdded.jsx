import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";
import Loader from "../Loader/Loader";
const RecentlyAdded = () => {
  const [Data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-recent-books",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhaW1zIjpbeyJuYW1lIjoiYWRtaW4ifSx7InJvbGUiOiJhZG1pbiJ9XSwiaWF0IjoxNzIxNjMzNTc5LCJleHAiOjE3MjQyMjU1Nzl9.6YmbbBMxoxHweFojATmTv1jnI9EtuDVWQyFHnicijnU", // Include your JWT token here
            },
          }
        );
        setData(response.data.data);
        //  console.log(response.data.data);
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
