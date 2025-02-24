
import './App.css';
import Footer from './Components/Footer';
import Main from './Components/Main';
import { Box } from "@mui/material";



function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box sx={{ flex: 1 }}>
        <Main />  
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
