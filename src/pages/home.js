import "../App.css";
import React, { useEffect, useState } from "react";
import Card from "../components/card";
import Slider from "react-slick";
import useFetch from "../hooks/useFetch";
import { SampleNextArrow, SamplePrevArrow } from "../components/arrow.jsx";
import { useSelector, useDispatch } from "react-redux";
import { ShowCharacters } from "../store/action";

function Home() {
  const [loading, error] = useFetch();
  const characters = useSelector((state) => {
    return state.charactersReducer.characters;
  });

  const search = useSelector((state) => {
    return state.searchReducer.search;
  });


  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(ShowCharacters());
  }, []);
  if (loading) {
    return <h1 className="text-center"> Loading, please wait... </h1>;
  }

  if (error) {
    return <h1> {error.message} </h1>;
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
      {/* {JSON.stringify(characters)} */}
      {/* <div className="container row mx-auto"> */}
      <h1 className="text-center"> Star Wars Characters </h1>{" "}
      <Slider {...settings}>
        {characters
          .filter((character) => {
            if (!search) {
              return character;
            } else if (
              character.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return character;
            }
          })
          .map((element) => {
            return (
              <Card key={element.id} character={element}>
                {" "}
              </Card>
            );
          })}{" "}
      </Slider>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      </div>
    </>
  );
}

export default Home;
