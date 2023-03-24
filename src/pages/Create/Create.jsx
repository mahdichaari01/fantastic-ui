import { Page } from "../../components/Page";
import { Icon } from "../../components/Icon";
import {
  BasicInput,
  themeContext,
  TextArea,
  InputGroup,
  Checkbox,
  Button,
} from "../../components/inputs";
import { Steps } from "../../components/Steps";
import { useContext } from "react";
import { WalletContext } from "../../components/WalletContext";
export default function DeployPage() {
  const { wallet } = useContext(WalletContext);
  return (
    <Page noFooter>
      <themeContext.Provider value={"blue"}></themeContext.Provider>
    </Page>
  );
}
