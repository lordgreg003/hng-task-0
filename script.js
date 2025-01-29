function updateTimeAndDate() {
  const currentTimeElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );

  const now = new Date();
  const utcString = now.toUTCString();
  const day = now.toLocaleDateString("en-US", { weekday: "long" });

  currentTimeElement.textContent = `currentTimeUTC: ${utcString}`;
  currentDayElement.textContent = `Day: ${day}`;
}

document.addEventListener("DOMContentLoaded", () => {
  updateTimeAndDate();
  setInterval(updateTimeAndDate, 1000);  
});
