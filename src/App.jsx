import ChatWindow from "./components/ChatWindow";

export default function App() {
  return (
    <>
      {/* Weather layers */}
      <div className="rain"></div>
      <div className="snow"></div>

      {/* Main App */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <ChatWindow />
      </div>
    </>
  );
}
