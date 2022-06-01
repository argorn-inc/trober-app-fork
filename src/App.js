import { useState } from "react";
import logo from "./logo.png";
import "./App.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import car from "./car.png";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <div className="container-fluid bg-dark header" style={{ width: 300 }}>
      <center>
        <img className="logo img-fluid" src={logo} alt="trober logo" />
      </center>
      <div className="row" style={{ backgroundColor: "red" }}>
        <div className="left col-lg-5 justify-content">
          The new way to get
          <br /> to work.
          <br />
          <p id="desc">
            Trober gives you a scheduled ride to take you and from work everyday
          </p>
          <a href="#" className="btn btn-lg bg-white h3 text-dark">
            Join Waitlist
          </a>
        </div>
        <div className="col-lg-7">
          <img id="car" src={car} alt="trober vehiclels" />
        </div>
        <div id="divider"></div>
        <div className="container waitlist text-dark">
          <form>
            <p className="text-center form-title">
              Fill out Details to be added to the waitlist of the smart Trotro
              for working professionals.
            </p>
            <div className="text-center">
              <input
                className="mb-3"
                placeholder="Name"
                onChange={({ target }) => {
                  setName(target.value);
                }}
              />
              <br />
              <input
                className="mb-3"
                placeholder="Phone Number"
                onChange={({ target }) => {
                  setPhone(target.value);
                }}
              />
              <br />
              <select
                onChange={({ target }) => {
                  setPickup(target.value);
                }}
              >
                <option>Please select pick up bus stop</option>
                <option>Bus stop 1</option>
                <option>Bus stop 2 </option>
                <option>Bus stop 3</option>
              </select>
              <br />
              <br />
              <select
                onChange={({ target }) => {
                  setDestination(target.value);
                }}
              >
                <option>Please select destination bus stop</option>
                <option>Bus stop 1</option>
                <option>Bus stop 2 </option>
                <option>Bus stop 3</option>
              </select>
              <br />
              <br />

              <input
                type="submit"
                classname="btn bg-dark h3 submit text-white"
                value="Join Waitlist"
                onClick={async (e) => {
                  e.preventDefault();
                  const response = await axios.post(
                    "http://localhost:3000/saveUserRoute",
                    {
                      name,
                      phoneNumber: phone,
                      pickupLocation: pickup,
                      dropoffLocation: destination,
                    }
                  );
                  console.log(response);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
