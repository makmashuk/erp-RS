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
  const [forgotPsw, setForgotPsw] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  const toggleForgotPsw = () => {
    setForgotPsw(!forgotPsw);
    console.log(forgotPsw);
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
            <div className={styles.logo}>
              <Image
                src="/Relisource_logo_white-01-1.png"
                width={128}
                height={49}
                alt="Relisource Logo"
              />
              <sup className={styles.logo_subtitle}>ERP</sup>
            </div>
            <h1 className={styles.greetings}>Welcome</h1>
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
              {forgotPsw ? `Enter Registered Email` : `Login Account`}
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
                style={forgotPsw ? { display: "none" } : { display: "initial" }}
                value={usrPsw}
                onChange={(e) => setUsrPsw(e.target.value)}
              />
              <Box
                className={styles.login_helper}
                sx={
                  forgotPsw
                    ? { justifyContent: "center" }
                    : { justifyContent: "space-between" }
                }
              >
                <Box
                  sx={forgotPsw ? { display: "none" } : { display: "initial" }}
                >
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
                <Box className={styles.forgot_psw} onClick={toggleForgotPsw}>
                  {forgotPsw ? (
                    <Link href="/login">
                      <a>Back to login</a>
                    </Link>
                  ) : (
                    <span>Fotgot Password?</span>
                  )}
                </Box>
              </Box>
              <Button
                type="submit"
                variant="contained"
                className={styles.login_button}
              >
                {forgotPsw ? `Recover Password` : `Login`}
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
