export interface iPost {
  id: string;
  published: Date;
  updated: Date;
  title: string;
  content: string;
  text: string;
  status: string;
  is_free: boolean;
  blog_id: string;
  user: {
    id: string;
    name: string;
  };
  cover: {
    id: string;
    url: string;
  };
}
