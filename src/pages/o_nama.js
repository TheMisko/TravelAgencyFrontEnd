import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/Email";

const Onama = () => {
  return (
    <div>
      <NavBar />
      <div className="oNama-img">
        <div className="oNama-text">
          <h1>O Nama</h1>
          <h2>
            Objectively innovate empowered manufactured products whereas
            <br />
            parallel platforms. Holisticly predominate extensible testing
            <br />
            procedures for reliable supply chains.
          </h2>
        </div>
        <img src="https://www.kyero.com/guides/wp-content/uploads/2019/01/Tossa-de-Mar-1-2400x1600.jpg" />
      </div>
      <div className="oNama-opis">
        <h1>TRAVEL AGENCY STORY</h1>
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h2>
      </div>
      {/* <div className="oNama-slike">
        <img src="https://d1ez3020z2uu9b.cloudfront.net/imagecache/blog-photos/8883_Fill_800_800.JPG" />
        <img src="https://cdn.tourcms.com/a/62/2021/1/large.jpg" />
        <img src="https://1sis3n2uzhvwypyas1efalg3-wpengine.netdna-ssl.com/wp-content/uploads/Palamos_Image-uai-1600x900.jpg" />
      </div> */}
      <div className="nas">
        <h1>Nas Tim</h1>
      </div>
      <div className="tim">
        <img src="https://previews.123rf.com/images/alphaspirit/alphaspirit1504/alphaspirit150400118/38665682-simple-young-man-face-smiling-and-optimistic.jpg" />
        <img src="https://media.gettyimages.com/photos/confident-woman-picture-ida0063-000098" />
        <img src="https://paulmampillyguru.com/wp-content/uploads/2017/06/Mampilly_NoBG.png" />
        <img src="https://st3.depositphotos.com/12985790/16524/i/1600/depositphotos_165241112-stock-photo-handsome-smiling-man.jpg" />
      </div>
      <div className="kontakt-h1">
        <h1>Kontakt Info</h1>
      </div>

      <div className="oNama-kontakt">
        <div className="oNama-kontakt-flex">
          <div className="kontakt-info">
            <div className="kontakt-icon">
              <LocationOnIcon fontSize="large" />
            </div>
            <h2>Ulica Marka Markovica</h2>
          </div>
          <div className="kontakt-info">
            <div className="kontakt-icon">
              <PhoneIphoneIcon fontSize="large" />
            </div>{" "}
            <h2>069-788-788-7</h2>
          </div>
          <div className="kontakt-info">
            <div className="kontakt-icon">
              <EmailIcon fontSize="large" />
            </div>{" "}
            <h2>agencijaEmail@gmail.com</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Onama;
