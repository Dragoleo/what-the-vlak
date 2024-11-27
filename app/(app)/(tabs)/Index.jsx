import { StyleSheet, TouchableOpacity as Ghost } from "react-native";
import { ThemedText as Yap } from "@/components/ThemedText";
import { ThemedView as View } from "@/components/ThemedView";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Platform } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import Quiz from "@/app/(tabs)/Quiz";

export default function Index() {
  const colorScheme = useColorScheme();

  return (
    <>
      <View style={styles.container}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
            headerShown: false,
            tabBarButton: HapticTab,
            tabBarBackground: TabBarBackground,
            tabBarStyle: Platform.select({
              ios: {
                position: "absolute",
              },
              default: {},
            }),
          }}
        >
          {" "}
          <Tabs.Screen
            name="Quiz"
            component={Quiz}
            options={({ navigation }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
                <Text>Settings</Text>
              </TouchableOpacity>
            )}
          />
        </Tabs>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // insert styles

  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 69,
    backgroundColor: "#222",
  },
});
