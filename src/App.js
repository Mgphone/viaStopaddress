import "./styles.css";
import Moving from "./ViaBetween/Moving";
import MyContextProvider from "./Context/MyContextProvider";
import Testing from "./ViaBetween/Testing";
export default function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Moving />
        <Testing />
      </div>
    </MyContextProvider>
  );
}
