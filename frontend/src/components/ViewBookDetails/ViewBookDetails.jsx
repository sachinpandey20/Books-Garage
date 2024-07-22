import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import axios from "axios";
import { GrLanguage } from "react-icons/gr";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { FaRegEdit, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";

const ViewBookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Data, setData] = useState();
  const [error, setError] = useState(null);
  const isLoggenIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1000/api/v1/get-book-by-id/${id}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhaW1zIjpbeyJuYW1lIjoiYWRtaW4ifSx7InJvbGUiOiJhZG1pbiJ9XSwiaWF0IjoxNzIxNjMzNTc5LCJleHAiOjE3MjQyMjU1Nzl9.6YmbbBMxoxHweFojATmTv1jnI9EtuDVWQyFHnicijnU", // Include your JWT token here
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

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: id,
  };

  const handleFavourite = async () => {
    const response = await axios.put(
      "http://localhost:1000/api/v1/add-book-to-favourite",
      {},
      { headers }
    );
    alert(response.data.message);
  };
  const handleCart = async () => {
    const response = await axios.put(
      "http://localhost:1000/api/v1/add-to-cart",
      {},
      { headers }
    );
    alert(response.data.message);
  };
  const deleteBook = async () => {
    const response = await axios.delete(
      "http://localhost:1000/api/v1/delete-book",
      { headers }
    );
    alert(response.data.message);
    navigate("/all-books");
  };

  return (
    <>
      {Data ? (
        <div className="px-8 md:px-12 py-8 bg-zinc-900 flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-3/6">
            {" "}
            <div className=" bg-zinc-800 flex flex-col  lg:flex-row justify-around p-12 rounded  ">
              <img
                src={Data.url}
                alt="/"
                className="h-[50vh] md:h-[60vh] lg:h-[70vh] rounded"
              />
              {isLoggenIn === true && role === "user" && (
                <div className="flex  flex-col md:flex-row lg:flex-col items-center justify-between lg:justify-start mt-4 lg:mt-0">
                  <button
                    className="bg-white rounded lg:rounded-full text-4xl lg:text-3xl p-3 text-red-500 flex items-center justify-center"
                    onClick={handleFavourite}
                  >
                    <FaHeart />{" "}
                    <span className="ms-4 block lg:hidden">Favourites</span>
                  </button>
                  <button
                    className="text-white rounded md:mt-0 lg:rounded-full text-4xl lg:text-3xl p-3 mt-8 lg:mt-8 bg-blue-500 flex items-center justify-center"
                    onClick={handleCart}
                  >
                    <FaShoppingCart />{" "}
                    <span className="ms-4 lg:hidden block">Add to cart</span>
                  </button>
                </div>
              )}
              {isLoggenIn === true && role === "admin" && (
                <div className="flex flex-col md:flex-row lg:flex-col items-center justify-between lg:justify-start mt-4 lg:mt-0">
                  <Link to={`/updateBook/${id}`}className="bg-white rounded lg:rounded-full text-4xl lg:text-3xl p-3 flex items-center justify-center">
                    <FaRegEdit />
                    <span className="ms-4 block lg:hidden">Edit</span>
                  </Link>
                  <button
                    className="text-red-500 rounded mt-8 md:mt-0  lg:rounded-full text-4xl lg:text-3xl p-3 lg:mt-8 bg-white flex items-center justify-center"
                    onClick={deleteBook}
                  >
                    <MdDeleteOutline />
                    <span className="ms-4 lg:hidden block">Delete Book</span>
                  </button>
                </div>
              )}
            </div>
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
              Price : ₹ {Data.price}{" "}
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
