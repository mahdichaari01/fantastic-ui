import { Page } from "../../components/Page";
import {
  BasicInput,
  themeContext,
  TextArea,
  InputGroup,
  Checkbox,
  Button,
} from "../../components/inputs";
export default function CreatePage() {
  return (
    <Page>
      <themeContext.Provider value={{ theme: "blue" }}></themeContext.Provider>
    </Page>
  );
}
