import Dashboard from "../../components/Layout/dashboard";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const AddNewAccount = () => {
  return (
    <Dashboard>
      <form noValidate autoComplete="off">
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Full Name"
          className="inputField"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="inputField"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="inputField"
        />
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Mobile/Phone Number"
          className="inputField"
        />
        <Box>
          <FormControl>
            <FormLabel>Assign Roles:</FormLabel>

            <RadioGroup row aria-label="role" name="role" sx={{ ml: "10px" }}>
              <FormControlLabel
                value="role1"
                control={<Radio />}
                label="Role 1"
                className="radio"
              />
              <FormControlLabel
                value="role2"
                control={<Radio />}
                label="Role 2"
                className="radio"
              />
              <FormControlLabel
                value="role3"
                control={<Radio />}
                label="Role 3"
                className="radio"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </form>
      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ mt: 2 }}
        startIcon={<AppRegistrationIcon />}
      >
        Add
      </Button>
    </Dashboard>
  );
};

export default AddNewAccount;
