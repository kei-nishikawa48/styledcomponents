import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Square from "./Square";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Square size={100} color={""} />
    </ThemeProvider>
  );
}

export default App;
