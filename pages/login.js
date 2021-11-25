import Link from "next/link";
import { Button, Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "../styles/Login.module.css";
import Image from "next/image";
import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Login() {
  const [isChecked, setIsChecked] = useState(false);
  const [usrEmail, setUsrEmail] = useState("");
  const [usrPsw, setUsrPsw] = useState("");

  const toggleCheck = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(usrEmail + "\n" + usrPsw);
    setUsrEmail("");
    setUsrPsw("");
  };

  return (
    <div className={styles.login_bg}>
      <Container fixed>
        <Grid container className={styles.login_card} spacing={0}>
          <Grid item md={6} className={styles.login_card_left}>
           
          </Grid>
          <Grid
            item
            md={6}
            className={styles.login_card_right}
            sx={{ background: "#fff" }}
          >
            <Typography
              variant="h5"
              color="#097ff5"
              sx={{ fontFamily: "Rubik", fontWeight: "500", mb: "45px" }}
            >
              Login Account
            </Typography>
            <form
              onSubmit={handleForm}
              className={styles.login_form}
              style={{ width: "100%" }}
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email ID"
                className={styles.input_field}
                value={usrEmail}
                onChange={(e) => setUsrEmail(e.target.value)}
              />
              <input
                type="password"
                name="psw"
                id="psw"
                placeholder="Password"
                className={styles.input_field}
                value={usrPsw}
                onChange={(e) => setUsrPsw(e.target.value)}
              />
              <Box className={styles.login_helper}>
                <Box>
                  <input
                    type="checkbox"
                    name="stayLoggedIn"
                    style={{ opacity: "0", marginRight: "10px" }}
                  />
                  <label
                    htmlFor="stayLoggedIn"
                    className={styles.stay_logged_in}
                    onClick={toggleCheck}
                    style={isChecked ? { color: "#097ff5" } : { color: "#ccc" }}
                  >
                    Keep me signed in
                    <span
                      className={styles.check_icon}
                      style={
                        isChecked
                          ? { color: "#097ff5" }
                          : { color: "transparent" }
                      }
                    >
                      <CheckIcon />
                    </span>
                    <span
                      className={styles.close_icon}
                      style={
                        isChecked ? { color: "transparent" } : { color: "#ccc" }
                      }
                    >
                      <CloseIcon />
                    </span>
                  </label>
                </Box>
                <Box className={styles.forgot_psw}>
                  <Link href="/">
                    <a>Forgot Password?</a>
                  </Link>
                </Box>
              </Box>
              <Button
                type="submit"
                variant="contained"
                className={styles.login_button}
              >
                Login
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
