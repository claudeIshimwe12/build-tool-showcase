export async function loadBuildTools() {
  try {
    const response = await fetch("/build-tools.json");
    const tools = await response.json();
    const app = document.getElementById("app");
    tools.data.forEach((tool) => {
      const toolElement = document.createElement("h2");
      toolElement.classList.add("title");
      const container = document.createElement("div");
      const description = document.createElement("p");
      container.classList.add("tool");

      toolElement.textContent = tool.title;
      description.textContent = tool.description;
      container.append(toolElement, description);
      app.appendChild(container);
    });
  } catch (error) {
    console.error("Error loading tools:", error);
  }
}
