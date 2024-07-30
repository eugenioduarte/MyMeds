import React, { useEffect, useRef, useState } from "react";
import useHeaderStore from "@/stores/HeaderStore";
import { useCustomHeader } from "@/hooks/useCustomHeader";
import { EPrincipalHeaderType } from "@/types/global";
import {
  MedicationImagePicker,
  MedicationInformationForm,
  MedicationNotifications,
  MedicationTimelineSchedule,
  MedicationTypeContainer,
} from "./components";
import Container from "@/components/containers/Container";
import { Text } from "react-native";
const MedicationDetails = () => {
  const formRef = useRef(null);

  const [medicationTypeSelected, setMedicationTypeSelected] = useState("");
  const { updateHeader } = useCustomHeader();

  useEffect(() => {
    updateHeader(
      { title: "New medication" },
      {
        firstButtonType: EPrincipalHeaderType.backLastScreen,
      }
    );
  }, []);

  const handleSubmit = (values: { name: string; dose: string }) => {
    console.log("handleSubmit");
  };

  return (
    <Container>
      <Text>{medicationTypeSelected}</Text>
      <MedicationImagePicker />
      <MedicationTypeContainer
        medicationTypeSelected={medicationTypeSelected}
        setMedicationTypeSelected={setMedicationTypeSelected}
      />

      <MedicationInformationForm ref={formRef} handleSubmit={handleSubmit} />
      <MedicationTimelineSchedule ref={formRef} handleSubmit={handleSubmit} />
      <MedicationNotifications />
    </Container>
  );
};

export default MedicationDetails;
