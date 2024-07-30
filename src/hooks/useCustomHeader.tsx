import useHeaderStore from "@/stores/HeaderStore";
import { EPrincipalHeaderType } from "@/types/global";

export const useCustomHeader = () => {
  const {
    headerButtonSetup,
    headerTextSetup,
    setHeaderSetup,
    setDefaultHeader,
  } = useHeaderStore();

  const updateHeader = (
    newHeaderTextSetup: { title?: string; subtitle?: string },
    newHeaderButtonSetup: {
      firstButtonType?: EPrincipalHeaderType;
      secondButtonType?: EPrincipalHeaderType;
    }
  ) => {
    setHeaderSetup({
      headerTextSetup: newHeaderTextSetup,
      headerButtonSetup: newHeaderButtonSetup,
    });
  };

  const setDefaultHeaderOnExit = () => {
    setDefaultHeader();
  };

  return {
    headerButtonSetup,
    headerTextSetup,
    updateHeader,
    setDefaultHeaderOnExit,
  };
};
