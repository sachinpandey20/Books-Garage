import React, { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import BookCard from "../components/BookCard/BookCard";
import axios from "axios";
const AllBooks = () => {
  const [Data, setData] = useState();
  const [error, setError] = useState(null);
  // const headers = {
  //   id: localStorage.getItem("id"),
  //   authorization: `Bearer ${localStorage.getItem("token")}`,
  // };
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-all-books",
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
    <div className="bg-zinc-900 h-auto px-12 py-8 ">
      <h4 className="text-3xl text-yellow-100">All Books</h4>
      {!Data && (
        <div className="w-full h-screen flex items-center justify-center">
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

export default AllBooks;
