import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  // TextInput as Input,
  TouchableOpacity as Ghost,
  Image,
} from "react-native";
import { ThemedText as Yap } from "@/components/ThemedText";
import { Feather } from "@expo/vector-icons";
import { ThemedView as View } from "@/components/ThemedView";
import { useState } from "react";
import { Link } from "expo-router";
import { Formik } from "formik";
import { styles, LabelIcon, StyledInput as Input } from "@/components/Styles";
import { Colors } from "@/constants/Colors"
import { ShowPassword } from "@/components/ShowPassword"
import { FormButton as Button } from "@/components/FormButton"

/*
        DŮKLADNĚ ZKONTROLOVAT, ZMĚNIT STYLY
*/

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar style="auto" />
      <ScrollView style={styles.center}>
        <View style={styles.content}>
          <Yap style={styles.header}>Přihlásit se</Yap>
          <View>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({handleChange, handleBlur, handleSubmit, values}) => (<View>
                <HandledInput
                  label="E-mailová adresa"
                  icon="mail"
                  placeholder="E-mailová adresa"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  />
                  <HandledInput
                  label="Heslo"
                  icon="lock"
                  placeholder="Heslo"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={true}
                  isPassword={true}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  />
                  <Button></Button>
              </View>)}
            </Formik>
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

            </View>
            <Ghost styLe={styles.forgottenPassword}>
              <Yap style={styles.forgottenYapping}>Zapomenuté heslo?</Yap>
            </Ghost>

            <View style={styles.orContainer}>
              <View style={styles.orLine} />
              <Yap style={styles.or}>Nebo</Yap>
              <View style={styles.orLine} />
            </View>
            <Ghost style={styles.thirdPartyButton}>
              <Image
                source={require("@/assets/images/Google_logo.svg")}
                style={styles.thirdPartyLogo}
              />
              <Yap style={styles.thirdPartyText}>
                Přihlásit se pomocí thirdParty
              </Yap>
            </Ghost>
            <Ghost style={styles.thirdPartyButton}>
              <Image
                source={require(/* DOPLNIT FACEBOOK LOGO */)}
                style={styles.thirdPartyLogo}
              />
              <Yap style={styles.thirdPartyText}>
                Přihlásit se pomocí thirdParty
              </Yap>
            </Ghost>
            <Ghost style={styles.register}>
              <Yap>
                Nemáte účet?{" "}
                <Link href={{ pathname: "./Register" }}>
                  <Yap style={styles.forgottenYapping}>Vytvořte si ho</Yap>
                </Link>
              </Yap>
            </Ghost>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const HandledInput = ({icon, isPassword, showPassword, setShowPassword, ...props}) => {
  return (
    <View>
      <LabelIcon>
        <Feather name={icon} size={20} color={brand}  />
      </LabelIcon>
      <Input selectionColor="#3662AA">{...props}</Input>
      {isPassword && (
        <ShowPassword component="Login" />
      )}
    </View>
  )
}
