import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { cyan } from "@material-ui/core/colors";

import Notes from "./pages/Notes.js";
import Create from "./pages/Create.js";
import NewNotesPage from "./pages/NewNotesPage.js";
import Layout from "./components/Layout.js";

// Theme Generate
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffc0cb",
    },
    secondary: cyan,
  },
  typography: {
    fontFamily: "Big Shoulders Display",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="create" element={<Create />} />
            <Route path="newpage" element={<NewNotesPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
