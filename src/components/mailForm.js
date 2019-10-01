import React, { useState } from "react";

import axios from "axios";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const MailForm = ({ naziv }) => {
  const [values, setValues] = useState({
    email: "",
    username: "",
    phoneNumber: "",
    naziv: naziv
  });
  const onChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const onSubmit = async event => {
    event.preventDefault();
    const { email, username, phoneNumber, naziv } = values;
    const form = await axios
      .post("http://localhost:3001/api/form", {
        email,
        username,
        phoneNumber,
        naziv
      })
      .then(setValues({ ...values, email: "", username: "", phoneNumber: "" }));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>{naziv}</h1>
        <TextField
          id="filled-full-width"
          label="Ime"
          style={{ margin: 8 }}
          placeholder="Vase Ime"
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true
          }}
          value={values.username}
          onChange={onChange}
          name="username"
        />

        <TextField
          id="filled-full-width"
          label="Email"
          style={{ margin: 8 }}
          placeholder="Vas Email"
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true
          }}
          value={values.email}
          onChange={onChange}
          name="email"
        />

        <TextField
          id="filled-full-width"
          label="Broj"
          style={{ margin: 8 }}
          placeholder="Vas Broj telefona"
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true
          }}
          value={values.phoneNumber}
          onChange={onChange}
          name="phoneNumber"
        />
        <Button color="primary" type="submit" variant="contained">
          Posalji
        </Button>
      </form>
    </div>
  );
};

export default MailForm;
