let losAngelesMap;

function initMap() {
  losAngelesMap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.0522, lng: -118.2437 },
    zoom: 10,
  });

  let locations = [
      {
        position: new google.maps.LatLng(34.013332, -118.2437),
        content: '<h2>Test Marker</h2>'
      }
  ]

  for (let i = 0; i < locations.length; i++){
      addMarker(locations[i])
  }

  function addMarker(location) {
    let marker = new google.maps.Marker({
        position: location.position,
        map: losAngelesMap
      });

    if (location.content) {
        let infoWindow = new google.maps.InfoWindow({
            content: location.content
        })

        marker.addListener('click', () => {
            infoWindow.open(map, marker)
        })
    }
  }

}
