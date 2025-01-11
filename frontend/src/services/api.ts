export async function sendMessageToServer(userMessage: string): Promise<string> {
  try {
    const response = await fetch("https://api.medbro.tech/api/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: userMessage }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    return data.answer;
  } catch (error) {
    return "Ошибка при отправке сообщения. Попробуйте снова.";
  }
}
