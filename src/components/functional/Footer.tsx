import { Container, Typography } from "@mui/material";

export function Footer() {
  return (
    <Container
      component="footer"
      maxWidth={false}
      disableGutters
      sx={{ backgroundColor: "background.default", py: 2 }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        textAlign="center"
        sx={{ mt: 3 }}
      >
        Copyright &copy; Marcio Scheriber {new Date().getFullYear()}.
      </Typography>
    </Container>
  );
}
