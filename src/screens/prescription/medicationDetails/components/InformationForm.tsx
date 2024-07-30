import React, { forwardRef } from "react";
import { View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "@/components/inputs/TextInput";
import Text from "@/components/Text/Text";

type InformationFormProps = {
  handleSubmit: (values: { name: string; dose: string }) => void;
};

const InformationForm = forwardRef<any, InformationFormProps>(
  ({ handleSubmit }, ref) => {
    return (
      <Formik
        innerRef={ref}
        initialValues={{ name: "", dose: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          dose: Yup.string().required("Dose is required"),
        })}
        onSubmit={(values) => {
          handleSubmit(values); // Chama a função passada pelo componente pai
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit: formikSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={{ width: "100%" }}>
            <Text medium style={{ marginBottom: 8 }}>
              General information
            </Text>
            <TextInput
              placeholder="Name"
              text={values.name}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
            />
            {touched.name && errors.name ? (
              <Text style={{ color: "red" }}>{errors.name}</Text>
            ) : null}
            <TextInput
              placeholder="Dose"
              text={values.dose}
              onChangeText={handleChange("dose")}
              onBlur={handleBlur("dose")}
            />
            {touched.dose && errors.dose ? (
              <Text style={{ color: "red" }}>{errors.dose}</Text>
            ) : null}
          </View>
        )}
      </Formik>
    );
  }
);

export default InformationForm;
