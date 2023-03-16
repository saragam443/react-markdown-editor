import { useState, useEffect } from "react";
import MdInput from "./component/MdInput";
import MdOutput from "./component/MdOutput";

const App = () => {
  useEffect(() => {
    document.title = "Markdown Editor";
  }, []);

  const [inputText, setInputText] = useState("");

 

  return (
    <main>
        <MdInput inputText={inputText} setInputText={setInputText} />
        <MdOutput inputText={inputText} />
    </main>
  );
};

export default App;
