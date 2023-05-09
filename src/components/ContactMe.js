import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  label: {
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  input: {
    marginBottom: theme.spacing(2),
    borderWidth: '3px !important',
    borderColor: '#333 !important',
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

export default function ContactMe() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      <h2>Get in Touch!</h2>
      <p>
        Feel free to reach out if you have any questions or would like to discuss
        potential opportunities.
      </p>
      {isSubmitted ? (
        <h1>Thank you for your message! You can expect to hear back soon.</h1>
      ) : (
        <form onSubmit={handleSubmit} className={classes.form}>
          <label className={classes.label}>Name:</label>
          <TextField
            variant="outlined"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={classes.input}
          />
          <label className={classes.label}>Email:</label>
          <TextField
            variant="outlined"
            size="small"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.input}
          />
          <label className={classes.label}>Message:</label>
          <TextField
            variant="outlined"
            multiline
            minRows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={classes.input}
          />
          <Button variant="contained" color="primary" type="submit" className={classes.submitButton}>
            Send
          </Button>
        </form>
      )}
    </div>
  );
}

export { ContactMe };
