import { useState } from "react";
import { useAuthContext } from "../contexts";
import { iChildren } from "../interfaces";
import { BasePageLogin, BoxResp, Glossary, ValidateLogin } from "../components";
import {
  FormContainer,
  PasswordElement,
  TextFieldElement,
} from "react-hook-form-mui";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, recoverySchema } from "../schemas";
import { Box, Button, IconButton, Paper } from "@mui/material";
import { Info, LockReset, Login } from "@mui/icons-material";

export const ViewLogin = ({ children }: iChildren) => {
  const { isAuthenticated, login, recovery } = useAuthContext();
  const [isLogin, setIsLogin] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <>
      <BasePageLogin>
        {isLogin ? (
          <FormContainer onSuccess={login} resolver={zodResolver(loginSchema)}>
            <BoxResp isLogin>
              <IconButton onClick={handleOpen} color="secondary">
                <Info />
              </IconButton>
              <Box
                width="100%"
                display="flex"
                flexDirection="column"
                gap={1}
                component={Paper}
                p={1.5}
              >
                <TextFieldElement
                  name="login"
                  label="Usuário"
                  required
                  fullWidth
                />
                <ValidateLogin />
                <PasswordElement
                  name="password"
                  label="Senha"
                  required
                  fullWidth
                />
              </Box>
              <Button
                color="secondary"
                variant="contained"
                startIcon={<Login />}
                type="submit"
                fullWidth
              >
                Entrar
              </Button>
              <Button
                variant="contained"
                color="inherit"
                startIcon={<LockReset />}
                onClick={() => setIsLogin(false)}
                fullWidth
              >
                Recuperar Senha
              </Button>
            </BoxResp>
          </FormContainer>
        ) : (
          <FormContainer
            onSuccess={recovery}
            resolver={zodResolver(recoverySchema)}
          >
            <BoxResp isLogin>
              <IconButton onClick={handleOpen} color="secondary">
                <Info />
              </IconButton>
              <TextFieldElement
                name="login"
                label="Usuário"
                required
                fullWidth
              />
              <ValidateLogin />
              <Button
                variant="contained"
                color="secondary"
                startIcon={<LockReset />}
                type="submit"
                fullWidth
              >
                Recuperar Senha
              </Button>
              <Button
                variant="contained"
                startIcon={<Login />}
                onClick={() => setIsLogin(true)}
                fullWidth
              >
                Entrar
              </Button>
            </BoxResp>
          </FormContainer>
        )}
      </BasePageLogin>
      <Glossary open={open} onClose={handleOpen}>
        {isLogin ? (
          <>
            Preencha as informações com seu usuário e senha para obter acesso ao
            sistema.
          </>
        ) : (
          <>
            Preencha o campo com seu usuário. Em seguida, você receberá um link
            no seu email cadastrado para efetuar a troca da senha.
          </>
        )}
      </Glossary>
    </>
  );
};
