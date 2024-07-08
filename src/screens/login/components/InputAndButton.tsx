import React from "react";
import { View, TextInput, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import ButtonRect from "@/components/buttons/ButtonRect";
import ButtonLink from "@/components/buttons/ButtonLink";
import { clearTextInputStyle } from "@/styles";
import { useI18n } from "@/hooks";
import { useNavigation } from "@react-navigation/native";
import { routesNames } from "@/navigation";
import ErrorInputMsg from "@/components/bundles/ErrorInputMsg";

type InputAndButtonProps = {
  handleLogin: (email: string, password: string) => void;
};

const InputAndButton: React.FC<InputAndButtonProps> = ({ handleLogin }) => {
  const navigation = useNavigation();
  const i18n = useI18n();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(i18n.t("invalid.email"))
      .required(i18n.t("required.email")),
    password: yup
      .string()
      .min(6, i18n.t("invalid.password"))
      .required(i18n.t("required.password")),
  });

  const handleRecoveryPassword = () => {
    navigation.navigate(routesNames.RecoveryPassScreen as never);
  };

  return (
    <Formik
      initialValues={{
        email: "eugenioduartesilva@gmail.com",
        password: "123456789",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => handleLogin(values.email, values.password)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View className="flex-1 w-full h-full flex-col items-center justify-around">
          <View>
            <TextInput
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              keyboardType="email-address"
              autoCapitalize="none"
              className={clearTextInputStyle}
            />

            <ErrorInputMsg
              light={true}
              error={errors.email}
              touch={touched.email}
            >
              {errors.email}
            </ErrorInputMsg>
            <TextInput
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry
              className={clearTextInputStyle}
            />

            <ErrorInputMsg
              light={true}
              error={errors.password}
              touch={touched.password}
            >
              {errors.password}
            </ErrorInputMsg>
          </View>
          <ButtonRect btnText="Login" onPress={() => handleSubmit()} />
          <ButtonLink
            text={i18n.t("forgotPassword")}
            dark={false}
            handleLink={handleRecoveryPassword}
          />
        </View>
      )}
    </Formik>
  );
};

export default InputAndButton;
