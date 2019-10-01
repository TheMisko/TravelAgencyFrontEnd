import React from "react";
import "../App.css";
import StarIcon from "@material-ui/icons/Star";

const Utisci = () => {
  const slike = [
    "https://s3-ap-southeast-2.amazonaws.com/media1.mydeal.com.au/blog/post/blog_image_20180219221810890.jpg",
    "https://www.theladders.com/wp-content/uploads/friends-happy-190821-800x450.jpg",
    "http://vividlife.me/ultimate/wp-content/uploads/2011/12/Things-Shared-By-Happy-People-e1324345715743.jpg"
  ];
  return (
    <>
      <div className="utisci">
        <h1>Utisci Zadovljnih Klijenata</h1>
      </div>
      <div className="round-img-flex">
        {slike.map(slika => (
          <div className="round-img">
            <img src={slika} alt="Avatar" />
            <div className="star">
              <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
            </div>
            <h2>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam."
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Utisci;

// AIzaSyDw64XziSM3HM_vLC-ovtXFU9zZPEFHlqs