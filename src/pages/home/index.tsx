import { Box, Container, Grid } from "@mui/material";
import { useAppThemeContext, useAuthContext } from "../../shared/contexts";
import { Header } from "../../shared/components";
import { User } from "./components";

interface iHomePageProps {
  isHome?: boolean;
}

export const HomePage = ({ isHome }: iHomePageProps) => {
  const { theme, mdDown } = useAppThemeContext();
  const { userData } = useAuthContext();

  return (
    <Box display="flex" flexDirection="column">
      <Header isHome={isHome} />
      <Box mt={theme.spacing(7)}>
        <Container>
          <Grid
            container
            direction={mdDown ? "column" : "row"}
            spacing={mdDown ? 2 : 5}
          >
            <User user={userData} />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
