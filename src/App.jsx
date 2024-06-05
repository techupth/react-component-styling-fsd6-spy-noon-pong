import "./App.css";
import { PrimaryButton,SecondaryButton } from "./components/Button"
import { AlertError,AlertWarning,AlertInfo,AlertSuccess } from "./components/Alert"

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <PrimaryButton />
        <SecondaryButton />
      </div>
      <hr />
      <div className="alert-components-section">
        <AlertError type="error" />
        <AlertWarning type="warning" />
        <AlertInfo type="info" />
        <AlertSuccess type="success" />
      </div>
    </div>
  );
}


export default App;
