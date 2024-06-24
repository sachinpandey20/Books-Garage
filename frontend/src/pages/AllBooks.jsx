import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader/Loader'
import BookCard from '../components/BookCard/BookCard'
import axios from 'axios';
const AllBooks = () => {
  const [Data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-all-books",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhaW1zIjpbeyJuYW1lIjoidGVzdCJ9LHsicm9sZSI6InVzZXIifV0sImlhdCI6MTcxOTAwNzQwNCwiZXhwIjoxNzIxNTk5NDA0fQ.edEfOtIYfQscd-QeNnEAESgTJEI5_jAbwvvroiXZ4mw", // Include your JWT token here
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
  )
}

export default AllBooks