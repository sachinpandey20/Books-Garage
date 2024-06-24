import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ data }) => {
  return (
    <>
      <Link to={`/view-book-details/${data._id}`}>
        <div className="bg-zinc-800 rounded p-4">
          <div className="bg-zinc-900 rounded flex items-center justify-center">
            <img src={data.url} alt="/" className="h-[25vh]" />
          </div>
          <div>
            <h2 className="mt-4 text-xl  font-semibold">{data.title}</h2>
            <h2 className="mt-2 font-semibold text-zinc-400 i">by {data.author}</h2>
            <h2 className="mt-2 font-semibold text-zinc-200 text-xl">₹ {data.price}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BookCard;
