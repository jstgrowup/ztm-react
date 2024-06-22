import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.components";
import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/signin/signin.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />;
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;