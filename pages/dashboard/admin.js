import Dashboard from "../../components/Layout/dashboard";

import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

import Api from "./../../helper/api";

export default function Admin() {
  const [usrList, setUsrList] = useState([]);
  useEffect(() => {
    const api = new Api();
    api
      .getUserList()
      .then((response) => {
        setUsrList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Button
        variant="outlined"
        size="large"
        startIcon={<PersonAddIcon />}
        sx={{ mb: 3, borderRadius: 5 }}
        href="/dashboard/add-new-account"
      >
        Add Account
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Permission</TableCell>
              <TableCell>Blocked?</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usrList.map((usr) => (
              <TableRow key={usr.user_id}>
                <TableCell component="th" scope="row">
                  {usr.name}
                </TableCell>
                <TableCell>{usr.email}</TableCell>
                <TableCell>
                  {usr.phone.substr(0, 5) + "-" + usr.phone.substr(5)}
                </TableCell>
                <TableCell>
                  {usr.role.charAt(0).toUpperCase() + usr.role.substr(1)}
                </TableCell>
                {usr.permissions.map((item) => (
                  <TableCell key={item.permission_id}>{item.title}</TableCell>
                ))}
                <TableCell>{(usr.isBlocked && `YES`) || `NO`}</TableCell>
                <TableCell>
                  <NextLink href={`/dashboard/edit-profile?q=` + usr.user_id}>
                    <MuiLink component="button" underline="hover">
                      Edit
                    </MuiLink>
                  </NextLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

Admin.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>;
};
