document.addEventListener("DOMContentLoaded", () => {
  const webApp = window.Telegram.WebApp;
  
  webApp.expand();
  webApp.lockOrientation();
  webApp.disableVerticalSwipes();
  webApp.setHeaderColor("#FFFFFF");
  webApp.setBackgroundColor("#FFFFFF");
  webApp.ready();
});
