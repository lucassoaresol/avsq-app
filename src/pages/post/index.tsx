import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppThemeContext } from "../../shared/contexts";
import { Box, Container } from "@mui/material";
import { Editor, Header } from "../../shared/components";
import { apiPost } from "../../shared/services";
import { iPost } from "../../shared/interfaces";

export const RetrievePostPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { theme, setLoading } = useAppThemeContext();
  const [postData, setPostData] = useState<iPost>();

  useEffect(() => {
    if (id) {
      setLoading(true);
      apiPost
        .retrieve(id)
        .then((res) => setPostData(res))
        .catch(() => navigate("/"))
        .finally(() => setLoading(false));
    }
  }, [id]);

  return (
    <Box display="flex" flexDirection="column">
      <Header isHome />
      <Box mt={theme.spacing(7)}>
        <Container>{postData && <Editor content={postData.content} />}</Container>
      </Box>
    </Box>
  );
};
