const navigationHandler = (lat, lng) => {
  // If it's an iPhone..
  if ((navigator.platform.indexOf("iPhone") !== -1) || (navigator.platform.indexOf("iPod") !== -1)) {
    function iOSversion() {
      if (/iP(hone|od|ad)/.test(navigator.platform)) {
        const v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
      }
    }
    const ver = iOSversion() || [0];
    let protocol = 'http://';
    if (ver[0] >= 6) {
      protocol = 'maps://';
    }
    window.location = protocol + 'maps.apple.com/maps?daddr=' + lat + ',' + lng + '&amp;ll=';
  } else {
    window.open('http://maps.google.com?daddr=' + lat + ',' + lng + '&amp;ll=');
  }
};

// Define latitude and longitude
const latitude = 54.39975212863462;
const longitude = 24.075384093060205;

// Add event listener to the button after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const navigateButton = document.getElementById('navigate-button');
  navigateButton.addEventListener('click', () => {
    navigationHandler(latitude, longitude);
  });
});
