import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//FIXME: height and  on project images broken on mobile (pet pal), try converting to SVG then removing its media queries

//FIXME: width broken on mobile

function App() {
  return <Homepage />;
}

export default App;
