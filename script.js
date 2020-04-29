const listItems = document.querySelectorAll("li");

let losAngelesMap;

function initMap() {
  losAngelesMap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.0522, lng: -118.2437 },
    zoom: 10,
  });

  let slowDaysMarkers = [];
  let evesHollywoodMarkers = [];
  let charmingMarkers = [];

  let red = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
  let blue = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
  let green = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";

  let evesHollywood = [
    {
      position: new google.maps.LatLng(34.081792, -118.389374),
      icon: blue,
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
      icon: green,
      content: `
      <h2>Schwab's Pharmacy</h2>
      <p><span class='key-word'>Schwab's Pharmacy</span> was alwasy fun!</p>
      `,
    },
  ];

  for (let i = 0; i < evesHollywood.length; i++) {
    addMarker(evesHollywood[i]);
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
      slowDaysMarkers.push(marker);
    } else if (location.icon.includes('blue')){
      evesHollywoodMarkers.push(marker)
    } else {
      charmingMarkers.push(marker)
    }

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
      } else if (event.target.id === 'charming') {
        showCharmingMarkers();
      } else if (event.target.id === 'hollywood') {
        showHollywoodMarkers();
      } else {
        showAllMarkers();
      }
    });
  });
  
  function showSlowMarkers() {
    let notSlowMarkers = [...evesHollywoodMarkers, ...charmingMarkers];

    slowDaysMarkers.forEach(marker => marker.setMap(losAngelesMap))
    
    for (var i = 0; i < notSlowMarkers.length; i++) {
      notSlowMarkers[i].setMap(null);
    }
  }

  function showCharmingMarkers() {
    let notCharmingMarkers = [...evesHollywoodMarkers, ...slowDaysMarkers];

    charmingMarkers.forEach(marker => marker.setMap(losAngelesMap))
    
    for (var i = 0; i < notCharmingMarkers.length; i++) {
      notCharmingMarkers[i].setMap(null);
    }
  }

  function showHollywoodMarkers() {
    let notHollywoodMarkers = [...charmingMarkers, ...slowDaysMarkers];

    evesHollywoodMarkers.forEach(marker => marker.setMap(losAngelesMap))
    
    for (var i = 0; i < notHollywoodMarkers.length; i++) {
      notHollywoodMarkers[i].setMap(null);
    }
  }

  function showAllMarkers() {
    let allMarkers = [...charmingMarkers, ...evesHollywoodMarkers, ...slowDaysMarkers];
    allMarkers.forEach(marker => marker.setMap(losAngelesMap));
  }
}

