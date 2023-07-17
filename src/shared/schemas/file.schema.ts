import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024;

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const imageSchema = z
  .instanceof(FileList)
  .refine((files) => files?.length === 1, "Foto de perfil obrigatório")
  .refine(
    (files) => files?.[0]?.size <= MAX_FILE_SIZE,
    "A imagem precisa ter no máximo 2Mb"
  )
  .refine(
    (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
    "Somente esses tipos de imagens são permitidos .jpg, .jpeg, .png e .webp"
  )
  .transform((list) => list.item(0));
