import React from "react";

function FormComponent(props) {
  return (
    <form>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          onChange={props.handleInputChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          onChange={props.handleInputChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          placeholder="age"
          onChange={props.handleInputChange}
        />
      </label>
      <br />
      <label>
        Gender:
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={props.gender === "Male"}
          onChange={props.handleInputChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={props.gender === "Female"}
          onChange={props.handleInputChange}
        />
        Female
      </label>
      <br />
      <label>
        Location:
        <select
          value={props.location}
          name="location"
          onChange={props.handleInputChange}
        >
          <option value="">Enter destination</option>
          <option value="U.S.A">U.S.A.</option>
          <option value="U.K">U.K.</option>
          <option value="Australia">Australia</option>
        </select>
      </label>
      <br />
      <label>
        Diet:
        <input
          type="checkbox"
          name="isVegan"
          checked={props.isVegan}
          onChange={props.handleInputChange}
        />
        Vegetarian
        <label />
        <br />
        <input
          type="checkbox"
          name="isKosher"
          checked={props.isKosher}
          onChange={props.handleInputChange}
        />
        Kosher
        <label />
        <br />
        <input
          type="checkbox"
          name="isLactoseFree"
          checked={props.isLactoseFree}
          onChange={props.handleInputChange}
        />
        Lactose Free
      </label>
      <br />
      <button type="submit">Submit</button>
      <br />
      <hr />
      <h1>User Information:</h1>

      <p>
        Your name: {props.firstName} {props.lastName}
      </p>
      <p>Age: {props.age}</p>
      <p>Gender: {props.gender}</p>
      <p>Location: {props.location}</p>
      <p>Dietary Restrictions: </p>
      <p>Vegan:{props.isVegan ? "Yes" : "No"}</p>
      <p>Kosher:{props.isKosher ? "Yes" : "No"}</p>
      <p>Lactose Free:{props.isLactoseFree ? "Yes" : "No"}</p>
    </form>
  );
}

export default FormComponent;
