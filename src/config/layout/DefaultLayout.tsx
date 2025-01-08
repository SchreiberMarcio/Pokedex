import { Stack } from "@mui/material";
import { Footer } from "../../components/functional/Footer";
import Navbar from "../../components/functional/Navbar";

export function DefaultLayout() {
  return (
    <Stack>
      <Navbar />

      <Footer />
    </Stack>
  );
}
