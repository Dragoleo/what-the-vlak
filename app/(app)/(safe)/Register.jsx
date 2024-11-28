import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput as Input,
  TouchableOpacity as Ghost,
  Image,
} from "react-native";
import { ThemedText as Yap } from "@/components/ThemedText";
import { Feather } from "@expo/vector-icons";
import { ThemedView as View } from "@/components/ThemedView";
import { useState } from "react";

/*
        DŮKLADNĚ ZKONTROLOVAT, ZMĚNIT STYLY
*/

export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.center}>
        <View style={styles.content}>
          <Yap style={styles.header}>Přihlásit se</Yap>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="mail" size={22} />
            </View>
            <Input
              style={styles.input}
              placeholder="E-mail"
              selectionColor="#3662AA"
              onChangeText={setEmail}
              value={email}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="lock" size={22} />
            </View>
            <Input
              style={styles.input}
              placeholder="Heslo"
              selectionColor="#3662AA"
              onChange={setPassword}
              secureTextEntry={passwordVisible}
              value={password}
            />
            <Ghost style={styles.showPassword} onPress={() => setPasswordVisible(!passwordVisible)} >
              <Feather name={passwordVisible ? "eye" : "eye-off"} size={20} />
            </Ghost>
          </View>
          <Ghost styLe={styles.forgottenPassword}>
            <Yap style={styles.forgottenYapping}>Zapomenuté heslo?</Yap>
          </Ghost>
          <Ghost style={styles.loginButton}>
            <Yap style={styles.loginYap}>Přihlásit se</Yap>
          </Ghost>
          <View style={styles.orContainer}>
            <View style={styles.orLine} />
            <Yap style={styles.or}>Nebo</Yap>
            <View style={styles.orLine} />
          </View>
          <Ghost style={styles.googleButton}>
            <Image
              source={require("@/assets/images/Google_logo.svg")}
              style={styles.googleLogo}
            />
            <Yap style={styles.googleText}>Přihlásit se pomocí Google</Yap>
          </Ghost>
          <Ghost style={styles.register}>
            <Yap>
              Nemáte účet?{" "}
              <Yap style={styles.forgottenYapping}>Vytvořte si ho</Yap>
            </Yap>
          </Ghost>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: center,
    justifyContent: center,
  },
  content: {
    paddingHorizontal: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    position: "relative",
  },
  icon: {
    marginRight: 15,
  },
  input: {
    borderBottomWidth: 1.5,
    flex: 1,
    paddingBottom: 10,
    borderBottomColor: "#eee",
    fontSize: 16,
  },
  showPassword: {
    position: "absolute",
    right: 0,
  },
  forgottenPassword: {
    alignSelf: "flex-end",
  },
  forgottenYapping: {
    color: "#3662AA",
    fontSize: 16,
    type: "semibold",
  },
  loginButton: {
    backgroundColor: "#3662AA",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  loginYap: {
    color: "white",
    textAlign: "center",
    type: "bold",
  },
  orContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
  orLine: {
    height: 1,
    flex: 1,
  },
  or: {
    marginHorizontal: 10,
    FontSize: 14,
  },
  googleButton: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  googleText: {
    textAlign: "center",
    type: "semibold",
    fontSize: 16,
  },
  googleLogo: {
    width: 20.03,
    height: 20.03,
    position: "absolute",
    left: 14,
  },
  register: {
    alignSelf: "center",
    marginTop: 40,
  },
});
