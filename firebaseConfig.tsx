// firebaseConfig.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth, Auth } from "firebase/auth/react-native";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCtkhVphP2dhmFFTdrX870590kHoHmVORA",
  authDomain: "app-auth-c1095.firebaseapp.com",
  projectId: "app-auth-c1095",
  storageBucket: "app-auth-c1095.appspot.com",
  messagingSenderId: "1033979280925",
  appId: "1:1033979280925:web:30d5d9b8783c8cd7b550f4",
  measurementId: "G-MQ1MNHMTMS",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth: Auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth, app };