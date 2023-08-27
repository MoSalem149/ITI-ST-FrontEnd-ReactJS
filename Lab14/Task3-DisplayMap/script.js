function getlocationfun() {
  const apiKey =
    "https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyB90FxtYG_ybAYXGkz0ybkmkboE2nEbezI";

  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
  script.defer = true;
  script.async = true;

  window.initMap = function () {
    const mapOptions = {
      center: { lat: 31.417, lng: 31.8144 },
      zoom: 12,
    };

    const map = new google.maps.Map(
      document.getElementById("mymap"),
      mapOptions
    );

    const marker = new google.maps.Marker({
      position: { lat: 40.7128, lng: -74.006 },
      map: map,
      title: "Marker Title",
    });
  };

  document.head.appendChild(script);
}

function displayDetails() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const accuracy = position.coords.accuracy;
      const timestamp = new Date(position.timestamp).toLocaleString();

      const detailsHTML = `
          <p>Latitude: ${latitude}</p>
          <p>Longitude: ${longitude}</p>
          <p>Accuracy: ${accuracy} meters</p>
          <p>Timestamp: ${timestamp}</p>
        `;

      document.getElementById("mymap").innerHTML = detailsHTML;
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}
