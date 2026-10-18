export const collections = [
  {
    id: "history",
    title: "Origins & memory",
    shortTitle: "History",
    count: "01",
    description: "Ancient kingdoms, historic places, and the names carried through time.",
    symbol: "✳",
    image: "/images/lalibela.jpg",
  },
  {
    id: "heritage",
    title: "Heritage & protection",
    shortTitle: "Heritage",
    count: "02",
    description: "The laws, institutions, and shared work that help safeguard heritage.",
    symbol: "⌂",
    image: "/images/ethiopian-heritage-collage.png",
  },
  {
    id: "land",
    title: "Land & living nature",
    shortTitle: "Nature",
    count: "03",
    description: "Water, highlands, forests, and the living world across Ethiopia.",
    symbol: "◌",
    image: "/images/simien-mountains.png",
  },
  {
    id: "agriculture",
    title: "Seeds & agriculture",
    shortTitle: "Agriculture",
    count: "04",
    description: "Crop diversity and farming knowledge passed between generations.",
    symbol: "✳",
    image: "/images/ethiopian-landscape.png",
  },
  {
    id: "industry",
    title: "Making & industry",
    shortTitle: "Industry",
    count: "05",
    description: "From household crafts to modern manufacturing and new industries.",
    symbol: "▦",
    image: "/images/ethiopian-industry.png",
  },
  {
    id: "conflict",
    title: "Conflict & resilience",
    shortTitle: "History",
    count: "06",
    description: "A careful timeline of conflicts and the long pursuit of peace.",
    symbol: "⌁",
  },
  {
    id: "culture",
    title: "Living cultures",
    shortTitle: "Culture",
    count: "07",
    description: "Languages, celebrations, music, and traditions in everyday life.",
    symbol: "❋",
    image: "/images/ethiopian-manuscript.png",
  },
  {
    id: "dress",
    title: "Dress & craft",
    shortTitle: "Clothing",
    count: "08",
    description: "Handwoven cotton, embroidered borders, and regional expression.",
    symbol: "⌘",
    image: "/images/woven-clothing.png",
  },
  {
    id: "food",
    title: "Food & coffee",
    shortTitle: "Food",
    count: "09",
    description: "Explore Ethiopian cuisine and coffee traditions in one collection.",
    symbol: "◉",
    image: "/images/shared-meal.png",
  },
  {
    id: "healthcare",
    title: "Hospitals & healthcare",
    shortTitle: "Healthcare",
    count: "10",
    description: "Healthcare settings, care workers, and community health in Ethiopia.",
    symbol: "＋",
    image: "/images/ethiopian-healthcare.png",
  },
];

const unescoLaws = {
  name: "UNESCO Database of National Cultural Heritage Laws",
  url: "https://www.unesco.org/en/cultnatlaws",
};

const unescoEthiopia = {
  name: "UNESCO World Heritage — Ethiopia",
  url: "https://whc.unesco.org/en/statesparties/et/",
};

