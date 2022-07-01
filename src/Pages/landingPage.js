import { useState, useEffect } from "react";
import logo from "../logo.png";
import "../App.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import car from "../images/car.png";
import axios from "axios";

export default function LandingPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  return (
    <div className="container-fluid bg-dark " id="mainBody">
      <center>
        <img className="logo img-fluid" src={logo} alt="trober logo" />
      </center>
      <div className="row" id="noMargin">
        <div className="left text-center col-lg-5 justify-content">
          Redefine your
          <br />
          journey
          <br />
          <p id="desc">
            Trober gives you a scheduled <br />
            ride to and from work
          </p>
          <a
            href="#waitlist"
            className="btn btn-lg h3 text-dark"
            id="waitlistbutton"
          >
            <p className="margin0" id="joinWaitlistTop">
              Join Waitlist
            </p>
          </a>
        </div>
        <div className="col-lg-7">
          <img
            id="car"
            className="img-fluid"
            src={car}
            alt="trober vehiclels"
          />
        </div>
        <div id="divider"></div>
        <div className="container waitlist text-dark bg-white" id="waitlist">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              try {
                await axios.post(
                  "https://trober-backend.herokuapp.com/saveUserRoute",
                  {
                    name,
                    phoneNumber: phone,
                    pickupLocation: pickup,
                    dropoffLocation: destination,
                  }
                );
                setDestination("");
                setName("");
                setPickup("");
                setPhone("");
                setMessage("Hurray! We will be in touch with you soon!");
              } catch (e) {
                setMessage(e.response.data);
              }
              setLoading(false);
            }}
          >
            <p className="text-center form-title">
              Register your interest for a smart commute!
            </p>
            <div className="text-center">
              <label className="displayFlex">Name</label>
              <input
                type={"text"}
                required
                className="mb-3"
                placeholder="Ama Kpobie"
                value={name}
                onChange={({ target }) => {
                  setName(target.value);
                }}
              />
              <br />
              <label className="displayFlex">Phone Number</label>
              <input
                type={"number"}
                required
                className="mb-3"
                placeholder="054XXXXXXX"
                value={phone}
                onChange={({ target }) => {
                  setPhone(target.value);
                }}
              />
              <br />
              <label className="displayFlex">Pickup Location</label>
              <input
                type={"text"}
                required
                className="mb-3 required"
                placeholder="Spintex, Manet Junction"
                value={pickup}
                onChange={({ target }) => {
                  setPickup(target.value);
                }}
              />

              <br />
              <label className="displayFlex">Destination</label>
              <input
                type={"text"}
                required
                className="mb-3"
                placeholder="Madina, Ritz Junction"
                value={destination}
                onChange={({ target }) => {
                  setDestination(target.value);
                }}
              />

              <br />
              <br />
              <button
                type="submit"
                className="btn h3 submit text-white"
                id="waitlistButton"
                disabled={loading}
              >
                <p id="joinWaitlist">Join Waitlist</p>
              </button>
              {loading && (
                <div className="loaderContainer">
                  <img
                    className="loader"
                    src={require("../images/giphy.gif")}
                    alt="loader"
                  />
                </div>
              )}
              {message && <p className="marginTop20">{message}</p>}
            </div>
          </form>
        </div>
      </div>
      <div className="height100white" />

      <div className="footerStyle">
        <div className="flexColumn">
          <p id="footer">
            Aluguntugui Street
            <br />
            East Legon
            <br />
            Accra
          </p>
        </div>
        <div className="copywrite">Trober@2022</div>
        <div className="flexColumn">
          <p id="footerRight">
            Contact Us
            <br />
            <a className="noStyleBlack" href="tel">
              +233 54 635 3625
            </a>
            <br />
            <a className="noStyleBlack" href="tel">
              +233 55 373 8944
            </a>
            <br />
            <a className="noStyleBlack" href="tel">
              +233 54 546 8387
            </a>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
