export enum EMedicationShapeType {
  Tablet = "Tablet",
  Capsule = "Capsule",
  Pill = "Pill",
  Drop = "Drop",
  Injection = "Injection",
  Cream = "Cream",
  Ointment = "Ointment",
  Syrup = "Syrup",
  Lozenge = "Lozenge",
  Gel = "Gel",
  Patch = "Patch",
  Solution = "Solution",
  Aerosol = "Aerosol",
  Suppository = "Suppository",
  Powder = "Powder",
}

export enum EWeekDaysType {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
  WeekDays = "WeekDays",
  Weekends = "Weekends",
}

export type DoctorType = {
  id: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  address: string;
  specialty: string;
};

type DataIntervalType = {
  beginDate: Date;
  endDate?: Date;
};

export type MedicationType = {
  id: string;
  createdOn: Date;
  name: string;
  doctorId: DoctorType["id"];
  type: EMedicationShapeType;
  weekDays: EWeekDaysType[];
  hourInterval: number;
  dataInterval?: DataIntervalType;
  nextMedicationDate: Date;
};
