import {
  Box,
  Divider,
  Grid,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import {
  useAppThemeContext,
  usePaginationContext,
} from "../../../shared/contexts";
import { useCallback, useEffect, useMemo, useState } from "react";
import { iPost } from "../../../shared/interfaces";
import { apiPost } from "../../../shared/services";
import { Notes } from "@mui/icons-material";
import { PaginationBase } from "../../../shared/components";
import { CardPost } from "./CardPost";

export const Post = () => {
  const { smDown, mdDown, theme } = useAppThemeContext();
  const { query, setCount, query_page } = usePaginationContext();
  const [loading, setLoading] = useState(false);
  const [postsData, setPostsData] = useState<iPost[]>();

  const getPosts = useCallback((query: string) => {
    setLoading(true);
    apiPost
      .list(query)
      .then((res) => {
        setPostsData(res.result);
        setCount(res.total);
      })
      .finally(() => setLoading(false));
  }, []);

  const take = useMemo(() => {
    if (smDown) {
      return 1;
    } else if (mdDown) return 2;

    return 3;
  }, [smDown, mdDown]);

  useEffect(() => {
    getPosts(query() + query_page(take, true));
  }, [query, query_page, take]);

  return (
    <Grid item xs={12} md={9}>
      <Box component={Paper}>
        <Box
          height={theme.spacing(7)}
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={1}
        >
          <Typography
            component="div"
            variant="h6"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <Notes />
            Postagens
          </Typography>
          <PaginationBase />
        </Box>
        <Divider />
        <Box p={1}>
          <Grid container spacing={2}>
            {loading ? (
              <Grid item xs={12}>
                <LinearProgress variant="indeterminate" />
              </Grid>
            ) : postsData && postsData.length > 0 ? (
              postsData.map((el) => (
                <Grid key={el.id} item xs={12} sm={6} md={4}>
                  <CardPost post={el} />
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography variant="subtitle2">
                  Nenhuma postagem encotrada
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};
