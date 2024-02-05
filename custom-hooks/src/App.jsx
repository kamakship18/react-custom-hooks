import useStorage from "./Hooks/storage";
import "./App.css";

function App() {
  const { setStorage } = useStorage();

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setStorage(e.target.value)}
      />
    </div>
  );
}

export default App;