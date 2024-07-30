import { create } from "zustand";
import { persist } from "zustand/middleware";
// import { secureStore } from "@/service/storage"; // Importação do serviço de armazenamento
import { EPrincipalHeaderType } from "@/types/global";

interface HeaderState {
  headerTextSetup: {
    title: string;
    subtitle: string;
  };
  headerButtonSetup: {
    firstButtonType: EPrincipalHeaderType;
    secondButtonType: EPrincipalHeaderType;
  };
  setHeaderButtonSetup: (headerButtonSetup: {
    firstButtonType?: EPrincipalHeaderType;
    secondButtonType?: EPrincipalHeaderType;
  }) => void;
  setHeaderTextSetup: (headerTextSetup: {
    title?: string;
    subtitle?: string;
  }) => void;
  setHeaderSetup: (headerSetup: {
    headerTextSetup?: {
      title?: string;
      subtitle?: string;
    };
    headerButtonSetup?: {
      firstButtonType?: EPrincipalHeaderType;
      secondButtonType?: EPrincipalHeaderType;
    };
  }) => void;
  setDefaultHeader: () => void; // Definindo o método setDefaultHeader
}

const useHeaderStore = create<HeaderState>()(
  persist(
    (set) => ({
      headerButtonSetup: {
        firstButtonType: EPrincipalHeaderType.DrawerMenu,
        secondButtonType: EPrincipalHeaderType.AddMedication,
      },
      setHeaderButtonSetup: (headerButtonSetup) =>
        set((state) => ({
          headerButtonSetup: {
            ...state.headerButtonSetup,
            ...headerButtonSetup,
          },
        })),
      headerTextSetup: {
        title: "",
        subtitle: "",
      },
      setHeaderTextSetup: (headerTextSetup) =>
        set((state) => ({
          headerTextSetup: {
            ...state.headerTextSetup,
            ...headerTextSetup,
          },
        })),

      setHeaderSetup: (headerSetup) =>
        set((state) => ({
          headerButtonSetup: {
            ...state.headerButtonSetup,
            ...(headerSetup.headerButtonSetup || {}),
          },
          headerTextSetup: {
            ...state.headerTextSetup,
            ...(headerSetup.headerTextSetup || {}),
          },
        })),

      setDefaultHeader: () =>
        set({
          headerButtonSetup: {
            firstButtonType: EPrincipalHeaderType.DrawerMenu,
            secondButtonType: EPrincipalHeaderType.AddMedication,
          },
          headerTextSetup: {
            title: "",
            subtitle: "",
          },
        }),
    }),
    {
      name: "user",
      // storage: secureStore,
    },
  ),
);

export default useHeaderStore;
