import { apiUsingNow } from "./api";
import { iPost } from "../interfaces";

interface iListReturn {
  total: number;
  result: iPost[];
}

const list = async (query: string): Promise<iListReturn> => {
  const { data: response } = await apiUsingNow.get<iListReturn>(
    `posts${query}`
  );
  return response;
};

const retrieve = async (id: string): Promise<iPost> => {
  const { data: response } = await apiUsingNow.get<iPost>(`posts/${id}`);
  return response;
};

export const apiPost = {
  list,
  retrieve,
};
