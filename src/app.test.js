import { loadBuildTools } from "./app";

test("should load build tools", async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      data: [{ title: "Webpack", description: "A bundler" }],
    })
  );

  document.body.innerHTML = '<div id="app"></div>';

  await loadBuildTools();

  const toolElement = document.querySelector(".title");
  expect(toolElement).not.toBeNull();
  expect(toolElement.textContent).toBe("Webpack");
});
