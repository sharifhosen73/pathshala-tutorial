import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./components/Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
