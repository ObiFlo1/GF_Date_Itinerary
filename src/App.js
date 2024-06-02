import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import Enjoy from "./components/EnjoyDatePage/Enjoy";
import Form from "./components/formPage/Form";
import Success from "./components/formSubmitPage/SuccessPage";

const Home = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
const EnjoyDatePage = () => <Enjoy />;
const FormPage = () => <Form />;
const SuccessPage = () => <Success />;

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Enjoy-Your-Date" element={<EnjoyDatePage />} />
          <Route path="/Form" element={<FormPage />} />
          <Route path="/SuccessPage" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
