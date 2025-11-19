import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
import Bookmark from "../../assets/bookmark.png";
const Favourites = () => {
  const [FavouriteBooks, setFavouriteBooks] = useState([]);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://books-garage.onrender.com/api/v1/get-favourite-books",
        { headers }
      );
      setFavouriteBooks(response.data.data);
    };
    fetch();
  }, [FavouriteBooks]);
  return (
    <>
      {FavouriteBooks.length === 0 ? (
        <div className="text-5xl font-semibold h-[100%] text-zinc-500 flex items-center flex-col justify-center w-full">
          No Favourite Books
          <img src={Bookmark} alt="" className="h-[20vh] my-8" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {FavouriteBooks.map((items, i) => (
            <div key={i}>
              <BookCard data={items} favourite={true} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Favourites;
