import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import axios from "axios";
import { GrLanguage } from "react-icons/gr";
import { useParams } from "react-router-dom";

const ViewBookDetails = () => {
  const { id } = useParams();
  const [Data, setData] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1000/api/v1/get-book-by-id/${id}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhaW1zIjpbeyJuYW1lIjoidGVzdCJ9LHsicm9sZSI6InVzZXIifV0sImlhdCI6MTcxOTAwNzQwNCwiZXhwIjoxNzIxNTk5NDA0fQ.edEfOtIYfQscd-QeNnEAESgTJEI5_jAbwvvroiXZ4mw", // Include your JWT token here
            },
          }
        );
        setData(response.data.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching the recent books:", err);
      }
    };
    fetch();
  }, [id]);
  return (
    <>
      {/* {Data && (    <div className='px-12 py-6 bg-zinc-900 flex gap-8'>
        <div className='bg-zinc-800 rounded p-4 h-[88vh] w-3/6 flex items-center justify-center'><img src={Data.url} alt="/" className='h-[70vh]' /></div>
        <div className='p-4 w-3/6'>
        <h1 className='text-4xl text-zinc-300 font-semibold'>{Data.title}</h1>
        <p className='text-zinc-400 mt-1'>by {Data.author}</p>
        <p className='text-zinc-500 mt-4 text-xl'>{Data.desc}</p>
        <p className='flex mt-4 items-center justify-start text-zinc-400'><GrLanguage className="me-3" />{Data.language}</p>
        <p className='mt-4 text-zinc-100 text-3xl font-semiold'>Price : Rs. {Data.price}{" "}</p>
        </div>
    </div>
      )} 
      {!Data && <div className='h-screen bg-zinc-900 flex items-center justify-center'><Loader/></div>} */}
      {Data ? (
        <div className="px-8 md:px-12 py-8 bg-zinc-900 flex  flex-col md:flex-row gap-8">
          <div className="bg-zinc-800 rounded p-4 h-[70vh] lg:h-[88vh] w-full lg:w-3/6 flex items-center justify-center">
            <img src={Data.url} alt="/" className="h-[50vh] lg:h-[70vh]" />
          </div>
          <div className="p-4 w-full lg:w-3/6">
            <h1 className="text-4xl text-zinc-300 font-semibold">
              {Data.title}
            </h1>
            <p className="text-zinc-400 mt-1">by {Data.author}</p>
            <p className="text-zinc-500 mt-4 text-xl">{Data.desc}</p>
            <p className="flex mt-4 items-center justify-start text-zinc-400">
              <GrLanguage className="me-3" />
              {Data.language}
            </p>
            <p className="mt-4 text-zinc-100 text-3xl font-semiold">
              Price : Rs. {Data.price}{" "}
            </p>
          </div>{" "}
        </div>
      ) : (
        <div className="h-screen bg-zinc-900 flex items-center justify-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default ViewBookDetails;
