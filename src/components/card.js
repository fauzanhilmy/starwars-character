import React from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../store/action";
import Swal from "sweetalert2";

function Card(props) {

  const favorites = useSelector((state) => {
    return state.favoriteReducer.favorites;
  });

  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();

  function addFavorites(character) {

    let isFavorite = false;
    favorites.forEach((favCharacter) => {
      if (favCharacter.id === character.id) {
        isFavorite = true;
      }
    });
    if (!isFavorite) {
      history.push("/favorites");

      dispatch(addToFavorites(character));
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This character already in your favorites",
      });
    }
  }
  return (
    <div className="col-4">
      <div className="card mb-5 mx-auto" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            <b>{props.character.name}</b>
          </h5>
        </div>
        <ul className="list-group list-group-flush" >
          <li className = "list-group-item"> 
                <b style={{marginLeft: "0px"}}>Birth Year:</b> {"                     "}
                <b style={{marginRight: "-30px"}}>{props.character.birth_year}</b>
           </li> 
           <li className = "list-group-item"> 
                <b style={{marginLeft: "0px"}}>Eye Color:</b> {"                     "}
                 <b>{props.character.eye_color}</b>
           </li>   
        </ul>
        <div className="card-body">
          <div className="row">
            <div className="mb-1">
              <Link
                type="button"
                className="btn btn-primary col-12"
                to={"/" + props.character.id}
              >
                See More
              </Link>
            </div>
            {url !== "/favorites" ? (
              <div className="">
                <button
                  type="button"
                  className="btn btn-success col-12"
                  onClick={() => {
                    addFavorites(props.character);
                  }}
                >
                  Favorite
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
