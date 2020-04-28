const listItems = document.querySelectorAll("li");

let losAngelesMap;

function initMap() {
  losAngelesMap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.0522, lng: -118.2437 },
    zoom: 10,
  });

  let redMarkers = [];

  let red = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'

  let EvesHollywood = [
    {
      position: new google.maps.LatLng(34.081792, -118.389374),
      icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      content: `
        <h2>Troubadour</h2>
        <p>The <span class='key-word'>Troubadour</span> was great!</p>
        `,
    },
  ];

  let slowDays = [
    {
      position: new google.maps.LatLng(34.045965, -118.299618),
      icon: red,
      content: `
      <h2>St. Sophia</h2>
      <p><span class='key-word'>St. Sophia's Cathedral</span> was pretty!</p>
      `,
    },
  ];

  let charming = [
    {
      position: new google.maps.LatLng(34.098073, -118.364694),
      icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
      content: `
      <h2>Schwab's Pharmacy</h2>
      <p><span class='key-word'>Schwab's Pharmacy</span> was alwasy fun!</p>
      `,
    },
  ];

  for (let i = 0; i < EvesHollywood.length; i++) {
    addMarker(EvesHollywood[i]);
  }

  for (let i = 0; i < slowDays.length; i++) {
    addMarker(slowDays[i]);
  }

  for (let i = 0; i < charming.length; i++) {
    addMarker(charming[i]);
  }

  function addMarker(location) {
    let marker = new google.maps.Marker({
      position: location.position,
      icon: location.icon,
      map: losAngelesMap,
    });

    if (location.icon.includes('red')) {
      redMarkers.push(marker);
    }

    console.log(redMarkers)

    if (location.content) {
      let infoWindow = new google.maps.InfoWindow({
        content: location.content,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    }
  }

  listItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (event.target.id === "slow") {
        showSlowMarkers();
      }
    });
  });
  
  function showSlowMarkers() {
    for (var i = 0; i < EvesHollywood.length; i++) {
      EvesHollywood[i].setMap(null);
    }
  
    for (var i = 0; i < charming.length; i++) {
      charming[i].setMap(null);
    }
  }
}

