import React from "react";
import Container from "@/components/containers/Container";
import Text from "@/components/Text/Text";
import { CalendarHorizontalScroll, MedicationsList } from "./components";

const Main = () => {
  return (
    <Container>
      <CalendarHorizontalScroll />
      <MedicationsList />
    </Container>
  );
};

export default Main;
