const clickSound = new Audio("sounds/click.mp3");
clickSound.volume = 0.5;

function playClick() {
  // restart sound every click
  clickSound.currentTime = 0;
  clickSound.play();
}