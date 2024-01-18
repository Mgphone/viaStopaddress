import "./styles.css";
import Moving from "./ViaBetween/Moving";
import MyContextProvider from "./Context/MyContextProvider";
export default function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Moving />
      </div>
    </MyContextProvider>
  );
}
