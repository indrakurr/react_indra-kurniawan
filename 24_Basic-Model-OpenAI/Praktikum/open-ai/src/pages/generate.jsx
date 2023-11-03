import React, { useState } from "react";
import Button from "../components/Button";
import OpenAI from "openai";
import "bootstrap/dist/css/bootstrap.min.css";
import { ColorRing } from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/openai-svgrepo-com.svg";
import "./Generate.css"
import { Link } from "react-router-dom";

const GenerateName = () => {
  const [inputName, setInputName] = useState("");
  const [generatedName, setGeneratedName] = useState("");
  const [loading, setLoading] = useState(false);

  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  const handleGenerateName = async () => {
    setLoading(true);

    try {
      const res = await openai.completions.create({
        prompt: `Generate a name similar to ${inputName}`,
        max_tokens: 20,
        n: 1,
        model: "text-davinci-002",
      });

      setGeneratedName(res.choices[0].text);
    } catch (error) {
      console.error("Error generating name:", error);
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
      <div className="container-md container-sm container-lg generateName">
        <img src={Logo} alt="logo" />
        <h2>Name Generator</h2>
        <input
          type="text"
          id="inputName"
          className="form-control"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Generate a unique name for your character, business, or project"
        />
        <Button
          text="Generate Name"
          onClick={handleGenerateName}
          className="btn btn-secondary"
          disabled={loading}
        />
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
        {generatedName && (
          <div className="mt-4">
            <p className="fw-bold">Generated Name:</p>
            <p>{generatedName}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateName;
