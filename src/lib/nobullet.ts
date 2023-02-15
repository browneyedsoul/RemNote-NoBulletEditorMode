export function Nobullet() {
  const oriButton: any = document.querySelector(".rem-container--focused .toggle-collapse-button");
  const newButton: any = document.querySelector(".rem-container--focused .perfect-circle::before");

  newButton.addEventListener("click", () => {
    oriButton.click();
  });
}
