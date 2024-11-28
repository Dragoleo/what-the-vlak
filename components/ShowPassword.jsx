import { Colors } from "@/constants/Colors";
import { styles } from "@/components/Styles";

export default function ShowPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Ghost
      style={styles.showPassword}
      onPress={() => setShowPassword(!showPassword)}
    >
      <Feather name={showPassword ? "eye" : "eye-off"} size={20} />
    </Ghost>
  );
}
