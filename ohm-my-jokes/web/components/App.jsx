import { SignedInOrRedirect, SignedOut, SignedOutOrRedirect, Provider } from "@gadgetinc/react";
import { useState } from "react";
import { Suspense, useEffect } from "react";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate, Link } from "react-router";
import { api } from "../api";
import "./App.css";

const openai = require('openai');
const App = () => { useEffect(() => { document.title = `${process.env.GADGET_APP}`;
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}></Route>
    )
  );
  return (
    <Suspense fallback={<></>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

const Layout = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("Generated answer will appear here...");
  const [input, setInput] = useState("");
  const generateAnswer = async () => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        store: true,
        messages: [
            {"role": "system", "content": "You are a friendly chatbot."},
        ]});
      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error("Error fetching the answer:", error);
      setAnswer("Failed to generate an answer.");
    }
  };
      return (
    <Provider api={api} navigate={navigate} auth={window.gadgetConfig.authentication}>
      <Header />
      <div className="app">
          <div className="main">
            <div className="instructions">
              <h1>Welcome to {process.env.GADGET_APP}</h1>
              <p>Enter a word and click submit to get a joke related to the word.
              </p>
            </div>
            <div className="centered">
            <input type="text"
              placeholder="Enter text"
              value={input}
              onChange={(e) => setInput(e.target.value)} />
            <button onClick={generateAnswer}>Submit</button>
          </div>
          <textarea className="theJoke" readOnly value={answer} />
          <Outlet />
          </div>
        </div>
    </Provider>
  );
};

const Header = () => {
  return (
    <div className="header">
      <a href="/" target="_self" rel="noreferrer" style={{textDecoration:"none"}}>
        <div className="logo">{process.env.GADGET_APP}</div>
      </a>
    </div>
  );
};

export default App;
