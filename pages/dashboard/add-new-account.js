import { useState } from "react";
import Dashboard from "../../components/Layout/dashboard";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";

const AddNewAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Dashboard>
      <Typography variant="h5" mb={3}>
        Add New Account
      </Typography>
      <Box variant="form" noValidate autoComplete="off">
        <Grid container columnSpacing={3}>
          <Grid item xs={12} lg={6}>
            <TextField
              id="fullname"
              name="fullname"
              label="Full Name"
              required
              helperText=" "
              fullWidth
              sx={{ mb: 1 }}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              inputProps={{ type: "email" }}
              id="email"
              name="email"
              label="Email"
              required
              helperText=" "
              fullWidth
              sx={{ mb: 1 }}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              inputProps={{ type: showPassword ? "text" : "password" }}
              id="password"
              name="password"
              label="Password"
              required
              helperText=" "
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              inputProps={{ type: showPassword ? "text" : "password" }}
              id="password"
              name="password"
              label="Retype Password"
              required
              helperText=" "
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              inputProps={{ type: "tel" }}
              id="mobile"
              name="mobile"
              label="Mobile Number"
              placeholder="01XXX-XXXXXX"
              required
              helperText=" "
              fullWidth
              sx={{ mb: 1 }}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <FormControl fullWidth>
              <FormLabel>Assign Roles:</FormLabel>
              <RadioGroup row aria-label="role" name="role" sx={{ ml: "10px" }}>
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="User"
                  className="radio"
                />
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Admin"
                  className="radio"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  className="radio"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            mt: 2,
            borderRadius: 5,
          }}
          startIcon={<AppRegistrationIcon />}
        >
          Create Account
        </Button>
      </Box>
    </Dashboard>
  );
};

export default AddNewAccount;
