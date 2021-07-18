import { useEffect } from "react";
import { useState } from "react";
import { GoVerified } from "react-icons/go";
import "../Styles/artist.css";

const Artist = (props) => {
  const [artist, setArtist] = useState([]);
  const [track, setTrack] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/artist/${props.match.params.artistId}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjBjNGIzNTgxNzAwMTVjMjI3MGQiLCJpYXQiOjE2MjU3NDgzNzQsImV4cCI6MTYyNjk1Nzk3NH0.BydDaakd8oh2658A1B7CI3-gjsU729gWFgfbKupLjFc",
            },
          }
        );
        const res = await response.json();
        setArtist(res);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchData2 = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/artist/${props.match.params.artistId}/top?limit=50`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjBjNGIzNTgxNzAwMTVjMjI3MGQiLCJpYXQiOjE2MjU3NDgzNzQsImV4cCI6MTYyNjk1Nzk3NH0.BydDaakd8oh2658A1B7CI3-gjsU729gWFgfbKupLjFc",
            },
          }
        );
        const res = await response.json();
        setTrack(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    fetchData2();
  }, []);

  console.log(artist);
  console.log(track);
  return (
    <div class="col pr-0">
      <div id="bgd-img" class="img-bgd">
        <div class="album-name text-white">
          <p>
            <GoVerified /> Verified Artist
          </p>
          <h1 class="name font-weight-bolder">{artist.name}</h1>
          <p class="number-listner">{artist.nb_fan} monthly listners</p>
        </div>
      </div>
    </div>
  );
};
export default Artist;
