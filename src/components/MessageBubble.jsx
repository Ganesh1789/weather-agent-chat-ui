export default function MessageBubble({ message }) {
  return (
    <div className={`message ${message.role}`}>
      {message.content}
      <div className="message-time">{message.time}</div>
    </div>
  );
}
