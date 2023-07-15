import { Box, Container, Paper, useMediaQuery, useTheme } from "@mui/material";
import { iChildren } from "../../interfaces";

export const BasePageLogin = ({ children }: iChildren) => {
  const matches = useMediaQuery("(max-width:395px)");
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.background.default}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
          alignItems: "center",
        }}
      >
        <Box
          component={Paper}
          width="100vw"
          maxWidth={400}
          display="flex"
          justifyContent="center"
          padding={matches ? 0 : 6}
          paddingTop={6}
          paddingBottom={6}
          bgcolor={theme.palette.primary.main}
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
};
