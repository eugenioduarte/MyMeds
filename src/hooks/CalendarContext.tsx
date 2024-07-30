import {
  EMedicationShapeType,
  EWeekDaysType,
  MedicationType,
} from "@/types/medication";
import { subHours } from "date-fns";
import React, { createContext, useContext, useState, useEffect } from "react";

// Definir o tipo CalendarType
export type CalendarType = {
  locale: string;
  t: (key: string) => string;
};

// Criar o contexto para configurações de calendário
export const CalendarContext = createContext<CalendarType | undefined>(
  undefined
);

// Criar o contexto para estado de data e funções relacionadas
export const DateContext = createContext<
  | {
      selectedDate: Date;
      setSelectedDate: (date: Date) => void;
      medications: any[];
      getListMedicationByDate: (date: Date) => void;
    }
  | undefined
>(undefined);

// Provedor de Contexto de Estado de Data e Medicamentos
export const DateProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [medications, setMedications] = useState<any[]>([]);

  // Simulação de recuperação de dados
  const getListMedicationByDate = (date: Date) => {
    // Simular chamada de API ou lógica para recuperar dados
    const fakeMedications: MedicationType[] = [
      {
        id: "1",
        createdOn: new Date(),
        name: "Paracetamol",
        doctorId: "1",
        type: EMedicationShapeType.Tablet,
        weekDays: [
          EWeekDaysType.Monday,
          EWeekDaysType.Wednesday,
          EWeekDaysType.Friday,
        ],
        hourInterval: 8,
        dataInterval: {
          beginDate: new Date(),
          endDate: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000),
        },
        nextMedicationDate: new Date(),
      },
      {
        id: "2",
        createdOn: new Date(),
        name: "Amoxicilina",
        doctorId: "1",
        type: EMedicationShapeType.Capsule,
        weekDays: [EWeekDaysType.Tuesday, EWeekDaysType.Thursday],
        hourInterval: 12,
        dataInterval: {
          beginDate: new Date(),
          endDate: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000),
        },
        nextMedicationDate: new Date(),
      },
      {
        id: "3",
        createdOn: new Date(),
        name: "Ibuprofeno",
        doctorId: "2",
        type: EMedicationShapeType.Tablet,
        weekDays: [EWeekDaysType.WeekDays],
        hourInterval: 6,
        dataInterval: {
          beginDate: new Date(),
          endDate: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000),
        },
        nextMedicationDate: new Date(),
      },
      {
        id: "4",
        createdOn: subHours(new Date(), 4),
        name: "Omeprazol",
        doctorId: "2",
        type: EMedicationShapeType.Capsule,
        weekDays: [EWeekDaysType.Weekends],
        hourInterval: 24,
        dataInterval: {
          beginDate: subHours(new Date(), 4),
          endDate: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000),
        },
        nextMedicationDate: subHours(new Date(), 4),
      },
    ];
    setMedications(fakeMedications);
  };

  // Atualizar lista de medicamentos ao alterar a data selecionada
  useEffect(() => {
    getListMedicationByDate(selectedDate);
  }, [selectedDate]);

  return (
    <DateContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        medications,
        getListMedicationByDate,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

// Hook para usar contexto de configurações de calendário
export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (context === undefined) {
    throw new Error("useCalendarContext must be used within an I18nProvider");
  }
  return context;
};

// Hook para usar contexto de estado de data e medicamentos
export const useDateContext = () => {
  const context = useContext(DateContext);
  if (context === undefined) {
    throw new Error("useDateContext must be used within a DateProvider");
  }
  return context;
};
