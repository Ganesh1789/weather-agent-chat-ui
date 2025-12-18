export async function getWeatherResponse(userMessage) {
  const response = await fetch(
    "https://api-dev.provue.ai/api/webapp/agent/test-agent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: userMessage,
        stream: false,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("API request failed");
  }

  const result = await response.json();
  return result.data.response;
}
