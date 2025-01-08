import { Container, Typography } from "@mui/material";

export function Footer() {
  return (
    <Container component="footer" maxWidth={false} disableGutters>
      <Typography
        variant="body2"
        color={"GrayText"}
        textAlign="center"
        marginTop={5}
        fontSize={20}
      >
        Copyright &copy;&nbsp; &nbsp;Marcio Scheriber {new Date().getFullYear()}
        .
      </Typography>
    </Container>
  );
}
