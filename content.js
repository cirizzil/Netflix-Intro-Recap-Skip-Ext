
function skipIntro() {
  const skipButton = document.querySelector('.skip-credits a, .skip-credits button, .watch-video--skip-content-button');
  if (skipButton) {
    skipButton.click();
  }
}

const observer = new MutationObserver(skipIntro);
observer.observe(document.body, { childList: true, subtree: true });

document.addEventListener('DOMContentLoaded', skipIntro);
