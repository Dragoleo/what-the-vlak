import { styles, RawFormButton, FormButtonLabel } from "@/components/Styles";
import { Colors } from "@/constants/Colors";

const { brand } = Colors;

export default function FormButton({component}) {
  return (
    <RawFormButton>
      <FormButtonLabel style={{type: "bold"}}>{component}</FormButtonLabel>
    </RawFormButton>
  );
}
