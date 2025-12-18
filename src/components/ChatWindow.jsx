import { useEffect, useRef, useState } from "react";
import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";
import { getWeatherResponse } from "../utils/streamApi";


function applyWeatherTheme(text) {
  const body = document.body;
  const lower = text.toLowerCase();

  body.className = "";

  const rain = document.querySelector(".rain");
  const snow = document.querySelector(".snow");
  if (rain) rain.innerHTML = "";
  if (snow) snow.innerHTML = "";

  if (lower.includes("snow")) {
    body.classList.add("snowy");
    createSnow();
    return;
  }

  if (lower.includes("storm") || lower.includes("thunder")) {
    body.classList.add("stormy");
    createRain();
    return;
  }

  if (lower.includes("rain") || lower.includes("drizzle")) {
    body.classList.add("rainy");
    createRain();
    return;
  }

  if (lower.includes("cloud") || lower.includes("cloudy")) {
    body.classList.add("cloudy");
    return;
  }

  if (lower.includes("fog") || lower.includes("mist")) {
    body.classList.add("foggy");
    return;
  }

  if (lower.includes("wind") || lower.includes("windy")) {
    body.classList.add("windy");
    return;
  }

  if (
    lower.includes("sun") ||
    lower.includes("sunny") ||
    lower.includes("clear")
  ) {
    body.classList.add("sunny");
    return;
  }
}


function createRain() {
  const rain = document.querySelector(".rain");
  if (!rain) return;
  rain.innerHTML = "";

  for (let i = 0; i < 100; i++) {
    const drop = document.createElement("div");
    drop.className = "raindrop";
    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.animationDuration = 0.5 + Math.random() * 0.8 + "s";
    rain.appendChild(drop);
  }
}

function createSnow() {
  const snow = document.querySelector(".snow");
  if (!snow) return;
  snow.innerHTML = "";

  for (let i = 0; i < 60; i++) {
    const flake = document.createElement("div");
    flake.className = "snowflake";
    flake.style.left = Math.random() * window.innerWidth + "px";
    flake.style.animationDuration = 2 + Math.random() * 3 + "s";
    snow.appendChild(flake);
  }
}

function setWeather(type) {
  document.body.className = "";

  const rain = document.querySelector(".rain");
  const snow = document.querySelector(".snow");
  if (rain) rain.innerHTML = "";
  if (snow) snow.innerHTML = "";

  if (type === "rainy") {
    document.body.classList.add("rainy");
    createRain();
    return;
  }

  if (type === "stormy") {
    document.body.classList.add("stormy");
    createRain();
    return;
  }

  if (type === "snowy") {
    document.body.classList.add("snowy");
    createSnow();
    return;
  }

  if (type === "sunny") document.body.classList.add("sunny");
  if (type === "cloudy") document.body.classList.add("cloudy");
  if (type === "foggy") document.body.classList.add("foggy");
  if (type === "windy") document.body.classList.add("windy");
}


export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend(text) {
  if (!text.trim()) return;

  setMessages((prev) => [
    ...prev,
    {
      role: "user",
      content: text,
      time: new Date().toLocaleTimeString(),
    },
    {
      role: "agent",
      content: "",
      time: new Date().toLocaleTimeString(),
    },
  ]);

  setLoading(true);

  try {
    const reply = await getWeatherResponse(text);

    setMessages((prev) => {
      const updated = [...prev];
      const lastMessage = updated[updated.length - 1];
      lastMessage.content = reply;

      applyWeatherTheme(reply);
      return updated;
    });
  } catch {
    setMessages((prev) => [
      ...prev.slice(0, -1),
      {
        role: "agent",
        content: "⚠️ Weather service unavailable.",
        time: new Date().toLocaleTimeString(),
      },
    ]);
  } finally {
    setLoading(false);
  }
}

  function clearChat() {
    setMessages([]);
    document.body.className = "";

    const rain = document.querySelector(".rain");
    const snow = document.querySelector(".snow");

    if (rain) rain.innerHTML = "";
    if (snow) snow.innerHTML = "";
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        🌦 Weather Agent
        <button className="clear-btn" onClick={clearChat}>
          Clear
        </button>
      </div>

      <div className="chat-messages">
        {messages.length === 0 && (
          <p style={{ color: "#6b7280", fontSize: 13 }}>
            Ask about the weather in any city 🌍
          </p>
        )}

        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}

        {loading && <div className="typing">Agent typing...</div>}
        <div ref={bottomRef} />
      </div>

      <ChatInput onSend={handleSend} disabled={loading} />
    </div>
  );
}
