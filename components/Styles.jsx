import { StyleSheet } from "react-native";
import styled from "styled-components";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity as Ghost, TextInput as Input} from "react-native";
import { ThemedText as Yap } from "@/components/ThemedText"

const { brand } = Colors;

export const styles = StyleSheet.create({
  flex: {
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
  thirdPartyButton: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  thirdPartyText: {
    textAlign: "center",
    type: "semibold",
    fontSize: 16,
  },
  thirdPartyLogo: {
    width: 20.03,
    height: 20.03,
    position: "absolute",
    left: 14,
  },
  register: {
    alignSelf: "center",
    marginTop: 40,
  },
  white: {
    color: "white",
  },
  red: {
    color: "#e94444",
  },
  redOptionContainer: {
    borderColor: "#e94444",
    borderWidth: 4,
    borderRadius: 5,
    marginTop: 15,
    width: "50%",
    alignSelf: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 69,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    lineHeight: 30,
    color: "white",
  },
  questionContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "initial",
  },
  optionStyle: {
    color: "#E9E9E9",
    padding: 5,
    alignSelf: "center",
    fontSize: 16,
  },
  optionContainer: {
    borderColor: "#DBDBDB",
    borderWidth: 4,
    borderRadius: 5,
    marginTop: 15,
  },
  questionImage: {
    width: "100%",
    height: null,
    aspectRatio: 1.1,
    margin: 10,
    resizeMode: "contain",
  },
  correct: {
    backgroundColor: "green !important",
    color: "white",
  },
  incorrect: {
    backgroundColor: "red",
    color: "white",
  },
});
export const LabelIcon = styled.View`
  margin-right: 15px;
  position: absolute;
  z-index: 1;
`;

export const StyledInput = styled.Input`
  borderbottomwidth: 1, 5px;
  flex: 1;
  padding-bottom: 10px;
  border-bottom-color: "#eee";
  font-size: 16;
`;
export const RawFormButton = styled.Ghost`
    background-color: ${brand};
    padding: 14px;
    border-radius: 10px;
    margin-top: 20px;
`;
export const FormButtonLabel = styled.Yap`
  color: ${white};
  text-align: center;
`