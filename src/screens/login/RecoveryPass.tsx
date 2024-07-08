import { TextInput, View } from "react-native";
import React from "react";
import Container from "@/components/containers/Container";
import Text from "@/components/Text/Text";
import { useI18n } from "@/hooks";
import { clearTextInputStyle } from "@/styles";
import ButtonRect from "@/components/buttons/ButtonRect";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNotification } from "@/providers/NotificationProvider";
import { FirebaseError } from "firebase/app";
import { Formik } from "formik";
import * as yup from "yup";
import LogoAndTitleAnimation from "./components/LogoAndTitleAnimation";
import { auth } from "@/service/firebase";
import ButtonIcon from "@/components/buttons/ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import ErrorInputMsg from "@/components/bundles/ErrorInputMsg";

const RecoveryPass = () => {
  const { error, notify } = useNotification();
  const I18n = useI18n();
  const navigation = useNavigation();
  const handleSendPasswordResetEmail = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      notify(I18n.t("recoveryScreen.successNotification"));
    } catch (err) {
      if (err instanceof FirebaseError) {
        error(err.message);
      } else {
        error(I18n.t("request.error"));
      }
    }
  };

  const goBackLogin = () => {
    navigation.goBack();
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(I18n.t("invalid.email"))
      .required(I18n.t("required.email")),
  });

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSendPasswordResetEmail(values.email)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <Container dark>
          <ButtonIcon onPress={goBackLogin} />
          <LogoAndTitleAnimation showTitle={false} />
          <View className="flex-1 flex items-center justify-start">
            <Text light variant="title">
              {I18n.t("recoveryScreen.title")}
            </Text>
            <Text light variant="subtitle" className="text-center my-4 px-4">
              {I18n.t("recoveryScreen.description")}
            </Text>
            <TextInput
              placeholder={I18n.t("email")}
              keyboardType="email-address"
              autoCapitalize="none"
              className={clearTextInputStyle}
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />

            <ErrorInputMsg
              light={true}
              error={errors.email}
              touch={touched.email}
            >
              {errors.email}
            </ErrorInputMsg>

            <ButtonRect
              btnText="Recovery"
              onPress={() => handleSubmit()}
              className="mt-4"
            />
          </View>
        </Container>
      )}
    </Formik>
  );
};

export default RecoveryPass;
