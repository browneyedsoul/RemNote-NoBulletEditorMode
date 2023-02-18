export async function Nobullet() {
  const oriButton = document.querySelector<HTMLButtonElement>(".rem-container--focused .toggle-collapse-button");
  const newButton = document.querySelector<HTMLElement>(".rem-container--focused .perfect-circle::before");

  if (newButton && oriButton) {
    newButton.addEventListener("click", () => {
      oriButton.click();
    });
  }
}
