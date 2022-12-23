const express = require('express');
const https = require('https');
const app = express();
const cors = require('cors');

const port = 9000;

const corsOption = {
    origin: ['http://localhost:3000'],
};

app.use(cors(corsOption));

app.use(cors())


const BROODAUTOMATEN_DATA = [
  {
    id: 1,
    naam: 'Bakkerij JENS',
    locatie: 'Langeveldstraat 123, 1745 Opwijk',
  },
  {
    id: 2,
    naam: 'De Fietser',
    locatie: 'Karenveldstraat 3, 1745 Opwijk',
  },
  {
    id: 3,
    naam: 'Bloemenland',
    locatie: 'Steenweg op Brussel 132, 1745 Opwijk',
  },
  {
    id: 4,
    naam: 'Frituur Den Bocht',
    locatie: 'Nijverseelstraat 36, 1745 Opwijk',
  },
  {
    id: 5,
    naam: 'Handekijn',
    locatie: 'Steenweg op Merchtem 8, 1745 Opwijk',
  },
  {
    id: 6,
    naam: 'Total Merchtem',
    locatie: 'Wolvertemsesteenweg 1, 1785 Merchtem',
  },
  {
    id: 7,
    naam: 'Tankstation De Wolf',
    locatie: 'Nieuwelaan 53, 1860 Meise',
  },
  {
    id: 8,
    naam: 'Beigem',
    locatie: 'Beigemsesteenweg 210, 1850 Grimbergen',
  },
  {
    id: 9,
    naam: 'Rodal',
    locatie: 'Meiselaan 96, 1880 Kapelle-op-den-Bos',
  },
  {
    id: 10,
    naam: 'Eversem',
    locatie: 'Potaardestraat 29, Meise',
  },
  {
    id: 11,
    naam: 'De Knabbelhoek',
    locatie: 'Kuiermansstraat 55, 1880 Kapelle-op-den-Bos',
  },
  {
    id: 12,
    naam: 'Viandoo bvba',
    locatie: 'Londerzeelseweg 122, 1880 Ramsdonk',
  },
  {
    id: 13,
    naam: 'Groentenautomaat',
    locatie: 'Stuiverstraat 7, 1840 Kapelle-op-den-Bos',
  },
  {
    id: 14,
    naam: 'Zaal De Eendracht',
    locatie: 'Jan Hammeneckerstraat 33, 1861 Westrode',
  },
  {
    id: 15,
    naam: 'Cockaert Design',
    locatie: 'Ossegemstraat 70, 1861 Wolvertem',
  },
  {
    id: 16,
    naam: 'Slagerij Willems',
    locatie: 'Voorstehoeve 85, 1730 Mollem',
  },
  {
    id: 17,
    naam: 'Café Trapkes Op',
    locatie: 'Kasteelstraat 21, 1730 Asse',
  },
  {
    id: 18,
    naam: 'Torenhof',
    locatie: 'Brussegemkerkstraat 2, 1785 Brussegem',
  },
  {
    id: 19,
    naam: 'Relegem',
    locatie: 'Dorpsstraat 45, 1731 Asse',
  },
  {
    id: 20,
    naam: 'Café t Wit Paard',
    locatie: 'Lierput 3, 1730 Kobbegem',
  },
  {
    id: 21,
    naam: 'Frituur Terheide',
    locatie: 'Gentsesteenweg 122, 1730 Asse',
  },
  {
    id: 22,
    naam: 'DECO',
    locatie: 'Tuinwijk 1, 1730 Asse',
  },
  {
    id: 23,
    naam: 'Texaco Ternat',
    locatie: 'Assesteenweg 250, 1742 Sint-Katherina-Lombeek',
  },
  {
    id: 24,
    naam: 'Zwembad Ternat',
    locatie: 'P. Van Cauwelaertstraat 30 1740 Ternat',
  },
  {
    id: 25,
    naam: 'Ponyhoeve Schepdaal',
    locatie: 'Jan de Trochstraat 135, 1703 Dilbeek',
  },
  {
    id: 26,
    naam: 'Café Vagevuur',
    locatie: 'Vlezenbeeklaan 91, 1600 Sint-Pieters-Leeuw',
  }
];

const BROOD_DATA = [
  {
    id: 1,
    beschrijving: 'wit brood',
    prijs: 2,
    imgUrl: '/img/wit_brood.jpg'
  },
  {
    id: 2,
    beschrijving: 'bruin brood',
    prijs: 2,
    imgUrl: '/img/bruin_brood.jpeg'
  },
  {
    id: 3,
    beschrijving: 'grijs brood',
    prijs: 2,
    imgUrl: '/img/grijs_brood.jpg'
  },
  {
    id: 4,
    beschrijving: 'meergranen',
    prijs: 2,
    imgUrl: '/img/meergranen_brood.jpg'
  },
  {
    id: 5,
    beschrijving: 'spelt brood',
    prijs: 2,
    imgUrl: '/img/spelt_brood.jpg'
  },
  {
    id: 6,
    beschrijving: 'volkoren brood',
    prijs: 2,
    imgUrl: '/img/volkoren_brood.jpg'
  },
  {
    id: 7,
    beschrijving: 'speculoos',
    prijs: 5,
    imgUrl: '/img/speculoos.jpg'
  },
  {
    id: 8,
    beschrijving: 'suikerbrood',
    prijs: 3,
    imgUrl: '/img/suiker_brood.jpg'
  },
  {
    id: 9,
    beschrijving: 'tijgerbrood',
    prijs: 2,
    imgUrl: '/img/tijger_brood.jpeg'
  }

];

app.get('/api/broodautomaten', (req, res) => {
  res.send(BROODAUTOMATEN_DATA);
});

app.get('/api/broden', (req, res) => {
  res.send(BROOD_DATA);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});