import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/inputs";
import { BasicInput } from "./components/inputs/BasicInput";
import { Checkbox } from "./components/inputs/Checkbox";
import { InputGroup } from "./components/inputs/InputGroup";
import { TextArea } from "./components/inputs/TextArea";
import { themeContext } from "./components/inputs/themeContext";
import { Steps } from "./components/Steps";
function App() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("tw normal haka?");
  const [value3, setValue3] = useState(false);
  return (
    <InputGroup className="m-2">
      <themeContext.Provider value="green">
        <BasicInput
          label="Label"
          name="test1"
          value={value}
          onChange={setValue}
          placeholder="placeholder"
          type="text"
          info="info text"
        />
      </themeContext.Provider>
      <BasicInput
        label="Label"
        name="test1"
        value={value2}
        onChange={setValue2}
        placeholder="placeholder"
        type="textarea"
        freeze
      />
      <themeContext.Provider value="blue">
        <div className="h-64">
          <TextArea
            label="Label"
            name="test1"
            value={value}
            onChange={setValue}
            placeholder="placeholder"
            type="text"
            info="info text"
          />
        </div>
      </themeContext.Provider>
      <TextArea
        label="Label"
        name="test1"
        value={value2}
        onChange={setValue2}
        placeholder="placeholder"
        type="textarea"
        freeze
      />
      <themeContext.Provider value="orange">
        <Checkbox
          label="Label"
          name="test1"
          checked={value3}
          onChange={setValue3}
        />
      </themeContext.Provider>
      <themeContext.Provider value="mauve">
        <Checkbox
          label="Label"
          name="test1"
          checked={value3}
          onChange={setValue3}
        />
        <Button label="Button" className="w-36" disabled />
      </themeContext.Provider>
      <themeContext.Provider value="blue">
        <Checkbox
          label="Label"
          name="test1"
          checked={value3}
          onChange={setValue3}
        />
        <Button label="Button" />
      </themeContext.Provider>
      <themeContext.Provider value="green">
        <Checkbox
          label="Label"
          name="test1"
          checked={value3}
          onChange={setValue3}
          disabled
        />
        <Button label="Button" />
      </themeContext.Provider>
      <div className="w-[31.25rem]">
        <Steps steps={["step1", "step2", "step3"]} current={1} />
      </div>
    </InputGroup>
  );
}

export default App;
