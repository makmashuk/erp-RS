import { useState, useRef } from "react";
import Dashboard from "../../../components/Layout/dashboard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import DoNotDisturbOnOutlinedIcon from "@mui/icons-material/DoNotDisturbOnOutlined";
import { Divider } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import Api from "./../../../helper/api";

const api = new Api();

export const getStaticPaths = async () => {
  const paths = await api
    .getUserList()
    .then((response) => {
      return response.data.map((user) => {
        return {
          params: { uid: user.id.toString() },
        };
      });
    })
    .catch((err) => console.log(err));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const usrId = context.params.uid;
  const res = await api
    .getUserList({ id: usrId })
    .then((response) => response.data);

  return {
    props: {
      usrData: res,
    },
  };
};

const EditProfile = ({ usrData }) => {
  const [nameEdit, setNameEdit] = useState(false);
  const [showPsw, setShowPsw] = useState(false);
  const [mobileEdit, setMobileEdit] = useState(false);
  const refName = useRef(null);
  const refPsw = useRef(null);
  const refMobile = useRef(null);

  const handleNameEdit = () => {
    if (nameEdit) {
      refName.current.querySelector("input").blur();
      refName.current.childNodes[0].classList.remove("Mui-focused");
      refName.current.childNodes[1].classList.remove("Mui-focused");
    } else {
      refName.current.querySelector("input").focus();
      refName.current.childNodes[0].classList.add("Mui-focused");
      refName.current.childNodes[1].classList.add("Mui-focused");
    }
    setNameEdit(!nameEdit);
  };

  const handleMobileEdit = () => {
    if (mobileEdit) {
      refMobile.current.querySelector("input").blur();
      refMobile.current.childNodes[0].classList.remove("Mui-focused");
      refMobile.current.childNodes[1].classList.remove("Mui-focused");
    } else {
      refMobile.current.querySelector("input").focus();
      refMobile.current.childNodes[0].classList.add("Mui-focused");
      refMobile.current.childNodes[1].classList.add("Mui-focused");
    }
    setMobileEdit(!mobileEdit);
  };

  const cancelEdit = () => {
    setNameEdit(false);
    setMobileEdit(false);
  };

  return (
    <Dashboard>
      <Typography variant="h5" mb={3}>
        Edit Profile
      </Typography>
      <Box variant="form" noValidate autoComplete="off">
        <Grid container columnSpacing={3}>
          <Grid item xs={12} lg={6}>
            <TextField
              defaultValue={usrData[0].name}
              id="fullname"
              name="fullname"
              label="Fullname"
              helperText=" "
              fullWidth
              ref={refName}
              InputProps={{
                readOnly: !nameEdit,
                endAdornment: (
                  <InputAdornment position="end">
                    {nameEdit ? (
                      <Tooltip title="Cancel edit">
                        <IconButton
                          aria-label="toggle edit mode"
                          onClick={handleNameEdit}
                          edge="end"
                        >
                          <DoNotDisturbOnOutlinedIcon color="warning" />
                        </IconButton>
                      </Tooltip>
                    ) : (
                      <Tooltip title="Edit">
                        <IconButton
                          aria-label="toggle edit mode"
                          onClick={handleNameEdit}
                          edge="end"
                        >
                          <ModeEditIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              defaultValue={
                usrData[0].phone.substr(0, 5) + "-" + usrData[0].phone.substr(5)
              }
              id="mobile"
              name="mobile"
              label="Mobile Number"
              helperText=" "
              fullWidth
              ref={refMobile}
              InputProps={{
                readOnly: !mobileEdit,
                endAdornment: (
                  <InputAdornment position="end">
                    {mobileEdit ? (
                      <Tooltip title="Cancel edit">
                        <IconButton
                          aria-label="toggle edit mode"
                          onClick={handleMobileEdit}
                          edge="end"
                        >
                          <DoNotDisturbOnOutlinedIcon color="warning" />
                        </IconButton>
                      </Tooltip>
                    ) : (
                      <Tooltip title="Edit">
                        <IconButton
                          aria-label="toggle edit mode"
                          onClick={handleMobileEdit}
                          edge="end"
                        >
                          <ModeEditIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              type={showPsw ? "text" : "password"}
              label="New Password"
              helperText=" "
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPsw(!showPsw)}
                      edge="end"
                    >
                      {showPsw ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} lg={6} mb={2}>
            <TextField
              type={showPsw ? "text" : "password"}
              id="password"
              name="password"
              label="Retype New Password"
              helperText=" "
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPsw(!showPsw)}
                      edge="end"
                    >
                      {showPsw ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={2} direction="column" alignItems="center">
          <Stack
            direction={{ xs: "column", lg: "row" }}
            alignItems="center"
            mt={4}
          >
            <InfoOutlinedIcon color="gray" fontSize="small" />
            <Typography
              variant="paragraph"
              component="paragraph"
              textAlign="center"
            >
              To save changes, you have to confirm your identity by entring your
              old password:
            </Typography>
          </Stack>
          <Grid item xs={12} lg={8}>
            <TextField
              type={showPsw ? "text" : "password"}
              id="old-password"
              name="old-password"
              label="Old Password"
              helperText=" "
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPsw(!showPsw)}
                      edge="end"
                    >
                      {showPsw ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Divider />
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={2}
          mt={4}
          justifyContent="center"
        >
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ borderRadius: 5 }}
            startIcon={<AppRegistrationIcon />}
          >
            Save Changes
          </Button>
          <Button
            color="warning"
            variant="outlined"
            size="large"
            sx={{ borderRadius: 5 }}
            startIcon={<HighlightOffOutlinedIcon />}
            onClick={cancelEdit}
          >
            Cancel
          </Button>
        </Stack>
      </Box>
    </Dashboard>
  );
};

export default EditProfile;
