import { Container, Grid, Button, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import styles from "../styles/Login.module.css";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [usrEmail, setUsrEmail] = useState("");
  const [usrPsw, setUsrPsw] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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
                  fontWeight="500"
                  mb="45px"
                >
                  Login Account
                </Typography>

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
                    className="inputField"
                    value={usrEmail}
                    onChange={(e) => setUsrEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    name="psw"
                    id="psw"
                    placeholder="Password"
                    className="inputField"
                    value={usrPsw}
                    onChange={(e) => setUsrPsw(e.target.value)}
                  />
                  <div className={styles.loginHelper}>
                    <Grid container justifyContent="center">
                      <Grid item>
                        <Typography
                          fontSize="0.9rem"
                          color={isChecked ? `#1976d2` : `#ccc`}
                          display="flex"
                          alignItems="start"
                          sx={{ cursor: "pointer" }}
                          onClick={() => setIsChecked(!isChecked)}
                        >
                          {isChecked ? (
                            <CheckBoxIcon fontSize="small" sx={{ mr: "5px" }} />
                          ) : (
                            <CheckBoxOutlineBlankOutlinedIcon
                              fontSize="small"
                              sx={{ mr: "5px" }}
                            />
                          )}
                          Keep me signed in
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    className={styles.loginButton}
                    onClick={handleForm}
                  >
                    Login
                  </Button>
                  <Grid item marginTop="20px">
                    <Link
                      href="/forgot-password"
                      underline="hover"
                      fontSize="0.9rem"
                      className={styles.forgotPsw}
                    >
                      Forgot Password?
                    </Link>
                  </Grid>
                </form>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
