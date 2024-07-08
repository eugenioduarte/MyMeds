import { ScrollView } from "react-native";
import React, { useState } from "react";
import CalendarDayCard from "./CalendarDayCard";

const CalendarDayContainer = () => {
  const [active, setActive] = useState(0);

  return (
    <ScrollView horizontal className=" w-full bg-white">
      <CalendarDayCard
        active={active}
        setActive={() => setActive(0)}
        index={0}
      />
      <CalendarDayCard
        active={active}
        setActive={() => setActive(1)}
        index={1}
      />
      <CalendarDayCard
        active={active}
        setActive={() => setActive(2)}
        index={2}
      />
      <CalendarDayCard
        active={active}
        setActive={() => setActive(3)}
        index={3}
      />
      <CalendarDayCard
        active={active}
        setActive={() => setActive(4)}
        index={4}
      />
      <CalendarDayCard
        active={active}
        setActive={() => setActive(5)}
        index={5}
      />
    </ScrollView>
  );
};

export default CalendarDayContainer;
