import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import Dashboard from "./components/Dashboard";
import AddHomework from "./components/AddHomework";
import CreateUser from "./components/CreateUser";
import EditHomework from "./components/EditHomework";
import { Container, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "./components/Providers/ThemeProvider";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CssBaseline />
        <Navbar />
        <Container style={{ marginTop: "1rem" }}>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/edit/:id" component={EditHomework} />
          <Route exact path="/add-homework" component={AddHomework} />
          <Route exact path="/user/create" component={CreateUser} />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
