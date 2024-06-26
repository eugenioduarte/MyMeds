import React from "react";
import useAuthStore from "@/stores/AuthStore";
import Container from "@/components/containers/Container";
import LogoAndTitleAnimation from "./components/LogoAndTitleAnimation";
import InputAndButton from "./components/InputAndButton";
import { useNotification } from "@/providers/NotificationProvider";
import { FirebaseError } from "firebase/app";

const LoginScreen = () => {
  const login = useAuthStore((state) => state.login);
  const { error } = useNotification();

  const handleLoginFirebase = async (email: string, password: string) => {
    try {
      await login(email, password);
    } catch (err) {
      if (err instanceof FirebaseError) {
        error(err.code);
      }
    }
  };

  return (
    <Container className="flex-1 items-center justify-center" dark>
      <LogoAndTitleAnimation />
      <InputAndButton handleLogin={handleLoginFirebase} />
    </Container>
  );
};

export default LoginScreen;
