import { Container, Grid, Button, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import styles from "../styles/Login.module.css";
import Image from "next/image";

import { useState } from "react";

const ForgotPassword = () => {
  const [usrEmail, setUsrEmail] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    console.log(usrEmail);
    setUsrEmail("");
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
                  Recover Password
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
                  Enter Registered Email
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
                    className={styles.inputField}
                    value={usrEmail}
                    onChange={(e) => setUsrEmail(e.target.value)}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    className={styles.loginButton}
                    onClick={handleForm}
                  >
                    Recover Password
                  </Button>
                  <div className={styles.loginHelper}>
                    <Grid
                      container
                      alignItems="center"
                      sx={{ justifyContent: "center" }}
                    >
                      <Grid item marginTop="20px">
                        <Link
                          href="/login"
                          underline="none"
                          className={styles.forgotPsw}
                        >
                          Back to login
                        </Link>
                      </Grid>
                    </Grid>
                  </div>
                </form>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default ForgotPassword;
