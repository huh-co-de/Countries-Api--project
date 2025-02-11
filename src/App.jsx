import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  // provide context where we can
  // access all data which is passess through it
  return (
    <>
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
