import React, { useState } from "react";
import _ from "lodash/fp";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

var array = [];
function App() {
  const Form = ({ change }) => {
    const { register, handleSubmit, watch, errors } = useForm();
    var onSubmit = (data) => {
      array.push(data);
      change();
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            width: "500px",
            border: "1px solid whitesmoke",
            marginLeft: "-450px",
          }}
        >
          <label>First Name</label>
          <input
            name="firstName"
            ref={register({
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {_.get("firstName.type", errors) === "required" && (
            <p>This field is required</p>
          )}
          {_.get("firstName.type", errors) === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
          <label>Last Name</label>
          <input
            name="lastName"
            ref={register({
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {_.get("lastName.type", errors) === "required"}
          {_.get("lastName.type", errors) === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
          <label>Email ID</label>
          <input
            name="email"
            ref={register({
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
            })}
          />
          {_.get("email.type", errors) === "required"}
          {_.get("email.type", errors) === "pattern" && <p>Invalid Email ID</p>}
          <label>Password</label>
          <input
            name="password"
            type="password"
            ref={register({
              required: true,
              pattern: /^[A-Za-z0-9`!@#$%^&*]+$/i,
            })}
          />
          {_.get("password.type", errors) === "required"}
          {_.get("password.type", errors) === "pattern"}
          <label>Confirm Password</label>
          <input
            name="retype"
            type="password"
            ref={register({
              required: true,
              pattern: /^[A-Za-z0-9`!@#$%^&*]+$/i,
            })}
          />
          {_.get("retype.type", errors) === "required"}
          {_.get("retype.type", errors) === "pattern"}
          {watch("password") !== watch("retype") && (
            <p>Enter the Confirm Password</p>
          )}
          <label>Marital Status</label>
          {_.get("status.type", errors) === "required"}
          <label>
            Single
            <input
              name="status"
              type="radio"
              value="Single"
              style={{ marginLeft: "-90px", marginTop: "-22px" }}
              ref={register({
                required: true,
              })}
            />
          </label>
          <label>
            Married
            <input
              name="status"
              type="radio"
              value="Married"
              style={{ marginLeft: "-90px", marginTop: "-22px" }}
              ref={register({
                required: true,
              })}
            />
          </label>
          <label>
            Relationship
            <input
              name="status"
              type="radio"
              value="Relationship"
              style={{ marginLeft: "-90px", marginTop: "-22px" }}
              ref={register({
                required: true,
              })}
            />
          </label>
          <label>Choice of Food</label>
          {_.get("food.type", errors) === "required"}
          <label>
            Veg Meals{" "}
            <input
              value="Veg Meals"
              type="checkbox"
              name="food"
              style={{ marginLeft: "-90px", marginTop: "-22px" }}
              ref={register({
                required: true,
              })}
            />
            Non-Veg Meals
            <input
              value="Non-Veg Meals"
              type="checkbox"
              name="food"
              style={{ marginLeft: "-90px", marginTop: "-22px" }}
              ref={register({
                required: true,
              })}
            />
            Pizza
            <input
              value="Pizza"
              type="checkbox"
              name="food"
              style={{ marginLeft: "-90px", marginTop: "-22px" }}
              ref={register({
                required: true,
              })}
            />
            Chicken Biriyani
            <input
              value="Chicken Biriyani"
              type="checkbox"
              name="food"
              style={{ marginLeft: "-90px", marginTop: "-22px" }}
              ref={register({
                required: true,
              })}
            />
          </label>
          <label>Country</label>
          {_.get("Country.type", errors) === "required"}
          <select
            style={{ width: "200px", marginLeft: "24px" }}
            name="Country"
            ref={register({
              required: true,
            })}
          >
            <option value="" disabled selected>
              Choose your Country
            </option>
            <option value="India">India</option>
            <option value="America">America</option>
          </select>
          <label>State</label>
          {_.get("State.type", errors) === "required"}
          <select
            style={{ width: "200px", marginLeft: "24px" }}
            name="State"
            ref={register({
              required: true,
            })}
          >
            <option value="" disabled selected>
              Choose your State
            </option>
            <option value="" disabled selected>
              India
            </option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Delhi">Delhi</option>
            <option value="Kerala">Kerala</option>
            <option value="" disabled selected>
              America
            </option>
            <option value="California">California</option>
            <option value="Texas">Texas</option>
            <option value="New York">New York</option>
          </select>
          <button>SUBMIT</button>
        </div>
      </form>
    );
  };
  const Table = () => {
    return (
      <table class="table table-trapped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>Password</th>
            <th>Confirm Password</th>
            <th>Marital Status</th>
            <th>Choice of Food</th>
            <th>Country</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {array.map((Object, index) => {
            return (
              <tr key={index}>
                <td>{Object.firstName}</td>
                <td>{Object.lastName}</td>
                <td>{Object.email}</td>
                <td>{Object.password}</td>
                <td>{Object.retype}</td>
                <td>{Object.status}</td>
                <td>{Object.food}</td>
                <td>{Object.Country}</td>
                <td>{Object.State}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  const [form, reactform] = useState("invalid");
  return (
    <div>
      <h1>REACT FORM VALIDATION</h1>
      <hr style={{ color: "white", width: "600px" }}></hr>
      <Form
        change={() => {
          reactform("valid");
        }}
      />
      {form === "invalid" ? <h2>NO DATA ARE AVAILABLE</h2> : <Table />}
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
