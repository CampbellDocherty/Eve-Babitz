const listItems = document.querySelectorAll("li");

let losAngelesMap;

function initMap() {
  losAngelesMap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.005584, lng: -118.331521 },
    zoom: 11,
  });

  let infoWindows = [];
  let markers = [];

  let icons = {
    area: {
      icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
      name: "Area",
    },
    food: {
      icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      name: "Food",
    },
    nightlife: {
      icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
      name: "Nightlife",
    },
    landmark: {
      icon: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png",
      name: "Landmark",
    },
    hotel: {
      icon: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png",
      name: "Hotel",
    },
    store: {
      icon: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
      name: "Store",
    },
    misc: {
      icon: "http://maps.google.com/mapfiles/ms/icons/ltblue-dot.png",
      name: "Misc",
    },
    residence: {
      icon: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png",
      name: "Residence",
    },
  };

  let charming = [
    {
      position: new google.maps.LatLng(34.08178, -118.38907),
      icon: icons.food,
      book: "charming",
      content: `
        <h2>Dan Tana’s</h2>
        <p>'The Bar Where We All Go To Pick Each Other Up.' (p. 5)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.08379, -118.32083),
      icon: icons.landmark,
      book: "charming",
      content: `
        <h2>Paramount Studios</h2>
        <p>•	'The Lost Hour occurred on Friday, November 30, 1973, at Paramount Studios on stage #27 during the Senate Investigating Committee scene' (p. 11)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.08374, -118.32048),
      icon: icons.food,
      book: "charming",
      content: `
        <h2>Nickodell</h2>
        <p>'A thirties Hollywood restaurant [...] it's so Mildred Pierce.' 'It's sort of the only place in L.A. you can go without accidentally bumping into an alfalfa sprout' and 'it's a good place to discuss your nervous breakdown.' (p. 136)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.09916, -118.34005),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>Hollywood High School</h2>
        <p>'and besides, I went to Hollywood High' (p. 17)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.10128, -118.33627),
      icon: icons.landmark,
      book: "charming",
      content: `
        <h2>The Las Palmas newsstand (Universal News Agency) </h2>
        <p>'I'd run immediately to the Las Palmas newsstand to get a Tuscon Paper' (p. 18)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.09085, -118.37463),
      icon: icons.food,
      book: "charming",
      content: `
        <h2>Barney’s Beanery</h2>
        <p>'We used to hang out at Barney's Beanery for years' (37), 'the scene at Barney’s was just fabulous' (p. 241), it was ‘just this wreck of a West Hollywood chili joint’ (p. 239)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.08223, -118.31574),
      icon: icons.landmark,
      book: "charming",
      content: `
        <h2>The Polar Palace</h2>
        <p>'The first illegal boy I ever kissed (no adult supervision) was ice-skating in the ancient high-up bleachers of the Polar Palace' (p. 71)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.098726, -118.348465),
      icon: icons.store,
      book: "charming",
      content: `
        <h2>Ralph’s</h2>
        <p>'My local supermarket where anything often goes' (p. 64), it was 'fraught with live action' (p. 89) and 'this particular Ralph's on Sunset is in the heart of the most peculiar part of Hollywood' (p. 147)</p>
        `,
    },
    {
      position: new google.maps.LatLng(33.99361, -118.4799),
      icon: icons.area,
      book: "charming",
      content: `
        <h2>Venice Beach</h2>
        <p>'Santa Monica and Venice, I'm convinced, are now the centre of the universe and nothing happens anywhere that doesn't happen here on the boardwalk first' (p. 101)</p>
        `,
    },
    {
      position: new google.maps.LatLng(33.99514, -118.47694),
      icon: icons.area,
      book: "charming",
      content: `
        <h2>Main Street</h2>
        <p>Home to restaurants and cafés like Café California, the Buttery, and Le Central' (101/2)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.081846, -118.389471),
      icon: icons.nightlife,
      book: "charming",
      content: `
        <h2>The Troubadour</h2>
        <p>'Now I want it known right off that I was fourteen years old the day I first walked into the Troubadour' (p. 105), 'it looks like a mild-mannered Swiss restaurant' (106)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.08148, -118.414168),
      icon: icons.hotel,
      book: "charming",
      content: `
        <h2>The Beverly Hills Hotel</h2>
        <p>'Nothing ever dies at The Beverly Hills Hotel. It's not allowed to.' (p. 48)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.067265, -118.400225),
      icon: icons.hotel,
      book: "charming",
      content: `
        <h2>The Beverly Wilshire</h2>
        <p>(p. 43)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.098083, -118.368192),
      icon: icons.hotel,
      book: "charming",
      content: `
        <h2>Chateau Marmont</h2>
        <p>'A bastion of grace holding on by its fingernails against time’ (p. 43)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.016985, -118.493677),
      icon: icons.area,
      book: "charming",
      content: `
        <h2>Santa Monica</h2>
        <p>'Santa Monica and Venice, I'm convinced, are now the centre of the universe and nothing happens anywhere that doesn't happen here on the boardwalk first' (p. 101)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.09084, -118.38574),
      icon: icons.nightlife,
      book: "charming",
      content: `
        <h2>Whisky a Go Go</h2>
        <p> Pre-Beatles, 'the only place you could hear live rock and roll in L.A. was up at the Whisky a Go Go on the Sunset Strip' (p. 105)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.091079, -118.386195),
      icon: icons.nightlife,
      book: "charming",
      content: `
        <h2>The London Fog</h2>
        <p>'Where Jim Morrison and the Doors used to play in 1966' (p. 105)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.092917, -118.378498),
      icon: icons.nightlife,
      book: "charming",
      content: `
        <h2>The Trip</h2>
        <p>(p. 105)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.095455, -118.374111),
      icon: icons.nightlife,
      book: "charming",
      content: `
        <h2>Ciro’s</h2>
        <p>'Where the Byrds first started' (p. 105)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.08869, -118.3788),
      icon: icons.hotel,
      book: "charming",
      content: `
        <h2>Tropicana Motel</h2>
        <p>'Where at least three rock and roll bands are always waiting, ready for anything' (p. 106)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.014041, -118.49594),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>Gold’s Gym</h2>
        <p>'Gold's Gym is near the northwest corner of Second and Broadway in Santa Monica, California,' where she interviews Lisa Lyon (p. 127)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.067512, -118.400801),
      icon: icons.store,
      book: "charming",
      content: `
        <h2>Tiffany’s</h2>
        <p>'the doors to Tiffany's in Beverly Hills are every bit as enormous and twelve times as forbidding as the Gates of Paradise in Florence' (p. 138)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.019406, -118.506483),
      icon: icons.store,
      book: "charming",
      content: `
        <h2>Sorrento Beach</h2>
        <p>'Where she goes when she ditches school' (p. 143)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.101934, -118.338231),
      icon: icons.store,
      book: "charming",
      content: `
        <h2>Snow White’s Cafe</h2>
        <p>'Where we always had our nine cigarettes and hash-brown potatoes before school' (p. 146)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.113177, -118.274455),
      icon: icons.landmark,
      book: "charming",
      content: `
        <h2>Immaculate Heart of Mary Convent</h2>
        <p>'A giant estate overlooking the entire smog-laden city' (p. 156)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.113177, -118.274455),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>Yoga Center</h2>
        <p>Where she takes Ashtanga yoga classes (p. 161) (approx. location)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.099581, -118.332878),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>Hollywood YMCA</h2>
        <p>'The Y was noisy and filled with old people and kids, and I felt so at home there, it was as though I'd just returned from the moon' (p. 164) and where she takes ballroom dancing lessons (p. 167) (approx. location)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.091658, -118.381119),
      icon: icons.food,
      book: "charming",
      content: `
        <h2> Le Dôme </h2>
        <p>'a ridiculous bastion of iniquity' (p. 165)</p>
        `,
    },

    {
      position: new google.maps.LatLng(34.092185, -118.380039),
      icon: icons.area,
      book: "charming",
      content: `
        <h2>Sunset Strip</h2>
        <p>'glorious Sunset Strip, which today, because it's so clear and windy, is like a painting of Monte Carlo by the sea' (p. 173)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.073701, -118.276688),
      icon: icons.nightlife,
      book: "charming",
      content: `
        <h2>Helena’s</h2>
        <p>'I have never even been to Helena's. I mean, I don't even know where, downtown, it is' (p. 179)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.105764, -118.372174),
      icon: icons.residence,
      book: "charming",
      content: `
        <h2>House on Kirkwood</h2>
        <p>'There were maybe a hundred people in this abandoned house in Laurel Canyon on Kirkwood' (p. 180) approx. location</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.105998, -118.318468),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>a Laundromat</h2>
        <p>'I was doing my sheets at a laundromat on Bronson' (p. 181)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.084636, -118.385723),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>Margo Leavin Gallery</h2>
        <p>She goes to an art exhibit that has come from New York (p. 189)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.064092, -118.359272),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>L.A. County Museum of Art</h2>
        <p> During the fifties 'the only thing in the county art museum that was the least bit alluring to me and my sister was the Egyptian mummy' (p. 191)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.129081, -118.114524),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>Henry E. Huntington Library and Art Gallery</h2>
        <p>'In L.A. at that time [the fifties], in other words, if you wanted to see real art, you went to the Henry E. Huntington Library and Art Gallery' (p. 191)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.084345, -118.376811),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>Ferus Gallery</h2>
        <p>In '1957 or so,' Walter Hopps III opened the Ferus Gallery and 'the myth of the West began to solidify' (p. 192)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.040833, -118.447356),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>James Corcoran Gallery</h2>
        <p>Joe Goode had a show here called '"Ocean Blue Series" that was so beautiful and radiant that just seeing the things made you feel lit from within' (p. 195)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.083465, -118.367415),
      icon: icons.nightlife,
      book: "charming",
      content: `
        <h2>The Ash Grove</h2>
        <p>'In the sixties, people in L.A. with romantic streaks who knew music went for [...] 'clubs like the Troubadour and the Trip and the Ash Grove.' (p. 221)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.089777, -118.412753),
      icon: icons.area,
      book: "charming",
      content: `
        <h2>Coldwater</h2>
        <p>The last time she saw Jim Morrison with no shirt on (his body 'ravaged by scars, toxins, and puffy pudginess') was 'at a party up in Coldwater' (p. 224)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.059507, -118.376145),
      icon: icons.food,
      book: "charming",
      content: `
        <h2>Ships</h2>
        <p>Jim Morrison would suggest to her "Let's go to Ships and get blueberry pancakes with blueberry syrup" (p. 224) (approx. location, closest to her home)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.088353, -118.292688),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>Los Angeles Community College</h2>
        <p>'In 1962, when I was nineteen, I was going to L.A. Community College (because you could park, unlike at UCLA)' (p. 239)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.097309, -118.317996),
      icon: icons.residence,
      book: "charming",
      content: `
        <h2>Home on Bronson Avenue</h2>
        <p>'I was living in this little paper bungalow--one room with a typewriter--on Bronson Avenue in Hollywood' (p. 241) (approx. location)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.102132, -118.335441),
      map: losAngelesMap,
      icon: icons.food,
      book: "charming",
      content: `
        <h2>Musso and Frank Grill</h2>
        <p>'One night, we were leaving Musso's when [Walter Hopps] looked at his watch and said, "Good, I still have time to get to Bel Air and sell that Duchamp' (p. 242)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.146229, -118.159162),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>Pasadena Art Museum</h2>
        <p>Where the photo of her playing chess against Duchamp is taken and immortalized: 'this large, too-L.A. surfer girl with an extremely tiny old man in a French suit. Playing Chess.' (p. 245)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.018535, -118.49336),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>Santa Monica Public Library</h2>
        <p>Where a symposium about Duchamp's work was held (p. 249)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.015768, -118.491965),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>Fred Segal’s</h2>
        <p>250</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.025831, -118.34978),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>Shoshana Wayne Gallery</h2>
        <p>252</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.058546, -118.406821),
      icon: icons.landmark,
      book: "charming",
      content: `
        <h2>Roxbury Park</h2>
        <p>307</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.147521, -118.425765),
      icon: icons.area,
      book: "charming",
      content: `
        <h2>Sherman Oaks</h2>
        <p>308</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.037882, -118.676998),
      icon: icons.food,
      book: "charming",
      content: `
        <h2>Malibu Inn</h2>
        <p>318</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.090465, -118.384932),
      icon: icons.nightlife,
      book: "charming",
      content: `
        <h2>The Viper Room</h2>
        <p>333</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.437557, -119.254845),
      icon: icons.hotel,
      book: "charming",
      content: `
        <h2>Ojai Valley Inn</h2>
        <p>342</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.124539, -118.149937),
      icon: icons.food,
      book: "charming",
      content: `
        <h2>The Raymond Restaurant</h2>
        <p>357</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.059647, -118.20814),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>Los Angeles County-USC Medical Center</h2>
        <p>359</p>
        `,
    },

    {
      position: new google.maps.LatLng(34.14635, -118.256811),
      icon: icons.store,
      book: "charming",
      content: `
        <h2>The Glendale Galleria</h2>
        <p>364</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.049332, -118.217185),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>White Memorial</h2>
        <p>366</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.06745, -118.399159),
      icon: icons.store,
      book: "charming",
      content: `
        <h2>Fiorucci</h2>
        <p>375</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.105265, -118.319238),
      icon: icons.area,
      book: "charming",
      content: `
        <h2>Franklin Ave.</h2>
        <p>291</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.095384, -118.291777),
      icon: icons.area,
      book: "charming",
      content: `
        <h2>Vermont Ave.</h2>
        <p>291</p>
        `,
    },
  ];

  let slowDays = [
    {
      position: new google.maps.LatLng(33.84383, -118.16778),
      icon: icons.landmark,
      book: "slowDays",
      content: `
      <h2>Forest Lawn</h2>
      <p>7</p>
      `,
    },
    {
      position: new google.maps.LatLng(35.37329, -119.01871),
      icon: icons.area,
      book: "slowDays",
      content: `
      <h2>Bakersfield</h2>
      <p>11</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.074049, -118.240014),
      icon: icons.landmark,
      book: "slowDays",
      content: `
      <h2>Dodger Stadium</h2>
      <p>39</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.016985, -118.493677),
      icon: icons.area,
      book: "slowDays",
      content: `
      <h2>Santa Monica</h2>
      <p>53</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.1044, -118.34322),
      icon: icons.hotel,
      book: "slowDays",
      content: `
      <h2>The Landmark Motor hotel</h2>
      <p>54</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.102132, -118.335441),
      icon: icons.food,
      book: "slowDays",
      content: `
      <h2>Musso and Frank Grill</h2>
      <p>61</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09088, -118.34642),
      icon: icons.food,
      book: "slowDays",
      content: `
      <h2>Ports</h2>
      <p>70</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.54271, -117.78535),
      icon: icons.area,
      book: "slowDays",
      content: `
      <h2>Laguna</h2>
      <p>81</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.10233, -118.29134),
      icon: icons.food,
      book: "slowDays",
      content: `
      <h2>Sarno’s</h2>
      <p>94</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.83029, -116.54529),
      icon: icons.area,
      book: "slowDays",
      content: `
      <h2>Palm Springs</h2>
      <p>97</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.5539, -117.80815),
      icon: icons.area,
      book: "slowDays",
      content: `
      <h2>Emerald Bay</h2>
      <p>125</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09728, -118.36633),
      icon: icons.hotel,
      book: "slowDays",
      content: `
      <h2>The Garden of Allah</h2>
      <p>139</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.10793, -118.27747),
      icon: icons.misc,
      book: "slowDays",
      content: `
      <h2>John Marshall High School</h2>
      <p>141</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09916, -118.34005),
      icon: icons.misc,
      book: "slowDays",
      content: `
      <h2>Hollywood High School</h2>
      <p>141</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.06947, -118.40353),
      icon: icons.food,
      book: "slowDays",
      content: `
      <h2>The Luau</h2>
      <p>149</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.08178, -118.38907),
      icon: icons.food,
      book: "slowDays",
      content: `
      <h2>Dan Tana’s</h2>
      <p>149</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.99361, -118.4799),
      icon: icons.area,
      book: "slowDays",
      content: `
      <h2>Venice Beach</h2>
      <p>150</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09085, -118.37463),
      icon: icons.food,
      book: "slowDays",
      content: `
      <h2>Barney’s Beanery</h2>
      <p>154</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.098083, -118.368192),
      icon: icons.hotel,
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
      icon: icons.hotel,
      book: "evesHollywood",
      content: `
      <h2>The Beverly Hills Hotel</h2>
      <p>In her dedication: 'and to The Beverly Hills Hotel.' (p. xx)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.067265, -118.400225),
      map: losAngelesMap,
      icon: icons.hotel,
      book: "evesHollywood",
      content: `
      <h2>The Beverly Wilshire</h2>
      <p>In her dedication: 'and to the Eggs Benedict at The Beverly Wilshire.' (p. xxi)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.102132, -118.335441),
      map: losAngelesMap,
      icon: icons.food,
      book: "evesHollywood",
      content: `
      <h2>Musso and Frank Grill</h2>
      <p>In her dedication: ‘and to the Sandabs at Musso’s…’ (p. xxi)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.10265, -118.337518),
      map: losAngelesMap,
      icon: icons.nightlife,
      book: "evesHollywood",
      content: `
      <h2>Don the Beachcomber</h2>
      <p>In her dedication: ‘and to the crabpuffs at Don the Beachcomber’s’ (p. xxi)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.098461, -118.345873),
      map: losAngelesMap,
      icon: icons.store,
      book: "evesHollywood",
      content: `
      <h2> Consumer’s Liquor</h2>
      <p>In her dedication: ‘and to the future good will of Consumer’s Liquor, the best liquor store in America and aptly named.’ (p. xxii) </p>
      `,
    },
    {
      position: new google.maps.LatLng(34.098083, -118.368192),
      map: losAngelesMap,
      icon: icons.hotel,
      book: "evesHollywood",
      content: `
      <h2>Chateau Marmont</h2>
      <p>In her dedication: ‘and to the Chateau Marmont’ (p. xxii)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.081846, -118.389471),
      map: losAngelesMap,
      icon: icons.nightlife,
      book: "evesHollywood",
      content: `
      <h2>The Troubadour</h2>
      <p>‘…the spill all over the floor of the Troubadour ladies’ room’ (p. xxii)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.050808, -118.247879),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Bradbury Building</h2>
      <p>In her dedication: ‘and to the land, the beach, the trees, the hills, the sky, the Bradbury Building, the Broadway Hollywood and all the flowers in spring’ (p. xxiii) </p>
      `,
    },
    {
      position: new google.maps.LatLng(34.101603, -118.327121),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Broadway Hollywood Building</h2>
      <p>In her dedication: ‘and to the land, the beach, the trees, the hills, the sky, the Bradbury Building, the Broadway Hollywood and all the flowers in spring’ (p. xxiii)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.091924, -118.380652),
      map: losAngelesMap,
      icon: icons.food,
      book: "evesHollywood",
      content: `
      <h2>Pupi's Combination Bakery and Sidewalk Cafe</h2>
      <p>In her dedication: ‘and to tea cakes, chocolate rabbits, Pupi’s, Clifton’s (p. xxiii)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.048, -118.254713),
      map: losAngelesMap,
      icon: icons.food,
      book: "evesHollywood",
      content: `
      <h2>Clifton's Cafeteria</h2>
      <p>In her dedication: ‘and to tea cakes, chocolate rabbits, Pupi’s, Clifton’s (p. xxiii)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.102352, -118.319354),
      map: losAngelesMap,
      icon: icons.misc,
      book: "evesHollywood",
      content: `
      <h2>Hawaii Theater</h2>
      <p>In her dedication: ‘and to the Hawaii Theatre of my youth’ (p. xxiv)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.06947, -118.40353),
      map: losAngelesMap,
      icon: icons.food,
      book: "evesHollywood",
      content: `
      <h2>The Luau</h2>
      <p>'a ratty old crazy Tahitian place in Beverly Hills with blue lagoons and gardenias in the drinks' (p. 17)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09267, -118.37849),
      map: losAngelesMap,
      icon: icons.nightlife,
      book: "evesHollywood",
      content: `
      <h2>The Crescendo</h2>
      <p>(p. 17)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.10207, -118.32646),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Hollywood & Vine</h2>
      <p>Overheard a family of tourists sigh with 'unnoticed despondence': “well… here we are… Hollywood and Vine.'(p. 15)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09479, -118.31685),
      map: losAngelesMap,
      icon: icons.misc,
      book: "evesHollywood",
      content: `
      <h2>Josheph Le Conte Middle School</h2>
      <p>(p. 32)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.05134, -118.25021),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Angels Flight Railway</h2>
      <p>'It cost a nickel to go on Angel's Flight, the world's shortest railroad, located once in downtown L.A. and now gone.' (p. 57)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.08223, -118.31574),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>The Polar Palace</h2>
      <p>60</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.44804, -119.24288),
      map: losAngelesMap,
      icon: icons.area,
      book: "evesHollywood",
      content: `
      <h2>Ojai</h2>
      <p>73</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.04576, -118.29956),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Santa Sophia Greek Orthodox Cathedral</h2>
      <p>‘the Greek Orthodox Church down on Pico and Normandy’ (p. 90)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09764, -118.36533),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Schwab’s Pharmacy</h2>
      <p>95</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09031, -118.38335),
      map: losAngelesMap,
      icon: icons.nightlife,
      book: "evesHollywood",
      content: `
      <h2>Café Society</h2>
      <p>'...we were in Café Society at night and school in the daytime.' (p. 99)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09728, -118.36633),
      map: losAngelesMap,
      icon: icons.hotel,
      book: "evesHollywood",
      content: `
      <h2>The Garden of Allah</h2>
      <p>99</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.07877, -118.3618),
      map: losAngelesMap,
      icon: icons.food,
      book: "evesHollywood",
      content: `
      <h2>Cantor’s</h2>
      <p>102</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.13655, -118.29419),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Griffith Park</h2>
      <p>103</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09811, -118.34394),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Sunset/La Brea</h2>
      <p>108</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.06914, -118.40604),
      map: losAngelesMap,
      icon: icons.food,
      book: "evesHollywood",
      content: `
      <h2>The Boutique</h2>
      <p>‘at the corner of Little Santa Monica and Beverly Drive’ (p. 118)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.07136, -118.40129),
      map: losAngelesMap,
      icon: icons.food,
      book: "evesHollywood",
      content: `
      <h2>La Scala</h2>
      <p>'The fancy resturant, La Scala, is where you go if you want dependable, expensive, high-class Italian food in Beverly Hills.' (p. 121)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09084, -118.38574),
      map: losAngelesMap,
      icon: icons.nightlife,
      book: "evesHollywood",
      content: `
      <h2>Whisky a Go Go</h2>
      <p>130</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.05064, -118.24879),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Grand Central Market</h2>
      <p>'It's like Baghdad' (p. 142)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.10877, -118.4469),
      map: losAngelesMap,
      icon: icons.food,
      book: "evesHollywood",
      content: `
      <h2>Four Oaks Bar</h2>
      <p>'An artists' bar in Beverly Glen' (p. 144)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.11222, -118.33912),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>The Hollywood Bowl</h2>
      <p>147</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.11734, -118.3753),
      map: losAngelesMap,
      icon: icons.area,
      book: "evesHollywood",
      content: `
      <h2>Laurel Canyon</h2>
      <p>159</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.08869, -118.3788),
      map: losAngelesMap,
      icon: icons.hotel,
      book: "evesHollywood",
      content: `
      <h2>Tropicana Motor Hotel</h2>
      <p>171</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.00903, -118.48937),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Santa Monica Civic Auditorium</h2>
      <p>215</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09104, -118.28895),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Hollywood Branch Library</h2>
      <p>235</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.1044, -118.34322),
      map: losAngelesMap,
      icon: icons.hotel,
      book: "evesHollywood",
      content: `
      <h2>The Landmark Motel</h2>
      <p>272</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.058, -118.23738),
      map: losAngelesMap,
      icon: icons.food,
      book: "evesHollywood",
      content: `
      <h2>Cielito Lindo (Taquito Place)</h2>
      <p>276</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.05713, -118.23981),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Our Lady Queen of Angels Catholic Church</h2>
      <p>275</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.056, -118.23741),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Union Station</h2>
      <p>Union Station, the railroad station that is so magnificent and legendary' (p. 279)</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.93885, -118.24194),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>The Watts Towers</h2>
      <p>‘Watts isn’t Harlem, but its ugly and smoggy and flat and plantless’ (p. 284)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.06629, -118.37591),
      map: losAngelesMap,
      icon: icons.food,
      book: "evesHollywood",
      content: `
      <h2>Benihana</h2>
      <p>‘a Japanese restaurant on La Cienega’ (p. 288)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.088353, -118.292688),
      icon: icons.misc,
      book: "evesHollywood",
      content: `
      <h2>Los Angeles City College</h2>
      <p>'L.A.C.C. didn't even make a stab at school spirit even in jest.' (p. 154)</p>
      `,
    },

    {
      position: new google.maps.LatLng(33.79095, -118.399684),
      icon: icons.residence,
      book: "evesHollywood",
      content: `
      <h2>Palos Verdes (the house of Joseph Szigeti)</h2>
      <p>'it was there that I first ate figs.' (p. 6)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.090942, -118.388248),
      icon: icons.nightlife,
      book: "evesHollywood",
      content: `
      <h2>The Rainbow</h2>
      <p>'It is a hellish place, desperate and crowded' (p. 246)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09085, -118.37463),
      icon: icons.food,
      book: "evesHollywood",
      content: `
      <h2>Barney’s Beanery</h2>
      <p>275</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.091278, -118.34629),
      icon: icons.residence,
      book: "evesHollywood",
      content: `
      <h2>Home on Formosa (approx.) </h2>
      <p>'It has a certain rural quality' (p. 196)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.1114, -118.320195),
      icon: icons.residence,
      book: "evesHollywood",
      content: `
      <h2>Home on Cheremoya Avenue (approx.) </h2>
      <p>Lived here with her parents 'when I first started going to L.A.C.C.' (p. 154)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.019406, -118.506483),
      icon: icons.area,
      book: "evesHollywood",
      content: `
      <h2>Sorrento Beach</h2>
      <p>'a dispassionate beach' (p. 50)</p>
      `,
    },
  ];

  let allBookLocations = [...charming, ...slowDays, ...evesHollywood];
  for (let i = 0; i < allBookLocations.length; i++) {
    addMarker(allBookLocations[i]);
  }

  function addMarker(location) {
    let marker = new google.maps.Marker({
      position: location.position,
      book: location.book,
      type: location.icon.name,
      icon: location.icon.icon,
      map: losAngelesMap,
    });

    markers.push(marker);

    if (location.content) {
      let infoWindow = new google.maps.InfoWindow({
        content: location.content,
        maxWidth: 200
      });

      infoWindows.push(infoWindow);
    }
  }

  let legend = document.querySelector("#legend");
  for (let key in icons) {
    let name = icons[key].name;
    let icon = icons[key].icon;
    let div = document.createElement("div");
    div.setAttribute("class", "key-item");
    div.innerHTML = `<img src="${icon}">` + name;
    legend.appendChild(div);
  }
  losAngelesMap.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);

  markers.forEach((marker) => {
    marker.addListener("click", () => {
      let index = markers.indexOf(marker);
      for (let i = 0; i < infoWindows.length; i++) {
        if (i === index) {
          infoWindows[i].open(map, markers[i]);
        } else {
          infoWindows[i].close();
        }
      }
    });
  });

  let keyItems = document.querySelectorAll(".key-item");
  keyItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      showKeyMarkers(event.target.textContent);
    });
  });

  listItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      infoWindows.forEach((info) => info.close());
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

  function showKeyMarkers(key) {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
      if (markers[i].type == key) {
        markers[i].setMap(losAngelesMap);
      }
    }
  }
}
