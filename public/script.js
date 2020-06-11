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
        <p>'The Lost Hour occurred on Friday, November 30, 1973, at Paramount Studios on stage #27 during the Senate Investigating Committee scene' (p. 11)</p>
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
        <h2>The Chateau Marmont</h2>
        <p>'The Chateau Marmont, with its slow elevators, high ceilings, and amazing views, is a bastion of grace holding on by its fingernails against time.’ (p. 43)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.092155, -118.377616),
      icon: icons.hotel,
      book: "charming",
      content: `
        <h2>The Sunset Marquis</h2>
        <p>'The Sunset Marquis is pure L.A.’ (p. 44)</p>
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
        <p>'Suddenly the entire Strip was one long problem for the West Hollywood Sheriff's Department, what with-' the Trip is on this list. (p. 105)</p>
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
        <p>She goes to an art exhibit here that has come from New York (p. 189)</p>
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
        <p>Where a symposium about Duchamp's work was held that Babitz attended (p. 249)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.015768, -118.491965),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>Fred Segal’s</h2>
        <p>‘This fancy clothing store with a café inside’ (p. 250)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.025831, -118.34978),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>Shoshana Wayne Gallery</h2>
        <p>'Where Julian [Wesser] had a display of his pictures [including] that day I played chess with Duchamp and surprised Walter [Hopps] (p. 252)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.058546, -118.406821),
      icon: icons.landmark,
      book: "charming",
      content: `
        <h2>Roxbury Park</h2>
        <p>‘If we were to live in a tent city, we hoped it would be in Roxbury Park’ (p. 307)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.147521, -118.425765),
      icon: icons.area,
      book: "charming",
      content: `
        <h2>Sherman Oaks</h2>
        <p>'Yesterday I drove out to the Valley, to Sherman Oaks, where places I used to like going to are now ground down, shattered, have huge strange cracks in them, and otherwise seemed shaken to their cores' (p. 308)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.037882, -118.676998),
      icon: icons.food,
      book: "charming",
      content: `
        <h2>Malibu Inn</h2>
        <p>‘This great old, traditional diner’ (p. 318)</p>
        `,
    },
     {
      position: new google.maps.LatLng(34.437557, -119.254845),
      icon: icons.hotel,
      book: "charming",
      content: `
        <h2>Ojai Valley Inn</h2>
        <p>'The fabulous Ojai Valley Inn' '(on Sundays they actually had blintzes which for a Republican-type golf place is amazingly Jewish) (p. 342)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.124539, -118.149937),
      icon: icons.food,
      book: "charming",
      content: `
        <h2>The Raymond Restaurant</h2>
        <p>'Here's what you would have witnessed if you happened to be standing outside the Raymond restaurant in Pasadena on April 13, 1997: A '68 VW Bug comes to a stop, a woman flies out, skirt aflame. She drops to the ground by the side of the road, rolls on the grass, setting the grass along the side of the road on fire, and then against the green bushes, setting those on fire too. "Oh no, oh no!" is all she can manage. That woman was me.' (p. 357)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.059647, -118.20814),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>Los Angeles County-USC Medical Center</h2>
        <p>'I was admitted into the burn intesive care unit at Los Angeles County-USC Medical Center.' (p. 359)</p>
        `,
    },

    {
      position: new google.maps.LatLng(34.14635, -118.256811),
      icon: icons.store,
      book: "charming",
      content: `
        <h2>The Glendale Galleria</h2>
        <p>'I held on to the happy thought of being well enough to go back to the Glendale Galleria, not far from my house' (p. 364)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.049332, -118.217185),
      icon: icons.misc,
      book: "charming",
      content: `
        <h2>White Memorial</h2>
        <p>'a rehab hospital not far from County [...] my sister assured me that compared to where I was, White was the Beverly Hills Hotel' [after time spent in the burn intesive care unit at Los Angeles County-USC Medical Center, she transferred here] (p. 366)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.06745, -118.399159),
      icon: icons.store,
      book: "charming",
      content: `
        <h2>Fiorucci</h2>
        <p>‘a couple of years ago I made my first trip to Fiorucci, in Beverly Hills, just off Rodeo Drive.’ (p. 375)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.105265, -118.319238),
      icon: icons.area,
      book: "charming",
      content: `
        <h2>Franklin Ave.</h2>
        <p>Driving home after dropping a lit match onto her skirt, which caught fire and caused third-degree burns all over her legs: 'Now I was getting close to home. All I had to do was turn onto Franklin…’ (p. 291)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.095384, -118.291777),
      icon: icons.area,
      book: "charming",
      content: `
        <h2>Vermont Ave.</h2>
        <p>‘On Vermont Avenue in East Hollywood, there are almost three blocks of hippiness.’ (p. 291)</p>
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
      <p>‘an example of eternity carried to its logical conclusion’ (p. 7)</p>
      `,
    },
    {
      position: new google.maps.LatLng(35.37329, -119.01871),
      icon: icons.area,
      book: "slowDays",
      content: `
      <h2>Bakersfield</h2>
      <p>‘Bakersfield has a smog problem so that sunsets around there are just heaven’ (p. 11)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.074049, -118.240014),
      icon: icons.landmark,
      book: "slowDays",
      content: `
      <h2>Dodger Stadium</h2>
      <p>'I've been halfway around the world in a plane and witnessed revolutions in Trafalger Square, but nobody has ever asked me to see a baseball game in my whole American life' (p. 42)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.016985, -118.493677),
      icon: icons.area,
      book: "slowDays",
      content: `
      <h2>Santa Monica</h2>
      <p>'Out in Santa Monica there is a huge building with many floors and lots of its own beach front.' (p. 53)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.1044, -118.34322),
      icon: icons.hotel,
      book: "slowDays",
      content: `
      <h2>The Landmark Motor hotel</h2>
      <p>‘We went to the Landmark Motor Hotel. It was daytime. We entered the courtyard swimming area and there, in the pool, with a greyish-white Irish washerwoman complexion and wearing a black one-piece bathing suit, was Janis Joplin, floating. The blue pool flickered around her. […] A week later she died.’ (p. 54)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.102132, -118.335441),
      icon: icons.food,
      book: "slowDays",
      content: `
      <h2>Musso and Frank Grill</h2>
      <p>'The Bloody Marys at Musso & Frank's Restaurant are unparalleled in Western thought and can cure anything.' (p. 61) and '(I don't care what time it is, I ALWAYS get creamed spinach at Musso's. It's the nutmeg.)' (p. 62) </p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09088, -118.34642),
      icon: icons.food,
      book: "slowDays",
      content: `
      <h2>Ports</h2>
      <p>'Ports takes to rain oddly. When Ports opened, the first day I ever went there, it was raining outside and I fell in love with the place [...] and the next thing you know I was being a waitress for three months for free.' (p. 85)</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.824347, -116.546977),
      icon: icons.food,
      book: "slowDays",
      content: `
      <h2>Hamburger Hamlet</h2>
      <p>'The one in Palm Springs is a travesty, and not worth the cardboard the menu is printed on.' (p. 116)</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.54271, -117.78535),
      icon: icons.area,
      book: "slowDays",
      content: `
      <h2>Laguna</h2>
      <p>'On the weekend following the night I wound up at Shawn's, we drove down to Laguna and stayed with some friends of his.' (p. 81)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.10233, -118.29134),
      icon: icons.food,
      book: "slowDays",
      content: `
      <h2>Sarno’s</h2>
      <p>'Sarno’s is an Italian coffee bar and it would make Al Stills feel perfect' (p. 94)</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.83029, -116.54529),
      icon: icons.area,
      book: "slowDays",
      content: `
      <h2>Palm Springs</h2>
      <p>'The peace that some claim to find in all that sand will never happen to me in Palm Springs' (p. 121)</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.5539, -117.80815),
      icon: icons.area,
      book: "slowDays",
      content: `
      <h2>Emerald Bay</h2>
      <p>'There were, I thought, no surprises from without in Emerald Bay' (p. 125)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09728, -118.36633),
      icon: icons.hotel,
      book: "slowDays",
      content: `
      <h2>The Garden of Allah</h2>
      <p>'You can’t tear down places like the Garden of Allah and just expect them to cease. All that Hollywoodness has to go somewhere.’ (p. 140)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.10793, -118.27747),
      icon: icons.misc,
      book: "slowDays",
      content: `
      <h2>John Marshall High School</h2>
      <p>'It's all so normal and American that they always use Marshall on locations when they need a typical Midwestern high school' (p. 141)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09916, -118.34005),
      icon: icons.misc,
      book: "slowDays",
      content: `
      <h2>Hollywood High School</h2>
      <p>'Hollywood High, where I was legally zoned, was rounded, voluptuous, palm-treed, and banana-leaved and sprawled out onto Sunset and Highland, where men with convertibles and green eyes cruised by at three to watch the girls. I was afraid to go there.' (p. 141)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.06947, -118.40353),
      icon: icons.food,
      book: "slowDays",
      content: `
      <h2>The Luau</h2>
      <p>'(They have huge rum drinks at The Luau in which gardenias float.)' (p. 149)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.08178, -118.38907),
      icon: icons.food,
      book: "slowDays",
      content: `
      <h2>Dan Tana’s</h2>
      <p>'Tana's is where everyone picks each other up and eats garlic [...] Tana's, with it quaint red and white tablecloths, its spinach salads, and the drunken endless waits for tables.' (p. 149)</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.99361, -118.4799),
      icon: icons.area,
      book: "slowDays",
      content: `
      <h2>Venice Beach</h2>
      <p>'Venice that summer looked like a Hopper painting.' (p. 150)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09085, -118.37463),
      icon: icons.food,
      book: "slowDays",
      content: `
      <h2>Barney’s Beanery</h2>
      <p>'I first saw Daniel Wiley fifteen years ago at Barney’s Beanery.' (p. 154)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.090516, -118.346036),
      icon: icons.food,
      book: "slowDays",
      content: `
      <h2>Formosa Café</h2>
      <p>'We sat in the boxcar of the Formosa Café and dawdled away the afternoon [...] it's an old railroad car papered with 8x10 glossies of Betty Grable and Zachary Scott. We had rumaki and mai-tais.' (p. 58)</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.543325, -117.788397),
      icon: icons.food,
      book: "slowDays",
      content: `
      <h2>Victor Hugo Restaurant</h2>
      <p>'...we turned north and drove up a few blocks past the Victor Hugo Restaurant, where Shawn and I later took Jo one afternoon for three Margaritas apiece' (128)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.064092, -118.359272),
      icon: icons.misc,
      book: "slowDays",
      content: `
        <h2>L.A. County Museum of Art</h2>
        <p>'When I was growing up, civilized friends of my parents' and even my parents used to complain all the time about how L.A. County Art Museum was a travesty unparalleled anywhere for dopiness.' (p. 8)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.084345, -118.376811),
      icon: icons.misc,
      book: "slowDays",
      content: `
        <h2>Ferus Gallery</h2>
        <p>'the Ferus Gallery began exposing the rest of the country to Los Angeles art in the fifties' (p. 9)</p>
        `,
    },
    {
      position: new google.maps.LatLng(34.098083, -118.368192),
      icon: icons.hotel,
      book: "slowDays",
      content: `
      <h2>The Chateau Marmont</h2>
      <p>'I'd gone over for a drink at a friend's at the Chateau, and forty-eight hours later the elevator doors opened out to the basement parking lot where I had thoughtlessly parked, telling the attendent I'd only be a minute.' (156) 
      ‘The awkward basement pillars of the Chateau Marmont support the past.’ (p. 161)</p>
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
      <p>'The Beverly Hills Hotel poolside was mostly Fag-Rock entourage that day' (p. 170). Also features in her lengthy dedication (p. xx)</p>
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
      <p>In her dedication: ‘and to the Sandabs at Musso’s’ (p. xxi)</p>
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
      <h2>The Chateau Marmont</h2>
      <p>‘I spent the [Watts] riots in a penthouse at the Chateau Marmont.’ (p. 143) Also features in her lengthy dedication. (p. xxii)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.081846, -118.389471),
      map: losAngelesMap,
      icon: icons.nightlife,
      book: "evesHollywood",
      content: `
      <h2>The Troubadour</h2>
      <p>'a smart music business bar with hardly any Mafia.' (p. 78)</p>
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
      position: new google.maps.LatLng(34.09916, -118.34005),
      icon: icons.misc,
      book: "evesHollywood",
      content: `
        <h2>Hollywood High School</h2>
        <p>‘Unlike most people my age who claim to recall Elvis when they think of high school or think of high school when they hear Elvis, I can only see faces, clothes, and hear the laughter of the girls who went to my school, and the feelings—the aches and pirouettes and joys come not from music, books, fear of finals, hatred or love of teachers—but from the people who sat next to me or who I saw in the halls during the years I spent in Hollywood High.’ (p. 78)</p>
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
      <p>'A ratty old crazy Tahitian place in Beverly Hills with blue lagoons and gardenias in the drinks' (p. 17)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09267, -118.37849),
      map: losAngelesMap,
      icon: icons.nightlife,
      book: "evesHollywood",
      content: `
      <h2>The Crescendo</h2>
      <p>A West Hollywood jazz venue (p. 17)</p>
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
      <p>'The first year and a half I went to Le Conte Jr. High I read fairy tales.' (p. 194)</p>
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
      <p>'The worst thing about the Polar Palace though wasn't that my hair went straight in the midst of fog and Tweed, it was that I didn't like it.' (p. 60)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.44804, -119.24288),
      map: losAngelesMap,
      icon: icons.area,
      book: "evesHollywood",
      content: `
      <h2>Ojai</h2>
      <p>'It was a beautiful Sunday, windy, and we drove up the coast to Ojai, which is inland and just South of Santa Barbara' (p. 73)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.04576, -118.29956),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Santa Sophia Greek Orthodox Cathedral</h2>
      <p>‘The Greek Orthodox Church down on Pico and Normandy is in that section of town where none of my peers would ever find themselves because it's not near any freeway exists and besides, what's down there?’ (p. 90)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09764, -118.36533),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Schwab’s Pharmacy</h2>
      <p> A drugstore in Hollywood that was a popular hangout for movie industry people: ‘Thirty-six years after Evelyn Venable saw past Death, I sat in Schwab’s drinking coffee with my actor/race-track friends whom I’ve known all my life but can’t remember where from and we’re discussing impossible possibilities, frittering away the afternoon.’ (p. 95)</p>
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
      <p>'We were both virgins, too, as we drank in the Garden of Allah bar with fake I.D.s and tried to be clever around men twice as old as us.' (p. 99)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.07877, -118.3618),
      map: losAngelesMap,
      icon: icons.food,
      book: "evesHollywood",
      content: `
      <h2>Cantor’s</h2>
      <p>'Everyone would leave the Strip at 2 when the clubs closed and go to Cantor's en masse' (p. 252)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.13655, -118.29419),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Griffith Park</h2>
      <p>'When I was in the Brownies in the 4th grade and we went to Griffith Park for a Hot Dog Cookout, they wouldn't let us wander in the hills alone.' (p. 103)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09811, -118.34394),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Sunset/La Brea</h2>
      <p>'The other day I was driving past La Brea and Sunset. There are a lot of hookers around there and the competition’s gotten pretty stiff, so you’re liable to see anything coming down the street.’ (p. 108)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.06914, -118.40604),
      map: losAngelesMap,
      icon: icons.food,
      book: "evesHollywood",
      content: `
      <h2>The Boutique</h2>
      <p>‘The best thing you can get at The Boutique aside from the devastating chocolate mousse is a Leon Salad and glimpses of people you never believe live.’ (p. 118)</p>
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
      <p>‘At night they [Gram Parsons and Keith Richards] would come into town and rehearse and record at an undisclosed studio. Sometimes, if they finished early enough, they’d go to the Whisky and catch a last set. I saw them once.’ (p. 130)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.05064, -118.24879),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Grand Central Market</h2>
      <p>'It's like Baghdad.' (p. 142)</p>
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
      <p>'The Hollywood Bowl seats something like 20,000 people' (p. 147)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.11734, -118.3753),
      map: losAngelesMap,
      icon: icons.area,
      book: "evesHollywood",
      content: `
      <h2>Laurel Canyon</h2>
      <p>Attended a party at 'a house in Laurel Canyon where this guy who knew everyone was having about 2 years of winning at the race track, so he threw parties all the time and lechery for young girls was de rigueur.' (p. 159)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.08869, -118.3788),
      map: losAngelesMap,
      icon: icons.hotel,
      book: "evesHollywood",
      content: `
      <h2>Tropicana Motor Hotel</h2>
      <p>'And though I'd only met [Miss Plumbkiss] once briefly in our mutual friend's weird motel room at the Tropicana Motor Hotel years before, we both remembered each other at once.' (p. 171)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.00903, -118.48937),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Santa Monica Civic Auditorium</h2>
      <p>'MacGillivray-Freeman Films premiered their final surfing film, 'Five Summer Stories,' March 24 on a Friday night at the Santa Monica Civic Auditorium to a sold-out capacity-3000 house.' (p. 215)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.09104, -118.28895),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Hollywood Branch Library</h2>
      <p>'Mostly, I find myself coming out of the library with all women writers.' (p. 231)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.1044, -118.34322),
      map: losAngelesMap,
      icon: icons.hotel,
      book: "evesHollywood",
      content: `
      <h2>The Landmark Motel</h2>
      <p>'When Janis Joplin O.D.'d one Sunday at the Landmark Motel...' (p. 272)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.058, -118.23738),
      map: losAngelesMap,
      icon: icons.food,
      book: "evesHollywood",
      content: `
      <h2>Cielito Lindo</h2>
      <p>Where you can get the best taquitos: 'Taquitos are much better than heroin, it's just that no one knows about them and heroin's so celebrated.' (p. 276)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.054242, -118.253145),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Bunker Hill</h2>
      <p>'Bunker Hill was populated with bums and winos, gentlemen who all knew my mother and who sometimes could afford to live in the houses, now fallen into slums, that my mother drew.' (p. 20)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.05713, -118.23981),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Our Lady Queen of Angels Catholic Church</h2>
      <p>'The church acts like it doesn't even know it's the original site of the third biggest city in this country and a landmark [...] they don't think of themselves as a museum.' (p. 275)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.056, -118.23741),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>Union Station</h2>
      <p>'The railroad station that is so magnificent and legendary' (p. 279)</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.943211, -118.242060),
      map: losAngelesMap,
      icon: icons.area,
      book: "evesHollywood",
      content: `
      <h2>Watts</h2>
      <p>‘Watts isn’t Harlem, but its ugly and smoggy and flat and plantless’ (p. 284)</p>
      `,
    },
    {
      position: new google.maps.LatLng(33.93885, -118.24194),
      map: losAngelesMap,
      icon: icons.landmark,
      book: "evesHollywood",
      content: `
      <h2>The Watts Towers</h2>
      <p>‘those spindly-looking grey things...’ (p. 285)</p>
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
      <p>'It was there that I first ate figs.' (p. 6)</p>
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
      <p>'I saw [Janis Joplin] drinking [Dos Equis beer] in Barney’s Beanery more than once' (p. 275)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.091278, -118.34629),
      icon: icons.residence,
      book: "evesHollywood",
      content: `
      <h2>Home on Formosa</h2>
      <p>'It has a certain rural quality, the place I lived in on Fermosa.' (p. 196) (approx. location)</p>
      `,
    },
    {
      position: new google.maps.LatLng(34.1114, -118.320195),
      icon: icons.residence,
      book: "evesHollywood",
      content: `
      <h2>Home on Cheremoya Avenue</h2>
      <p>Where she lived with her parents: 'when I first started going to L.A.C.C.' (p. 154)(approx. location)</p>
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
