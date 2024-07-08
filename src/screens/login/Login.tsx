import React from "react";
import useAuthStore from "@/stores/AuthStore";
import Container from "@/components/containers/Container";
import LogoAndTitleAnimation from "./components/LogoAndTitleAnimation";
import InputAndButton from "./components/InputAndButton";
import { useNotification } from "@/providers/NotificationProvider";
import { useMutation } from "react-query";
import { login } from "@/service/api";
import { FirebaseError } from "firebase/app";
import { useI18n } from "@/hooks";

const LoginScreen = () => {
  const { error } = useNotification();
  const I18n = useI18n();
  const { mutate: loginMutate } = useMutation(login, {
    onSuccess: () => {
      useAuthStore.getState().setAuthenticated(true);
    },
    onError: (err) => {
      if (err instanceof FirebaseError) {
        error(err.message);
      } else {
        error(I18n.t("request.error"));
      }
    },
  });

  return (
    <Container className="flex-1 items-center justify-center" dark>
      <LogoAndTitleAnimation />
      <InputAndButton
        handleLogin={(email, password) => loginMutate({ email, password })}
      />
    </Container>
  );
};

export default LoginScreen;
