import * as SecureStore from "expo-secure-store";

export const secureStore = {
  getItem: async (key: string): Promise<any> => {
    const value = await SecureStore.getItemAsync(key);
    return value ? JSON.parse(value) : null;
  },
  setItem: async (key: string, value: any): Promise<void> => {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
  },
  removeItem: async (key: string): Promise<void> => {
    await SecureStore.deleteItemAsync(key);
  },
};
