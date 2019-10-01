import React from "react";

const NewCard = ({ info }) => {
  return (
    <div class="center">
      <div class="card">
        <div class="additional">
          <div class="user-card">
            <div className="new-card">
              <img src={info.slike[0]} />
            </div>

            <svg
              width="110"
              height="110"
              viewBox="0 0 250 250"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="title desc"
              class="center"
            >
              <defs>
                <clipPath id="scene">
                  <circle cx="125" cy="125" r="115" />
                </clipPath>
                <clipPath id="lips">
                  <path d="M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="more-info"></div>
        </div>
        <div class="general">
          <h1>{info.naziv}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut
            pulvinar.
          </p>
          <span class="more">Mouse over the card for more info</span>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
