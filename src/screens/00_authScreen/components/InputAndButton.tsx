import React from "react";
import { View, TextInput, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import ButtonRect from "@/components/buttons/ButtonRect";
import ButtonLink from "@/components/buttons/ButtonLink";
import { clearTextInputStyle } from "@/styles";

type InputAndButtonProps = {
  handleLogin: (email: string, password: string) => void;
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const InputAndButton: React.FC<InputAndButtonProps> = ({ handleLogin }) => {
  const handleRecoveryPassword = () => {
    console.log("Recovery Password");
  };

  return (
    <Formik
      initialValues={{
        email: "eugenioduartesilva@gmail.com",
        password: "111111",
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
            {touched.email && errors.email && (
              <Text className="text-red-500">{errors.email}</Text>
            )}
            <TextInput
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry
              className={clearTextInputStyle}
            />
            {touched.password && errors.password && (
              <Text className="text-red-500">{errors.password}</Text>
            )}
          </View>
          <ButtonRect
            btnText="Login"
            onPress={() => handleSubmit()}

          />
          <ButtonLink
            text="Recovery Pass"
            dark={false}
            handleLink={handleRecoveryPassword}
          />
        </View>
      )}
    </Formik>
  );
};

export default InputAndButton;
