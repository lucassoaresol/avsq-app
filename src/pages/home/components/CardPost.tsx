import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { iPost } from "../../../shared/interfaces";

interface iCardPostProps {
  post: iPost;
}

export const CardPost = ({ post }: iCardPostProps) => {
  return (
    <Card>
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "start",
        }}
        href={`/${post.id}`}
      >
        <CardMedia component="img" image={post.cover.url} alt={post.title} />
        <CardContent sx={{ width: "100%" }}>
          <div className="w-full prose prose-sm">
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
