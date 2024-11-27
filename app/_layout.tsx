import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {

    const [fontsLoaded] = useFonts({
      "Poppins": require("@/assets/fonts/Poppins-Regular.ttf"),
      "PoppinsI": require("@/assets/fonts/Poppins-Italic.ttf"),
      "PoppinsB": require("@/assets/fonts/Poppins-Bold.ttf"),
      "PoppinsSB": require("@/assets/fonts/Poppins-SemiBold.ttf"),
      "PoppinsL": require("@/assets/fonts/Poppins-ExtraLight.ttf"),
      "PoppinsLI": require("@/assets/fonts/Poppins-ExtraLightItalic.ttf")
  
    });
  
    useEffect(() => {
      if (fontsLoaded) {
        SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
    if (!fontsLoaded) {
      return null;
    }

}