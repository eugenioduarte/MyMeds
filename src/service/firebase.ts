import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDxcR4jzDm7WAJJyi_Myh0nySQmFcGlXw4",
  authDomain: "solarmind-adc9b.firebaseapp.com",
  projectId: "solarmind-adc9b",
  storageBucket: "solarmind-adc9b.appspot.com",
  messagingSenderId: "773069618520",
  appId: "1:773069618520:web:deb3c8917afa2deb5c392d",
  measurementId: "G-WT7P3QJSB7",
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firebase Authentication com persistência usando AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth };
