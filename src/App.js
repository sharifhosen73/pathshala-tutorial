import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./components/Routes/Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
