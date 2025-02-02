import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex flex-col justify-center align-middle items-center h-screen">
      <h1 className="font-bold text-red-500">Hello World</h1>
      <Button>ShadCN Button</Button>
    </div>
  );
}

export default App;
