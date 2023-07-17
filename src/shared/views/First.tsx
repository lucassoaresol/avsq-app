import { useState } from "react";
import {
  FormContainer,
  PasswordElement,
  TextFieldElement,
} from "react-hook-form-mui";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, IconButton } from "@mui/material";
import { Info } from "@mui/icons-material";
import { iChildren, iUserFirstRequest } from "../interfaces";
import { useAuthContext, useUserContext } from "../contexts";
import { BasePage, BoxResp, Glossary, InputFile } from "../components";
import { userFirstSchema } from "../schemas";

export const ViewFirst = ({ children }: iChildren) => {
  const { userData } = useAuthContext();
  const { first } = useUserContext();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  if (userData) {
    if (!userData.is_first_access) {
      return <>{children}</>;
    }
  }

  return (
    <>
      {userData ? (
        <>
          <BasePage padding={5}>
            <FormContainer
              onSuccess={(data: iUserFirstRequest) => first(userData.id, data)}
              resolver={zodResolver(userFirstSchema)}
            >
              <BoxResp>
                <IconButton onClick={handleOpen} color="secondary">
                  <Info />
                </IconButton>
                <InputFile />
                <TextFieldElement
                  name="name"
                  label="Nome completo"
                  required
                  fullWidth
                />
                <TextFieldElement
                  name="email"
                  label="Email"
                  type="email"
                  required
                  fullWidth
                />
                <PasswordElement
                  name="password"
                  label="Senha"
                  required
                  fullWidth
                />
                <PasswordElement
                  name="repeat_password"
                  label="Confirmar Senha"
                  required
                  fullWidth
                />
                <Button variant="contained" type="submit" fullWidth>
                  Enviar
                </Button>
              </BoxResp>
            </FormContainer>
          </BasePage>
          <Glossary open={open} onClose={handleOpen}>
            Preencha as informações com seus dados para obter acesso ao sistema.
          </Glossary>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
