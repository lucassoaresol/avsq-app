import { FieldValues } from "react-hook-form";
import { apiUsingNow } from "./api";
import { iUser } from "../interfaces";

const create = async (
  data: FieldValues,
  queryData?: string
): Promise<iUser> => {
  const query = queryData ? queryData : "";
  const { data: response } = await apiUsingNow.post<iUser>(
    "users" + query,
    data
  );
  return response;
};

const retrieve = async (id: string, query: string): Promise<iUser> => {
  const { data: response } = await apiUsingNow.get<iUser>(
    `users/${id}${query}`
  );
  return response;
};

const profile = async (token: string): Promise<iUser> => {
  const { data: response } = await apiUsingNow.get<iUser>("users/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

interface iListReturn {
  total: number;
  result: iUser[];
}

const list = async (query: string): Promise<iListReturn> => {
  const { data: response } = await apiUsingNow.get<iListReturn>(
    `users${query}`
  );
  return response;
};

const update = async (id: string, data: FieldValues): Promise<iUser> => {
  const { data: response } = await apiUsingNow.patch<iUser>(
    `users/${id}`,
    data
  );
  return response;
};

export const apiUser = {
  create,
  profile,
  update,
  retrieve,
  list,
};
