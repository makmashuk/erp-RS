import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/Login.module.css";

const LoginForm = (props) => {
  const {
    usrEmail,
    setUsrEmail,
    usrPsw,
    setUsrPsw,
    isChecked,
    setIsChecked,
    forgotPsw,
    toggleForgotPsw,
    handleForm,
  } = props;

  return (
    <form className={styles.loginForm} style={{ width: "100%" }} noValidate>
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
        style={forgotPsw ? { display: "none" } : { display: "initial" }}
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
            sx={forgotPsw ? { display: "none" } : { display: "initial" }}
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
            className={styles.forgotPass}
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
  );
};

export default LoginForm;
