const listItems = document.querySelectorAll("li");

let losAngelesMap;

function initMap() {
  losAngelesMap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.005584, lng: -118.331521 },
    zoom: 11,
  });

  let slowDaysMarkers = [];
  let evesHollywoodMarkers = [];
  let charmingMarkers = [];
  let infoWindows = [];
  let markers = [];

  let area = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
  let food = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
  let nightlife = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
  let landmark = "http://maps.google.com/mapfiles/ms/icons/orange-dot.png";
  let hotel = "http://maps.google.com/mapfiles/ms/icons/pink-dot.png";
  let school = "http://maps.google.com/mapfiles/ms/icons/purple-dot.png";
  let store = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
  let misc = "http://maps.google.com/mapfiles/ms/icons/ltblue-dot.png";

  let charming = [
    {
      position: new google.maps.LatLng(34.081792, -118.389374),
      icon: food,
      book: "charming",
      content: `
        <h2>Troubadour</h2>
        <p>The <span class='key-word'>Troubadour</span> was great!</p>
        `,
    },
  ];

  let slowDays = [
    {
      position: new google.maps.LatLng(33.84383, -118.16778),
      icon: landmark,
      book: "slowDays",
      content: `
      <h2>Forest Lawn</h2>
      <p>7</p>
      `,
    },
    {
      position: new google.maps.LatLng(35.37329, -119.01871),
      icon: area,
      book: "slowDays",
      content: `
      <h2>Bakersfield</h2>
      <p>11</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.074049, -118.240014),
      icon: landmark,
      book: "slowDays",
      content: `
      <h2>Dodger Stadium</h2>
      <p>39</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.01945, -118.23995),
      icon: area,
      book: "slowDays",
      content: `
      <h2>Santa Monica</h2>
      <p>53</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.1044, -118.34322),
      icon: hotel,
      book: "slowDays",
      content: `
      <h2>The landmark Motor hotel</h2>
      <p>54</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.102132, -118.335441),
      icon: food,
      book: "slowDays",
      content: `
      <h2>Musso and Frank Grill</h2>
      <p>61</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09088, -118.34642),
      icon: food,
      book: "slowDays",
      content: `
      <h2>Ports</h2>
      <p>70</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.54271, -117.78535),
      icon: area,
      book: "slowDays",
      content: `
      <h2>Laguna</h2>
      <p>81</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.10233, -118.29134),
      icon: food,
      book: "slowDays",
      content: `
      <h2>Sarno’s</h2>
      <p>94</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.83029, -116.54529),
      icon: area,
      book: "slowDays",
      content: `
      <h2>Palm Springs</h2>
      <p>97</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.5539, -117.80815),
      icon: area,
      book: "slowDays",
      content: `
      <h2>Emerald Bay</h2>
      <p>125</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09728, -118.36633),
      icon: hotel,
      book: "slowDays",
      content: `
      <h2>The Garden of Allah</h2>
      <p>139</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.10793, -118.27747),
      icon: school,
      book: "slowDays",
      content: `
      <h2>John Marshall High School</h2>
      <p>141</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09916, -118.34005),
      icon: school,
      book: "slowDays",
      content: `
      <h2>Hollywood High School</h2>
      <p>141</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.06947, -118.40353),
      icon: food,
      book: "slowDays",
      content: `
      <h2>The Luau</h2>
      <p>149</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.08178, -118.38907),
      icon: food,
      book: "slowDays",
      content: `
      <h2>Dan Tana’s</h2>
      <p>149</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.99361, -118.4799),
      icon: area,
      book: "slowDays",
      content: `
      <h2>Venice Beach</h2>
      <p>150</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09085, -118.37463),
      icon: food,
      book: "slowDays",
      content: `
      <h2>Barney’s Beanery</h2>
      <p>154</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.098083, -118.368192),
      icon: hotel,
      book: "slowDays",
      content: `
      <h2>Chateau Marmont</h2>
      <p>140</p>
      `,
    },
  ];

  let evesHollywood = [
    {
      position: new google.maps.LatLng(34.08148, -118.414168),
      map: losAngelesMap,
      icon: hotel,
      book: "evesHollywood",
      content: `
      <h2>The Beverly Hills Hotel</h2>
      <p>xx</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.067265, -118.400225),
      map: losAngelesMap,
      icon: hotel,
      book: "evesHollywood",
      content: `
      <h2>The Beverly Wilshire</h2>
      <p>xxi</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.102132, -118.335441),
      map: losAngelesMap,
      icon: food,
      book: "evesHollywood",
      content: `
      <h2>Musso and Frank Grill</h2>
      <p>xxi</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.10265, -118.337518),
      map: losAngelesMap,
      icon: nightlife,
      book: "evesHollywood",
      content: `
      <h2>Don the Beachcomber</h2>
      <p>xxi</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.098461, -118.345873),
      map: losAngelesMap,
      icon: store,
      book: "evesHollywood",
      content: `
      <h2> Consumer’s Liquor</h2>
      <p>xxii</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.098083, -118.368192),
      map: losAngelesMap,
      icon: hotel,
      book: "evesHollywood",
      content: `
      <h2>Chateau Marmont</h2>
      <p>xxii</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.081846, -118.389471),
      map: losAngelesMap,
      icon: nightlife,
      book: "evesHollywood",
      content: `
      <h2>The Troubadour</h2>
      <p>xxii</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.050808, -118.247879),
      map: losAngelesMap,
      icon: landmark,
      book: "evesHollywood",
      content: `
      <h2>Bradbury Building</h2>
      <p>xxiii</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.101603, -118.327121),
      map: losAngelesMap,
      icon: landmark,
      book: "evesHollywood",
      content: `
      <h2>Broadway Hollywood Building</h2>
      <p>xxiii</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.091924, -118.380652),
      map: losAngelesMap,
      icon: food,
      book: "evesHollywood",
      content: `
      <h2>Pupi's Combination Bakery and Sidewalk Cafe</h2>
      <p>xxiii</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.048, -118.254713),
      map: losAngelesMap,
      icon: food,
      book: "evesHollywood",
      content: `
      <h2>Clifton's Cafeteria</h2>
      <p>xxiii</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.102352, -118.319354),
      map: losAngelesMap,
      icon: misc,
      book: "evesHollywood",
      content: `
      <h2>Hawaii Theater</h2>
      <p>xxiv</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.06947, -118.40353),
      map: losAngelesMap,
      icon: food,
      book: "evesHollywood",
      content: `
      <h2>The Luau</h2>
      <p>3</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09267, -118.37849),
      map: losAngelesMap,
      icon: nightlife,
      book: "evesHollywood",
      content: `
      <h2>The Crescendo</h2>
      <p>17</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.10207, -118.32646),
      map: losAngelesMap,
      icon: landmark,
      book: "evesHollywood",
      content: `
      <h2>Hollywood & Vine</h2>
      <p>15</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09479, -118.31685),
      map: losAngelesMap,
      icon: school,
      book: "evesHollywood",
      content: `
      <h2>Josheph Le Conte Middle School</h2>
      <p>32</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.05134, -118.25021),
      map: losAngelesMap,
      icon: landmark,
      book: "evesHollywood",
      content: `
      <h2>Angels Flight Railway</h2>
      <p>57</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.08223, -118.31574),
      map: losAngelesMap,
      icon: landmark,
      book: "evesHollywood",
      content: `
      <h2>The Polar Palace</h2>
      <p>60</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.44804, -119.24288),
      map: losAngelesMap,
      icon: area,
      book: "evesHollywood",
      content: `
      <h2>Ojai</h2>
      <p>73</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.04576, -118.29956),
      map: losAngelesMap,
      icon: landmark,
      book: "evesHollywood",
      content: `
      <h2>Santa Sophia Greek Orthodox Cathedral</h2>
      <p>90</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09764, -118.36533),
      map: losAngelesMap,
      icon: landmark,
      book: "evesHollywood",
      content: `
      <h2>Schwab’s Pharmacy</h2>
      <p>95</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09031, -118.38335),
      map: losAngelesMap,
      icon: nightlife,
      book: "evesHollywood",
      content: `
      <h2>Café Society</h2>
      <p>99</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09728, -118.36633),
      map: losAngelesMap,
      icon: hotel,
      book: "evesHollywood",
      content: `
      <h2>The Garden of Allah</h2>
      <p>99</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.07877, -118.3618),
      map: losAngelesMap,
      icon: food,
      book: "evesHollywood",
      content: `
      <h2>Cantor’s</h2>
      <p>102</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.13655, -118.29419),
      map: losAngelesMap,
      icon: landmark,
      book: "evesHollywood",
      content: `
      <h2>Griffith Park</h2>
      <p>103</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09811, -118.34394),
      map: losAngelesMap,
      icon: landmark,
      book: "evesHollywood",
      content: `
      <h2>Sunset/La Brea</h2>
      <p>108</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.06914, -118.40604),
      map: losAngelesMap,
      icon: food,
      book: "evesHollywood",
      content: `
      <h2>The Boutique</h2>
      <p>118</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.07136, -118.40129),
      map: losAngelesMap,
      icon: food,
      book: "evesHollywood",
      content: `
      <h2>La Scala</h2>
      <p>121</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09084, -118.38574),
      map: losAngelesMap,
      icon: nightlife,
      book: "evesHollywood",
      content: `
      <h2>Whisky a Go Go</h2>
      <p>130</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.05064, -118.24879),
      map: losAngelesMap,
      icon: landmark,
      book: "evesHollywood",
      content: `
      <h2>Grand Central Market</h2>
      <p>142</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.10877, -118.4469),
      map: losAngelesMap,
      icon: food,
      book: "evesHollywood",
      content: `
      <h2>Four Oaks Bar</h2>
      <p>144</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.11222, -118.33912),
      map: losAngelesMap,
      icon: landmark,
      book: "evesHollywood",
      content: `
      <h2>The Hollywood Bowl</h2>
      <p>147</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.11734, -118.3753),
      map: losAngelesMap,
      icon: area,
      book: "evesHollywood",
      content: `
      <h2>Laurel Canyon</h2>
      <p>159</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.08869, -118.3788),
      map: losAngelesMap,
      icon: hotel,
      book: "evesHollywood",
      content: `
      <h2>Tropicana Motor Hotel</h2>
      <p>171</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.00903, -118.48937),
      map: losAngelesMap,
      icon: landmark,
      book: "evesHollywood",
      content: `
      <h2>Santa Monica Civic Auditorium</h2>
      <p>215</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09104, -118.28895),
      map: losAngelesMap,
      icon: landmark,
      book: "evesHollywood",
      content: `
      <h2>Hollywood Branch Library</h2>
      <p>235</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.1044, -118.34322),
      map: losAngelesMap,
      icon: hotel,
      book: "evesHollywood",
      content: `
      <h2>The Landmark Motel</h2>
      <p>272</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.058, -118.23738),
      map: losAngelesMap,
      icon: food,
      book: "evesHollywood",
      content: `
      <h2>Cielito Lindo (Taquito Place)</h2>
      <p>276</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.05713, -118.23981),
      map: losAngelesMap,
      icon: landmark,
      book: "evesHollywood",
      content: `
      <h2>Our Lady Queen of Angels Catholic Church</h2>
      <p>275</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09085, -118.37463),
      map: losAngelesMap,
      icon: food,
      book: "evesHollywood",
      content: `
      <h2>Barney’s Beanery</h2>
      <p>PAGE</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.056, -118.23741),
      map: losAngelesMap,
      icon: landmark,
      book: "evesHollywood",
      content: `
      <h2>Union Station</h2>
      <p>279</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.93885, -118.24194),
      map: losAngelesMap,
      icon: landmark,
      book: "evesHollywood",
      content: `
      <h2>The Watts Towers</h2>
      <p>284</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.06629, -118.37591),
      map: losAngelesMap,
      icon: food,
      book: "evesHollywood",
      content: `
      <h2>Benihana</h2>
      <p>288</p>
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
      book: location.book,
      icon: location.icon,
      map: losAngelesMap,
    });

    markers.push(marker);

    if (location.content) {
      let infoWindow = new google.maps.InfoWindow({
        content: location.content,
      });

      infoWindows.push(infoWindow);
    }
  }

  markers.forEach((marker) => {
    marker.addListener("click", () => {
      let index = markers.indexOf(marker)
      for (let i = 0; i < infoWindows.length; i++){
        if (i === index){
          infoWindows[i].open(map, markers[i])
        } else {
          infoWindows[i].close()
        }
      }
    });
  });

  listItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      showMarkers(event.target.id);
    });
  });

  function showMarkers(book) {
    if (book === "allBooks") {
      markers.forEach((marker) => marker.setMap(losAngelesMap));
    } else {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
        if (markers[i].book == book) {
          markers[i].setMap(losAngelesMap);
        }
      }
    }
  }
}
