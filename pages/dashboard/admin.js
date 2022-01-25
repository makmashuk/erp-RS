import Dashboard from "../../components/Layout/dashboard";

import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Permission</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

Admin.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>;
};
