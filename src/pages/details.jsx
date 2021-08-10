import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import useFetch from "../hooks/useFetch";
import { showDetails } from "../store/action";

export default function Details() {
  const { id } = useParams();
  //   const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const details = useSelector((state) => {
    return state.charactersReducer.details;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showDetails(id));
  }, [id]);

  if (loading) {
    return <h1 className="text-center"> Loading, please wait... </h1>;
  }

  if (error) {
    return <h1> {error.message} </h1>;
  }

  return (
    <>
      <div className="container shadow-lg">
        <h1 className="text-center">characters details</h1>
        {/* {JSON.stringify(details)} */}
        <div className="d-flex p-5">
          <div style={{ marginLeft: "50px" }}>
            <h3> Height: {details.title}</h3>
            <h3> Mass: {details.release_date}</h3>
            <h3> Gender: {details.vote_average}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
