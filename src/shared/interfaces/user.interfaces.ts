import { z } from "zod";
import {
  RoleSchema,
  createAdmSchema,
  userFirstSchema,
  userPasswordSchema,
  userUpdateSchema,
} from "../schemas";

export type iRole = z.infer<typeof RoleSchema>;

export interface iDialogUserProps {
  user: iUser;
}

export interface iUser {
  id: string;
  login: string;
  name: string;
  cpf: string;
  email: string;
  role: iRole;
  is_active: boolean;
  is_first_access: boolean;
  created_at: Date;
  frequencies: number;
}

export interface iUserDash {
  countSchool: number;
  countClass: number;
  countStudent: number;
  countFrequency: number;
  countServer: number;
  countNotClass: number;
}

export type iUserAdmRequest = z.infer<typeof createAdmSchema>;

export type iUserFirstRequest = z.infer<typeof userFirstSchema>;

export type iUserUpdateRequest = z.infer<typeof userUpdateSchema>;

export type iUserPasswordRequest = z.infer<typeof userPasswordSchema>;
