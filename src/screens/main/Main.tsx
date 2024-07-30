import React, { useEffect } from "react";
import Container from "@/components/containers/Container";
import { CalendarHorizontalScroll, MedicationsList } from "./components";
import { DateProvider } from "@/hooks";
import { useCustomHeader } from "@/hooks/useCustomHeader"; // Importe useCustomHeader
import { EPrincipalHeaderType } from "@/types/global";

const Main = () => {
  // const { updateHeader } = useCustomHeader(); // Use o hook useCustomHeader para obter o método updateHeader

  useEffect(() => {
    // updateHeader(
    //   { title: "New Title", subtitle: "New Subtitle" },
    //   { firstButtonType: EPrincipalHeaderType.AddMedication }
    // );
  }, []);

  return (
    <Container>
      <DateProvider>
        <CalendarHorizontalScroll />
        <MedicationsList />
      </DateProvider>
    </Container>
  );
};

export default Main;
