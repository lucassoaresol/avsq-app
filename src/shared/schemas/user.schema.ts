import { z } from "zod";
import { imageSchema } from "./file.schema";

export const RoleSchema = z.enum(["COMMON", "EDITOR", "ADMIN"]);

export const createAdmSchema = z
  .object({
    name: z
      .string({ required_error: "Nome obrigatório" })
      .nonempty("Nome obrigatório"),
    login: z.string(),
    cpf: z
      .string({ required_error: "CPF obrigatório" })
      .min(14, "Precisa ter 14 digitos"),
    password: z.string().optional(),
    role: RoleSchema.default("ADMIN"),
  })
  .refine((fields) => (fields.password = fields.login.substring(0, 6)));

export const activeUserSchema = z.object({
  is_active: z.boolean().default(true),
  role: RoleSchema,
});

export const userFirstSchema = z
  .object({
    avatar: imageSchema,
    name: z
      .string({ required_error: "Nome completo obrigatório" })
      .nonempty("Nome completo obrigatório"),
    email: z
      .string({ required_error: "Email obrigatório" })
      .email("Email inválido"),
    password: z
      .string({ required_error: "Senha obrigatória" })
      .nonempty("Senha obrigatória"),
    repeat_password: z
      .string({ required_error: "Confirmar senha obrigatória" })
      .nonempty("Confirmar senha obrigatória"),
    is_first_access: z.boolean().default(false),
  })
  .refine((fields) => fields.password === fields.repeat_password, {
    path: ["repeat_password"],
    message: "As senhas precisam ser iguais",
  });

export const userUpdateSchema = z.object({
  name: z
    .string({ required_error: "Nome completo obrigatório" })
    .nonempty("Nome completo obrigatório"),
  email: z
    .string({ required_error: "Email obrigatório" })
    .email("Email inválido"),
});

export const userPasswordSchema = z
  .object({
    old_password: z
      .string({ required_error: "Senha Atual obrigatória" })
      .nonempty("Senha Atual obrigatória"),
    password: z
      .string({ required_error: "Senha obrigatória" })
      .nonempty("Senha obrigatória"),
    repeat_password: z
      .string({ required_error: "Confirmar senha obrigatória" })
      .nonempty("Confirmar senha obrigatória"),
  })
  .refine((fields) => fields.password === fields.repeat_password, {
    path: ["repeat_password"],
    message: "As senhas precisam ser iguais",
  });

export const passwordRecoverySchema = z
  .object({
    password: z
      .string({ required_error: "Senha obrigatória" })
      .nonempty("Senha obrigatória"),
    repeat_password: z
      .string({ required_error: "Confirmar senha obrigatória" })
      .nonempty("Confirmar senha obrigatória"),
  })
  .refine((fields) => fields.password === fields.repeat_password, {
    path: ["repeat_password"],
    message: "As senhas precisam ser iguais",
  });
