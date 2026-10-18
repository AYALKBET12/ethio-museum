const worldHeritageBase = "https://whc.unesco.org/en/list/";
const intangibleHeritageRecord = "https://ich.unesco.org/en/state/ethiopia-ET";

export const ethiopianWorldHeritage = [
  {
    id: "lalibela",
    name: "Rock-Hewn Churches, Lalibela",
    year: 1978,
    kind: "Cultural",
    summary:
      "Eleven medieval monolithic churches carved from living rock, created as a place of pilgrimage and a symbolic New Jerusalem.",
    url: `${worldHeritageBase}18/`,
    image: "/images/lalibela.jpg",
    imageAlt: "A rock-hewn church carved into stone at Lalibela",
  },
  {
    id: "simien",
    name: "Simien National Park",
    year: 1978,
    kind: "Natural",
    summary:
      "A dramatic mountain landscape and home to rare highland wildlife, including the Walia ibex and Gelada baboon.",
    url: `${worldHeritageBase}9/`,
    image: "/images/simien-mountains.png",
    imageAlt: "The dramatic peaks and green highlands of the Simien Mountains",
  },
  {
    id: "fasil-ghebbi",
    name: "Fasil Ghebbi, Gondar Region",
    year: 1979,
    kind: "Cultural",
    summary:
      "A royal enclosure of castles, palaces, and historic buildings in Gondar, established as a permanent capital in the 17th century.",
    url: `${worldHeritageBase}19/`,
    image: "/images/fasil-ghebbi.png",
    imageAlt: "The historic stone castles and walls of Fasil Ghebbi in Gondar",
  },
  {
    id: "aksum",
    name: "Aksum",
    year: 1980,
    kind: "Cultural",
    summary:
      "The ancient Aksumite kingdom's archaeological remains include monumental stelae, royal tombs, and palace ruins.",
    url: `${worldHeritageBase}15/`,
    image: "/images/aksum-stelae.png",
    imageAlt: "A tall carved stone stela at the archaeological site of Aksum",
  },
];

export const ethiopianLivingHeritage = [
  {
    id: "meskel",
    name: "Meskel",
    year: 2013,
    community: "Ethiopian Orthodox Tewahedo communities",
    summary: "A commemoration feast marking the finding of the True Cross.",
  },
  {
    id: "fichee-chambalaalla",
    name: "Fichee-Chambalaalla",
    year: 2015,
    community: "Sidama people",
    summary: "The Sidama New Year celebration, welcoming a new cycle and renewal.",
  },
  {
    id: "gada-system",
    name: "Gada system",
    year: 2016,
    community: "Oromo people",
    summary: "An indigenous democratic sociopolitical system that organises community life.",
  },
  {
    id: "timket",
    name: "Timket",
    year: 2019,
    community: "Ethiopian Orthodox Tewahedo communities",
    summary: "The Ethiopian Epiphany celebration commemorating the baptism of Jesus Christ.",
  },
  {
    id: "shuwalid",
    name: "Shuwalid Festival",
    year: 2023,
    community: "Harari people",
    summary: "A festival celebrated by the Harari community.",
  },
  {
    id: "xeer-ciise",
    name: "Xeer Ciise",
    year: 2024,
    community: "Somali-Issa communities",
    summary: "Traditional customary law and oral knowledge shared across generations.",
  },
  {
    id: "gifaataa",
    name: "Gifaataa",
    year: 2025,
    community: "Wolaita people",
    summary: "A traditional New Year thanksgiving festival of the Wolaita people.",
  },
].map((element) => ({
  ...element,
  url: intangibleHeritageRecord,
}));
