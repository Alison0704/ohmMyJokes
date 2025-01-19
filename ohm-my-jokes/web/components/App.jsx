import { Provider } from "@gadgetinc/react";
import { useState, Suspense, useEffect } from "react";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate, Link } from "react-router";
import { api } from "../api";
import "./App.css";

// Initialize OpenAI API client
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const App = () => { useEffect(() => { document.title = `${process.env.GADGET_APP}`;
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>} />
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

  const generateJoke = async (topic) => {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer  ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "user", content: `Create a funny electrical joke about "${topic}".` },
        ],
      }),
    });
    const data = await response.json();
    return data.choices[0].message.content;
  };
  
  const generateAnswer = async () => {
    try {
      const joke = await generateJoke(input);
      setAnswer(joke);
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
              <p>
                Enter a word and click submit to get a joke related to the word.
              </p>
            </div>
            <div className="centered">
            <input
              type="text"
              placeholder="Enter text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />   
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
