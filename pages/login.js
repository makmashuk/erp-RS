import {
  Container,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";
import styles from "../styles/Login.module.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import LoginForm from "../components/LoginForm";

import { useState } from "react";

export default function Login() {
  const [usrEmail, setUsrEmail] = useState("");
  const [usrPsw, setUsrPsw] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [forgotPsw, setForgotPsw] = useState(false);

  const toggleForgotPsw = (e) => {
    e.preventDefault();
    setForgotPsw(!forgotPsw);
    setUsrEmail("");
    setUsrPsw("");
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(usrEmail + "\n" + usrPsw);
    setUsrEmail("");
    setUsrPsw("");
  };

  return (
    <div className={styles.loginBg}>
      <Container fixed>
        <div className={styles.loginCard}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
              <div className={styles.loginCardLeft}>
                <div className={styles.logo}>
                  <Image
                    src="/Relisource_logo_white-01-1.png"
                    width={128}
                    height={49}
                    alt="Relisource Logo"
                  />
                  <Typography component="sup" className={styles.logoSubtitle}>
                    ERP
                  </Typography>
                </div>
                <Typography
                  variant="h4"
                  component="h1"
                  fontWeight="400"
                  color="#f7f7f7"
                >
                  Hi, Welcome!
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6} bgcolor="#fff">
              <div className={styles.loginCardRight}>
                <Typography
                  variant="h5"
                  color="#097ff5"
                  fontFamily="Rubik"
                  fontWeight="500"
                  mb="45px"
                >
                  {forgotPsw ? `Enter Registered Email` : `Login Account`}
                </Typography>

                {/* Split the form part */}

                {/* <LoginForm
                  values={{
                    usrEmail,
                    setUsrEmail,
                    usrPsw,
                    setUsrPsw,
                    isChecked,
                    setIsChecked,
                    forgotPsw,
                    toggleForgotPsw,
                    handleForm,
                  }}
                /> */}

                <form
                  autoComplete="off"
                  className={styles.loginForm}
                  style={{ width: "100%" }}
                  noValidate
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email ID"
                    className={styles.inputField}
                    value={usrEmail}
                    onChange={(e) => setUsrEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    name="psw"
                    id="psw"
                    placeholder="Password"
                    className={styles.inputField}
                    style={
                      forgotPsw ? { display: "none" } : { display: "initial" }
                    }
                    value={usrPsw}
                    onChange={(e) => setUsrPsw(e.target.value)}
                  />
                  <div className={styles.loginHelper}>
                    <Grid
                      container
                      alignItems="center"
                      sx={
                        forgotPsw
                          ? { justifyContent: "center" }
                          : { justifyContent: "space-between" }
                      }
                    >
                      <Grid
                        item
                        xs={12}
                        md={6}
                        textAlign="left"
                        sx={
                          forgotPsw
                            ? { display: "none" }
                            : { display: "initial" }
                        }
                        fontFamily="Rubik"
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="small"
                              icon={<CloseIcon />}
                              checkedIcon={<CheckIcon />}
                              sx={{
                                color: "#ccc",
                              }}
                            />
                          }
                          label={
                            <Typography
                              fontSize="0.9rem"
                              fontFamily="Rubik"
                              color={isChecked ? `blue` : `#ccc`}
                              onClick={() => setIsChecked(!isChecked)}
                            >
                              Keep me signed in
                            </Typography>
                          }
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        className={styles.forgotPsw}
                        textAlign={forgotPsw ? `center` : `right`}
                        onClick={toggleForgotPsw}
                      >
                        {forgotPsw ? (
                          <Link href="/login" underline="none">
                            Back to login
                          </Link>
                        ) : (
                          <Link href="/login" underline="none">
                            Forgot Password?
                          </Link>
                        )}
                      </Grid>
                    </Grid>
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    className={styles.loginButton}
                    onClick={handleForm}
                  >
                    {forgotPsw ? `Recover Password` : `Login`}
                  </Button>
                </form>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
