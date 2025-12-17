**Weather Agent Chat Interface**

A responsive web-based chat application that enables users to interact with a weather agent through a streaming API. The application dynamically adapts its user interface based on weather conditions mentioned in the agent’s responses, providing both textual and visual feedback.

This project has been developed as part of a Frontend Developer Assignment.
**
Live Demo**

https://weather-agent-chat-ui.vercel.app/

Project Overview

The Weather Agent Chat Interface allows users to ask weather-related questions and receive real-time responses from a weather agent. The UI updates dynamically based on detected weather conditions such as rain, snow, storm, or clear weather.

The primary objective of this project is to demonstrate:

Frontend engineering skills

API integration with streaming responses

Clean and responsive UI implementation

Attention to user experience and graceful error handling

Key Features

Interactive chat interface with user and agent messages

Support for streaming API responses

Automatic UI theme updates based on weather context

Visual weather effects (e.g., rain and snow animations)

Responsive design suitable for mobile, tablet, and desktop

Keyboard interaction (Enter key to send messages)

Clear chat functionality

Graceful handling of API errors or unavailability

Technology Stack

Frontend Framework: React (Vite)

Styling: CSS3

State Management: React Hooks (useState, useEffect, useRef)

API Handling: Fetch API with streaming support

Deployment Platform: Vercel

Version Control: Git & GitHub

API Integration

The application integrates with a streaming weather agent API.

Endpoint:

POST https://brief-thousands-sunset-9fcb1c78-485f-4967-ac04-2759a8fa1462.mastra.cloud/api/agents/weatherAgent/stream


User queries are sent to the API as messages.

Responses are received incrementally (streaming).

Weather-related keywords in the agent’s response are used to update the UI dynamically.

API Availability Note

The API endpoint may be intermittently inaccessible. To address this, the application includes:

Error handling with user-friendly fallback messages

UI logic that remains stable even when the API does not respond

Demonstration of complete frontend behavior independent of API availability

Weather-Based UI Behavior

The application analyzes the agent’s response text for weather-related keywords such as:

Rain

Snow

Storm

Cloudy

Sunny

Foggy

Windy

Based on detected keywords:

The background theme is updated

Relevant animations (rain or snow) are triggered

This ensures a clear and intuitive user experience through both visual and textual cues.

How to Run Locally

Clone the repository:

git clone https://github.com/Ganesh1789/weather-agent-chat-ui.git


Navigate to the project directory:

cd weather-agent-chat-ui


Install dependencies:

npm install


Start the development server:

npm run dev


Open the application in your browser:

http://localhost:5173

Project Structure
src/
 ├── components/
 │   ├── ChatWindow.jsx
 │   ├── ChatInput.jsx
 │   └── MessageBubble.jsx
 ├── utils/
 │   └── streamApi.js
 ├── App.jsx
 ├── main.jsx
 └── index.css

Design Considerations

Weather detection is keyword-based to support natural language responses

UI themes are applied via body-level CSS classes for simplicity and performance

Animations are implemented using pure CSS to ensure smooth transitions

The application follows a mobile-first responsive design approach

Minimal external dependencies are used to keep the project lightweight

Possible Enhancements

Dark and light mode toggle

Improved accessibility with ARIA attributes

Message search or export functionality

Unit testing using Jest or React Testing Library

Progressive Web App (PWA) support

Author

Ganesh Patil
Frontend Developer Assignment Submission

Submission Links

GitHub Repository:
https://github.com/Ganesh1789/weather-agent-chat-ui

Live Deployment:
https://weather-agent-chat-ui.vercel.app/
