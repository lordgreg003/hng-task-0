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
  setInterval(updateTimeAndDate, 1000); // Update every second
});

const output = document.querySelector("pre");
const image = document.querySelector("img");
image.addEventListener("load", (event) => {
  const { naturalWidth, naturalHeight, width, height } = image;
  output.textContent = `Natural size ${naturalWidth} x ${naturalHeight} pixels
      Displayed size : ${width} x ${height} pixels`;
});
