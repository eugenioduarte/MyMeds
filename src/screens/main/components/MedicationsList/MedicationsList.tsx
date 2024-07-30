import React, { useEffect, useState } from "react";
import { View } from "react-native";
import MedicationCard from "./components/MedicationCard";
import { useDateContext } from "@/hooks";
import MedicationHeaderList from "./components/MedicationHeaderList";
import { MedicationType } from "@/types/medication";
import { format } from "date-fns";
import Text from "@/components/Text/Text";

type medicationSectionType = {
  hour: number;
  period: string;
  medications: MedicationType[];
};

const MedicationsList = () => {
  const { medications } = useDateContext();
  const [hourNow] = useState(new Date().getHours());
  const [medicationSection, setMedicationSection] = useState<
    medicationSectionType[]
  >([]);

  useEffect(() => {
    if (medications.length > 0) {
      sortMedicationsByHour();
    }
  }, [medications]);

  function sortMedicationsByHour() {
    const sections: any[] = [];

    medications.forEach((medication) => {
      const hour = medication.nextMedicationDate.getHours();
      let sectionIndex = sections.findIndex((section) => section.hour === hour);

      if (sectionIndex === -1) {
        sections.push({
          hour: hour,
          period: format(medication.nextMedicationDate, "a"),
          medications: [medication],
        });
      } else {
        sections[sectionIndex].medications.push(medication);
      }
    });

    setMedicationSection(sections);
  }

  return (
    <View className="bg-white w-full h-full flex items-start justify-start p-2">
      <MedicationHeaderList />
      {medicationSection.map((section, index) => (
        <View key={index} className="flex-row px-1">
          <View
            className={`items-end justify-start border-r-2 ${hourNow == section.hour ? "border-blue_299999999" : "border-grey_2"} pt-4 px-1`}
          >
            <Text className="text-xs font-medium text-black">
              {section.hour}:00
            </Text>
            <Text className="text-grey_2 text-xs -mt-1">{section.period}</Text>
          </View>
          <View className="flex-1">
            {section.medications.map((medication: MedicationType) => (
              <MedicationCard key={medication.id} medication={medication} />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default MedicationsList;
