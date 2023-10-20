import React, { useState } from "react"; 

import OpenAI from "openai";
import { ColorRing } from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Chat.css";
import Logo from "../assets/openai-svgrepo-com.svg";
import { Link } from "react-router-dom";

const ChatAI = () => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [input, setInput] = useState("");

  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  const handleQnA = async () => {
    setLoading(true);

    try {
      const res = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "Anda adalah asisten yang ahli dalam menjawab pertanyaan seputar sneakers. Mohon berikan pertanyaan Anda mengenai sneakers.",
          },
          { role: "user", content: question },
        ],
        model: "gpt-3.5-turbo",
      });

      const newAnswers = [...answers, res.choices[0].message.content];
      setAnswers(newAnswers);

      setInput(question);
      setQuestion("");
    } catch (error) {
      console.error("Error fetching QnA response:", error);
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="container-md container-sm container-lg tools">
        <h1>OPEN AI</h1>
        <div className="container-md container-sm container-lg link">
          <Link to="/" className="btn btn-dark">
            Chat Bot
          </Link>
          <Link to="/generate-name" className="btn btn-dark">
            Generate Name
          </Link>
        </div>
      </div>
      <div className="container-md container-sm container-lg chatbox">
        <img src={Logo} alt="logo" />
        <h2>Simple Chatbot</h2>
        <div className="container qna">
          <p className="mb-5 system">Ask anything about sneakers!</p>

          {input && (
            <div className="message-list flex justify-end">
              <div className="text-right">
                {input}
              </div>
            </div>
          )}

          {answers.map((answer, index) => (
            <div key={index} className="answer mb-3">
              <div className="message-answer">
                {answer}
              </div>
            </div>
          ))}

          <form onSubmit={handleQnA} className="flex">
            <input
              name="question"
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={"Enter your question..."}
              className="form-control"
            />
            <button
              className="btn btn-secondary submit"
              onClick={handleQnA}
              disabled={loading}
            >
              Send
            </button>
          </form>

          {loading && (
            <div className="text-center">
              <ColorRing
                visible={true}
                height={80}
                width={80}
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatAI;