export const exhibits = [
  {
    id: "names-and-kingdoms",
    collectionId: "history",
    period: "Across the centuries",
    title: "Names, kingdoms & memory",
    summary:
      "A first look at the many histories connected with the lands of present-day Ethiopia.",
    detail:
      "The names Ethiopia and Abyssinia have different histories and contexts. Earlier histories include the kingdom of Dʿmt and the Aksumite kingdom. These are connected histories, not interchangeable names for one unchanged state.",
    image: "/images/lalibela.jpg",
    imageAlt: "A rock-hewn church carved into stone at Lalibela",
    sourceIds: ["unesco-ethiopia", "britannica-history"],
    highlights: ["Dʿmt and Aksum", "Lalibela's rock-hewn heritage"],
  },
  {
    id: "heritage-laws",
    collectionId: "heritage",
    period: "1966 — 2003",
    title: "Protecting cultural heritage",
    summary:
      "A short timeline of Ethiopian heritage proclamations and international agreements.",
    detail:
      "The supplied research points to Ethiopia's 1966 antiquities proclamation, Proclamation 209/2000 on research and conservation of cultural heritage, and proclamations 373/2003 and 374/2003 concerning international cultural-property agreements. Use the linked UNESCO database to consult the legal documents themselves.",
    image: "/images/fasil-ghebbi.png",
    imageAlt: "Historic stone castles and walls at Fasil Ghebbi in Gondar",
    sourceIds: ["unesco-laws", "unesco-ethiopia"],
    highlights: ["Proclamation 209/2000", "Cultural property and international conventions"],
  },
  {
    id: "land-water",
    collectionId: "land",
    period: "Land & environment",
    title: "Water, highlands & biodiversity",
    summary:
      "Ethiopia's varied landscapes hold important water systems and distinctive biodiversity.",
    detail:
      "The notes describe highland and lowland environments, river basins including the Abbay (Blue Nile), Awash, and Omo, and forests with diverse plant and animal life. Water availability, conservation, and land use vary by region and are changing over time.",
    image: "/images/simien-mountains.png",
    imageAlt: "The dramatic peaks and highland landscape of the Simien Mountains",
    sourceIds: ["fao-ethiopia", "unesco-laws"],
    highlights: ["River basins and hydropower", "Biodiversity and conservation"],
  },
  {
    id: "seeds-and-farming",
    collectionId: "agriculture",
    period: "Knowledge through generations",
    title: "Seeds, teff & farming",
    summary:
      "Agriculture connects food, local knowledge, and Ethiopia's remarkable crop diversity.",
    detail:
      "Teff, enset, sorghum, coffee, and barley are among the crops associated with Ethiopian farming and foodways. Smallholder farmers and diverse local growing conditions are central themes for this collection. More regional stories and well-sourced figures can be added in a future edition.",
    image: "/images/shared-meal.png",
    imageAlt: "A colourful shared Ethiopian meal served on injera",
    sourceIds: ["fao-ethiopia", "fao-crop-diversity"],
    highlights: ["Teff and enset", "Smallholder farming and crop diversity"],
  },
  {
    id: "craft-to-industry",
    collectionId: "industry",
    period: "19th century — today",
    title: "From workshop to industry",
    summary:
      "A changing story of household craft, early mills, state-led industry, and industrial parks.",
    detail:
      "The supplied notes trace a path from local weaving and metalwork through imperial-era development plans and Derg-era nationalisation, then to post-1991 industrial strategies and industrial parks. This broad outline needs more regional voices, dated records, and economic sources as the archive grows.",
    image: "/images/ethiopian-industry.png",
    imageAlt: "A freight container displaying the Ethiopian flag among shipping containers",
    sourceIds: ["britannica-economy", "afdb-industrial-policy"],
    highlights: ["Traditional making and early factories", "Manufacturing and industrial parks"],
  },
  {
    id: "conflict-timeline",
    collectionId: "conflict",
    period: "16th century — today",
    title: "Conflict, independence & peace",
    summary:
      "A measured overview of wars and internal conflicts that shaped modern history.",
    detail:
      "The working timeline includes the Battle of Adwa (1896), the Italian occupation and liberation period, the Ogaden War, the Eritrean–Ethiopian border war, and the Tigray war (2020–2022). Conflict histories affect people differently; this exhibit is a starting outline, not a complete account.",
    sourceIds: ["britannica-adwa", "cfr-ethiopia-conflict"],
    highlights: ["The Battle of Adwa", "The 2022 Pretoria Agreement"],
  },
  {
    id: "many-languages",
    collectionId: "culture",
    period: "Living traditions",
    title: "Languages, writing & traditions",
    summary:
      "Ethiopian stories live in many languages, written traditions, music, faith, and community celebrations.",
    detail:
      "Ethiopia is home to many ethnic and linguistic communities, with traditions that differ by place and change over time. The manuscript shown here represents one written heritage; it cannot stand for the country's full linguistic diversity. The notes also highlight Timkat, Meskel, Enkutatash, and eskista. Future additions should name the communities and regions represented rather than treat any single custom as universal.",
    image: "/images/ethiopian-manuscript.png",
    imageAlt: "A page of an Ethiopian manuscript with handwritten text",
    sourceIds: ["unesco-ethiopia", "unesco-intangible", "britannica-culture"],
    highlights: ["Timkat, Meskel, and Enkutatash", "Music and dance traditions"],
  },
  {
    id: "woven-clothing",
    collectionId: "dress",
    period: "Textile & identity",
    title: "Woven cotton & ceremonial dress",
    summary:
      "Handwoven cloth, colourful borders, and garments that carry regional meaning.",
    detail:
      "The Habesha kemis, netela, and men's wraps such as the kuta or gabbi appear in the supplied notes. Styles, names, materials, and occasions differ across communities; these photographs are an opening visual collection, not a representation of every Ethiopian dress tradition.",
    image: "/images/ceremonial-dress.png",
    imageAlt: "A white embroidered ceremonial dress with a red woven wrap",
    gallery: [
      {
        src: "/images/traditional-dress.png",
        alt: "Traditional dress with colourful woven borders",
      },
      {
        src: "/images/ceremonial-dress.png",
        alt: "White ceremonial dress with red embroidered details",
      },
      {
        src: "/images/woven-clothing.png",
        alt: "A light traditional garment with embroidered trim",
      },
      {
        src: "/images/men-traditional-dress.png",
        alt: "Traditional men's clothing with colourful embroidery",
      },
    ],
    sourceIds: ["unesco-ethiopia", "unesco-intangible", "britannica-culture"],
    highlights: ["Handwoven shemma and colourful tilf", "Dress traditions vary by community"],
  },
  {
    id: "injera-and-wat",
    collectionId: "food",
    foodTopic: "cuisine",
    period: "Food & cuisine",
    title: "Injera, wat & shared dishes",
    summary:
      "Injera, stews, and colourful platters are at the heart of many Ethiopian meals.",
    detail:
      "Injera is a fermented flatbread often served with stews such as doro wat, shiro, and misir wat, as well as vegetable dishes. Meals and recipes vary across Ethiopia's many communities, households, and occasions.",
    image: "/images/shared-meal.png",
    imageAlt: "A shared platter of Ethiopian dishes arranged on injera",
    sourceIds: ["britannica-culture", "fao-crop-diversity"],
    highlights: ["Injera and wat", "Plant-based and regional dishes"],
  },
  {
    id: "buna-ceremony",
    collectionId: "food",
    foodTopic: "coffee",
    period: "Coffee traditions",
    title: "Buna: the coffee ceremony",
    summary:
      "Roasting, brewing, and sharing coffee make buna a distinctive Ethiopian coffee ceremony.",
    detail:
      "In the traditional buna coffee ceremony, green coffee beans are roasted, ground, and brewed in a jebena before the coffee is shared. Practices differ between communities and households.",
    sourceIds: ["unesco-intangible", "britannica-culture"],
    highlights: ["Roasting coffee and brewing in a jebena", "Coffee shared across generations"],
  },
  {
    id: "healthcare-and-community",
    collectionId: "healthcare",
    period: "Health & community care",
    title: "Care in the community",
    summary:
      "A separate starting point for stories about health services and the people who provide care in Ethiopia.",
    detail:
      "This opening exhibit introduces healthcare as its own subject in the museum. The supplied photograph is captioned broadly as a care setting; it is not identified here as a specific hospital. Future additions can document named hospitals, health workers, community experiences, and changes in care with local and official sources.",
    image: "/images/ethiopian-healthcare.png",
    imageAlt: "People and a care worker in an Ethiopian community care setting",
    sourceIds: ["who-ethiopia"],
    highlights: ["Health services and community care", "Stories to add with local sources"],
  },
];

