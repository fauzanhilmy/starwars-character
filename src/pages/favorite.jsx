
import "../App.css";
import React from "react";
import Card from "../components/card";
import useFetch from "../hooks/useFetch";
import { SampleNextArrow, SamplePrevArrow } from "../components/arrow.jsx";

import { useSelector } from "react-redux";

function Favorites() {
  const [loading, error] = useFetch();
  const favorites = useSelector((state) => {
    return state.favoriteReducer.favorites;
  });

  if (loading) {
    return <h1 className="text-center"> Loading, please wait... </h1>;
  }

  if (error) {
    return <h1> {error.message} </h1>;
  }

  if (favorites.length === 0) {
    return (
      <h1 className="text-center">
        There is no characters in your favorite list..
      </h1>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="container row mx-auto" style={{ height: "100vh" }}>
        {/* {JSON.stringify(favorites)} */}
        <h1 className="text-center">
          You Have {favorites.length} Favorites Characters
        </h1>
        {favorites.map((element) => {
          return <Card key={element.id} id={element.id} character={element}></Card>;
        })}
      </div>
    </>
  );
}

export default Favorites;
