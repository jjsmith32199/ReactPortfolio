import React, { useState } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
  },

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  header: {
    textAlign: 'center',
    margin: `${theme.spacing(2)}px 0`,
  },
  description: {
    fontSize: '1.2em', // Adjust this as per your preference.
  },
  label: {
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderWidth: "2px",
        },
        "&:hover $notchedOutline": {
          borderWidth: "3px",
        },
        "&.Mui-focused $notchedOutline": {
          borderWidth: "3px",
        },
      },
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <div>
        {isSubmitted ? (
          <h1>Thank you for your message! You can expect to hear back soon.</h1>
        ) : (
          <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.header}>
              <h2>Get in Touch!</h2>
              <p className={classes.description}>
                Feel free to reach out if you have any questions or would like to discuss
                potential opportunities.
              </p>
            </div>
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
            <Button 
              variant="contained"
              style={{
                backgroundColor: 'purple', 
                transition: 'transform 0.3s ease-in-out'
              }} 
              type="submit" 
              className={classes.submitButton}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Send
            </Button>
          </form>
        )}
      </div>
    </ThemeProvider>
  );
}

export { ContactMe };
