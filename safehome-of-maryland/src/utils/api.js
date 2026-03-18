 const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// 🔥 CONTACT API
export const submitContactForm = async (formData) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 sec timeout

  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    // ✅ Safe JSON parse
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message");
    }

    return data;

  } catch (error) {
    // 🔥 Timeout error
    if (error.name === "AbortError") {
      throw new Error("Request timeout. Try again.");
    }

    // 🔥 Network error
    if (error.message === "Failed to fetch") {
      throw new Error("Server not reachable. Check backend.");
    }

    throw new Error(error.message || "Something went wrong");
  }
};