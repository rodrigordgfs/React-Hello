import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import CheckboxInput from "./components/CheckboxInput";
import Timer from "./components/Timer";
import { getAgeFrom } from "./helpers/dateHelpers";
import { getNewId } from "./services/idService";
import OnlineOffline from "./components/OnlineOffline";

export default function App() {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("2022-01-01");
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    document.title = name;
  }, [name]);

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleAgeChange(newAge) {
    setBirthdate(newAge);
  }

  function toogleShowTimer() {
    setShowTimer((currentShowTimer) => !currentShowTimer);
  }

  return (
    <>
      <Header title="React Hello" />
      <Main>
        <OnlineOffline />
        {showTimer && (
          <div className="text-right mt-1">
            <Timer />
          </div>
        )}
        <CheckboxInput
          inputLabel="Mostrar Cronômetro"
          onCheckboxChange={toogleShowTimer}
        />
        <TextInput
          id={getNewId()}
          inputFocus
          label="Digite seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
        />
        <TextInput
          id={getNewId()}
          label="Digite sua idade:"
          inputType="date"
          inputValue={birthdate}
          onInputChange={handleAgeChange}
        />
        <p>
          O seu nome é {name} e voce possui {getAgeFrom(birthdate)} anos.
        </p>
      </Main>
    </>
  );
}
