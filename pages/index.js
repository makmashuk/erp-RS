import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import { Container, Stack } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <div className={styles.container}>
        <p>ERP INTERNAL HOME</p>
      </div>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary" href="/login" size="large">
          LOG IN
        </Button>
      </Stack>
    </Container>
  );
}