export const readingList = [
  {
    id: "unesco-laws",
    category: "heritage",
    name: unescoLaws.name,
    url: unescoLaws.url,
    note: "National cultural heritage laws and legal documents.",
  },
  {
    id: "unesco-ethiopia",
    category: "heritage",
    name: unescoEthiopia.name,
    url: unescoEthiopia.url,
    note: "World Heritage information for Ethiopia.",
  },
  {
    id: "fao-ethiopia",
    category: "environment",
    name: "FAO — Ethiopia's natural resources, land, water, forests and trees",
    url: "https://www.fao.org/4/y4818e/y4818e05.htm",
    note: "A country overview; its dated statistics should not be read as current.",
  },
  {
    id: "fao-crop-diversity",
    category: "environment",
    name: "FAO — Agrobiodiversity and local food production systems",
    url: "https://www.fao.org/4/y5609e/y5609e02.htm",
    note: "Background on agrobiodiversity and local knowledge.",
  },
  {
    id: "ministry-agriculture",
    category: "environment",
    name: "Ethiopian Ministry of Agriculture — History",
    url: "https://www.moa.gov.et/history/",
    note: "The ministry's account of its history and agricultural policy.",
  },
  {
    id: "britannica-history",
    category: "history",
    name: "Encyclopaedia Britannica — Ethiopia: History",
    url: "https://www.britannica.com/place/Ethiopia/History",
    note: "A general historical overview.",
  },
  {
    id: "britannica-adwa",
    category: "history",
    name: "Encyclopaedia Britannica — First Italo-Ethiopian War",
    url: "https://www.britannica.com/event/First-Italo-Ethiopian-War-1895-1896",
    note: "Background on the 1895–1896 war and Battle of Adwa.",
  },
  {
    id: "britannica-economy",
    category: "industry",
    name: "Encyclopaedia Britannica — Ethiopia: Economy",
    url: "https://www.britannica.com/place/Ethiopia/Economy",
    note: "General economic and development context.",
  },
  {
    id: "afdb-industrial-policy",
    category: "industry",
    name: "African Development Bank — Industrial policy in Ethiopia",
    url: "https://www.afdb.org/fileadmin/uploads/afdb/Documents/Publications/WPS_No_303__Industrial_Policy_and_Late_Industrialization_in_Ethiopia_B.pdf",
    note: "Research on industrial policy and late industrialisation.",
  },
  {
    id: "cfr-ethiopia-conflict",
    category: "history",
    name: "Council on Foreign Relations — Conflict in Ethiopia",
    url: "https://www.cfr.org/global-conflict-tracker/conflict/conflict-ethiopia",
    note: "Background and updates on conflict in Ethiopia.",
  },
  {
    id: "unesco-intangible",
    category: "heritage",
    name: "UNESCO Intangible Cultural Heritage — Ethiopia",
    url: "https://ich.unesco.org/en/state/ethiopia-ET",
    note: "Living heritage elements inscribed for Ethiopia.",
  },
  {
    id: "britannica-culture",
    category: "heritage",
    name: "Encyclopaedia Britannica — Ethiopia: Cultural life",
    url: "https://www.britannica.com/place/Ethiopia/Cultural-life",
    note: "An overview of cultural life and traditions.",
  },
  {
    id: "who-ethiopia",
    category: "health",
    name: "World Health Organization — Ethiopia",
    url: "https://www.who.int/countries/eth/",
    note: "WHO country information and health-related resources.",
  },
];

export const sourceCategories = [
  { id: "heritage", title: "UNESCO & cultural heritage" },
  { id: "history", title: "History & conflict" },
  { id: "environment", title: "Land, agriculture & environment" },
  { id: "industry", title: "Economy & industry" },
  { id: "health", title: "Health & community care" },
];
