import React, { useState } from "react";
import { db } from "./firebase";
import { v4 as uuidv4 } from "uuid";
import "./Home.css";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Home() {
  const [url, setUrl] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let code = uuidv4();
    await db.collection("urls").add({
      url: url,
      code: code,
    });
    alert("This is your URL - http://localhost:3000/l/" + code);
  };

  return (
    <div>
      <div className="home__center">
        <h1>URL Shortener</h1>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="home__inputContainer">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter the URL here..."
          />
          <Button type="submit">
            <SendIcon />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Home;