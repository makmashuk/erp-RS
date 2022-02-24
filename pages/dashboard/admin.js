import Dashboard from "../../components/Layout/dashboard";

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

import Api from "./../../helper/api";

export const getStaticProps = async () => {
  const api = new Api();
  const data = await api
    .getUserList()
    .then((response) => response.data)
    .catch((err) => console.log(err));

  return {
    props: {
      users: data,
    },
  };
};

export default function Admin({ users }) {
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
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {user.phone.substr(0, 5) + "-" + user.phone.substr(5)}
                </TableCell>
                <TableCell>
                  {user.role.charAt(0).toUpperCase() + user.role.substr(1)}
                </TableCell>
                {user.permissions.map((item) => (
                  <TableCell key={item.permission_id}>{item.title}</TableCell>
                ))}
                <TableCell>{(user.isBlocked && `YES`) || `NO`}</TableCell>
                <TableCell>
                  <NextLink href={`/dashboard/edit-profile/${user.id}`}>
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
