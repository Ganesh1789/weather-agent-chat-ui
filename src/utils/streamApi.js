export async function streamWeatherResponse(userMessage, onChunk) {
  const response = await fetch(
    "https://brief-thousands-sunset-9fcb1c78-485f-4967-ac04-2759a8fa1462.mastra.cloud/api/agents/weatherAgent/stream",
    {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "x-mastra-dev-playground": "true",
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: userMessage }],
        runId: "weatherAgent",
        maxRetries: 2,
        maxSteps: 5,
        temperature: 0.5,
        topP: 1,
        runtimeContext: {},
        threadId: "2024510044",
        resourceId: "weatherAgent",
      }),
    }
  );

  if (!response.body) throw new Error("Streaming not supported");

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    onChunk(decoder.decode(value));
  }
}
