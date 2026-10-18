import { useEffect, useMemo, useState } from "react";

const emptyArray = [];

function isMuseumData(data) {
  return (
    data !== null &&
    typeof data === "object" &&
    Array.isArray(data.collections) &&
    Array.isArray(data.exhibits) &&
    Array.isArray(data.readingList) &&
    Array.isArray(data.sourceCategories) &&
    Array.isArray(data.ethiopianWorldHeritage) &&
    Array.isArray(data.ethiopianLivingHeritage)
  );
}

function getSource(sourceId, sourceById) {
  const source = sourceById.get(sourceId);
  if (!source) {
    throw new Error(`Exhibit references missing source "${sourceId}"`);
  }

  return source;
}

const foodTopics = [
  { id: "all", label: "All food & coffee" },
  { id: "cuisine", label: "Cuisine" },
  { id: "coffee", label: "Coffee" },
];

const navMenus = {
  heritage: [
    { label: "World Heritage", href: "#unesco" },
    { label: "Landmarks & landscapes", href: "#world-heritage" },
    { label: "Living traditions", href: "#living-heritage" },
  ],
  stories: [
    { label: "The opening collection", href: "#exhibits" },
    { label: "Selected stories", href: "#collections" },
    { label: "About this archive", href: "#about" },
  ],
  sources: [
    { label: "Reading list", href: "#sources" },
    { label: "UNESCO records", href: "https://whc.unesco.org/en/statesparties/et/" },
    { label: "Further reading", href: "#sources" },
  ],
};

function App() {
  const [activeCollection, setActiveCollection] = useState("all");
  const [activeFoodTopic, setActiveFoodTopic] = useState("all");
  const [activeMenu, setActiveMenu] = useState("");
  const [search, setSearch] = useState("");
  const [museumData, setMuseumData] = useState(null);
  const [apiStatus, setApiStatus] = useState("Checking archive service…");
  const [apiRetryCount, setApiRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    setApiStatus("Loading museum collection…");

    fetch("/api/museum", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Backend returned ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        if (!isMuseumData(data)) {
          throw new Error("Backend returned an invalid museum data response");
        }

        setMuseumData(data);
        setApiStatus("Archive service online");
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Unable to load museum content:", error);
          setApiStatus("Archive service unavailable");
        }
      });

    return () => controller.abort();
  }, [apiRetryCount]);

  const collections = museumData?.collections ?? emptyArray;
  const exhibits = museumData?.exhibits ?? emptyArray;
  const readingList = museumData?.readingList ?? emptyArray;
  const sourceCategories = museumData?.sourceCategories ?? emptyArray;
  const ethiopianWorldHeritage = museumData?.ethiopianWorldHeritage ?? emptyArray;
  const ethiopianLivingHeritage = museumData?.ethiopianLivingHeritage ?? emptyArray;
  const sourceById = useMemo(
    () => new Map(readingList.map((source) => [source.id, source])),
    [readingList],
  );

  const visibleExhibits = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();

    return exhibits.filter((exhibit) => {
      const matchesCollection =
        activeCollection === "all" || exhibit.collectionId === activeCollection;
      const matchesFoodTopic =
        activeCollection !== "food" ||
        activeFoodTopic === "all" ||
        exhibit.foodTopic === activeFoodTopic;
      const category = collections.find((item) => item.id === exhibit.collectionId);
      const searchableText = [
        exhibit.title,
        exhibit.period,
        exhibit.summary,
        exhibit.detail,
        category?.title,
        ...exhibit.highlights,
      ]
        .join(" ")
        .toLocaleLowerCase();

      return matchesCollection && matchesFoodTopic && (!query || searchableText.includes(query));
    });
  }, [activeCollection, activeFoodTopic, collections, exhibits, search]);

  function selectCollection(collectionId) {
    setActiveCollection(collectionId);
    setActiveFoodTopic("all");
    document.getElementById("exhibits")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const selectedCollection = collections.find((item) => item.id === activeCollection);
  const exhibitHeading =
    activeCollection === "food" && activeFoodTopic !== "all"
      ? foodTopics.find((topic) => topic.id === activeFoodTopic)?.label
      : selectedCollection?.title;

  return (
    <div className="museum">
      <div className="opening-note">
        <span className="opening-dot" />
        An open digital museum · First collection in progress
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ethiopian Museum home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-name">
            Ethiopian
            <strong>Museum</strong>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          {Object.entries(navMenus).map(([key, items]) => (
            <button
              key={key}
              type="button"
              className={`nav-link${activeMenu === key ? " is-active" : ""}`}
              onClick={() => setActiveMenu(activeMenu === key ? "" : key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </nav>
        {activeMenu && (
          <div className="nav-panel" aria-live="polite">
            <div className="nav-panel-inner">
              <div className="nav-panel-label">{activeMenu}</div>
              <ul>
                {navMenus[activeMenu].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} onClick={() => setActiveMenu("")}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>

      {apiStatus === "Loading museum collection…" && (
        <div className="api-message is-loading" role="status">
          Loading museum collections and stories…
        </div>
      )}
      {apiStatus === "Archive service unavailable" && (
        <div className="api-message is-error" role="alert">
          <span>The museum content could not be loaded from the backend.</span>
          <button type="button" onClick={() => setApiRetryCount((count) => count + 1)}>
            Try again
          </button>
        </div>
      )}

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span>01</span> An evolving cultural archive</p>
            <h1 id="hero-title">
              Ethiopia,
              <br />
              a living <em>heritage.</em>
            </h1>
            <p className="hero-intro">
              Explore Ethiopia's remarkable heritage: ancient places, diverse communities, and
              traditions carried forward through generations.
            </p>
            <a
              className="primary-button"
              href="#collections"
              onClick={() => setActiveCollection("all")}
            >
              Explore the collections <span aria-hidden="true">↓</span>
            </a>
            <p className="hero-footnote">A beginning, made to grow with you.</p>
          </div>
          <div className="hero-visual" aria-label="Photographs from the opening collection">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-image hero-image-main">
              <img
                src="/images/lalibela.jpg"
                alt="A rock-hewn church in Lalibela, Ethiopia"
              />
            </div>
            <div className="hero-image hero-image-detail">
              <img
                src="/images/traditional-dress.png"
                alt="Traditional Ethiopian clothing with colourful woven details"
              />
            </div>
            <div className="hero-image hero-image-landscape">
              <img
                src="/images/simien-mountains.png"
                alt="The high peaks and green slopes of the Simien Mountains"
              />
            </div>
            <div className="hero-caption">
              <span>ETHIOPIA · WORLD &amp; LIVING HERITAGE</span>
              <strong>Places, people, and traditions carried forward.</strong>
            </div>
            <span className="hero-stamp" aria-hidden="true">
              <span>ETHIOPIA</span>
              <span>•</span>
              <span>13 MONTHS</span>
            </span>
          </div>
        </section>

        <div className="collection-ribbon" aria-label="Museum collection overview">
          <span><strong>ETHIOPIA</strong> at the heart of every story</span>
          <span className="ribbon-divider" />
          <span>World Heritage &amp; living traditions</span>
          <span className="ribbon-divider" />
          <a href="#collections">Explore all collections <span aria-hidden="true">↓</span></a>
        </div>

        <section className="unesco-section" id="unesco">
          <div className="section-wrap">
            <div className="section-heading unesco-heading">
              <div>
                <p className="eyebrow"><span>UNESCO · Ethiopia</span> Places &amp; practices</p>
                <h2>Heritage rooted in Ethiopia</h2>
              </div>
              <p className="section-intro">
                Discover selected Ethiopian places on the World Heritage List and living traditions
                inscribed with the communities who carry them.
              </p>
            </div>

            <nav className="heritage-subnav" aria-label="Ethiopia heritage sections">
              <a href="#world-heritage">
                <span>01</span> Tangible heritage <i>·</i> Landmarks &amp; landscapes
              </a>
              <a href="#living-heritage">
                <span>02</span> Intangible heritage <i>·</i> Living traditions
              </a>
            </nav>

            <div className="heritage-subheading" id="world-heritage">
              <div>
                <span className="heritage-kicker">01 / TANGIBLE HERITAGE</span>
                <h3>Landmarks &amp; landscapes</h3>
              </div>
              <a href="https://whc.unesco.org/en/statesparties/et/" target="_blank" rel="noreferrer">
                UNESCO World Heritage · Ethiopia <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="unesco-site-grid">
              {ethiopianWorldHeritage.map((site) => (
                <a
                  className="unesco-site-card"
                  href={site.url}
                  key={site.id}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={`unesco-site-art${site.image ? " has-image" : ` site-art-${site.id}`}`}>
                    {site.image ? (
                      <img src={site.image} alt={site.imageAlt} loading="lazy" />
                    ) : (
                      <span className="site-motif" aria-hidden="true">{site.motif}</span>
                    )}
                    <span className="site-year">INSCRIBED {site.year}</span>
                  </span>
                  <span className="unesco-site-copy">
                    <span className="site-kind">{site.kind} heritage</span>
                    <strong>{site.name}</strong>
                    <span className="site-summary">{site.summary}</span>
                    <span className="unesco-card-link">Explore UNESCO record <span aria-hidden="true">↗</span></span>
                  </span>
                </a>
              ))}
            </div>

            <div className="heritage-subheading living-heading" id="living-heritage">
              <div>
                <span className="heritage-kicker">02 / INTANGIBLE CULTURAL HERITAGE</span>
                <h3>Traditions carried by communities</h3>
              </div>
              <a href="https://ich.unesco.org/en/state/ethiopia-ET" target="_blank" rel="noreferrer">
                UNESCO Intangible Cultural Heritage · Ethiopia <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="living-heritage-grid">
              {ethiopianLivingHeritage.map((element) => (
                <a
                  className="living-heritage-card"
                  href={element.url}
                  key={element.id}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="living-year">{element.year}</span>
                  <span className="living-card-copy">
                    <strong>{element.name}</strong>
                    <span className="living-community">{element.community}</span>
                    <span className="living-summary">{element.summary}</span>
                  </span>
                  <span className="living-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <p className="unesco-note">
              This is a selected introduction, not a complete inventory. Inscription recognises
              heritage kept alive by people and communities; it does not make one tradition
              representative of all Ethiopia.
            </p>
          </div>
        </section>

        <section className="collections-section section-wrap" id="collections">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span>Explore more</span> The museum map</p>
              <h2>More stories of Ethiopia</h2>
            </div>
            <p className="section-intro">
              Start with a collection, then follow its histories, places, and living traditions
              across Ethiopia.
            </p>
          </div>

          <div className="collection-grid" aria-label="Museum collections">
            {collections.map((collection, index) => (
              <button
                className={`collection-tile${activeCollection === collection.id ? " is-selected" : ""}`}
                key={collection.id}
                type="button"
                aria-pressed={activeCollection === collection.id}
                onClick={() => selectCollection(collection.id)}
              >
                <span className={`tile-art tile-art-${index + 1}`}>
                  {collection.image ? (
                    <img src={collection.image} alt="" aria-hidden="true" />
                  ) : (
                    <span className="tile-symbol" aria-hidden="true">{collection.symbol}</span>
                  )}
                  <span className="tile-number">{collection.count}</span>
                </span>
                <span className="tile-info">
                  <strong>{collection.title}</strong>
                  <span>{collection.description}</span>
                  <span className="tile-link">Enter collection <span aria-hidden="true">↗</span></span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="exhibits-section" id="exhibits">
          <div className="section-wrap">
            <div className="section-heading exhibit-heading">
              <div>
                <p className="eyebrow"><span>Selected stories</span> The reading room</p>
                <h2>{exhibitHeading || "The opening collection"}</h2>
              </div>
              <label className="search-box">
                <span className="search-icon" aria-hidden="true">⌕</span>
                <span className="visually-hidden">Search exhibits</span>
                <input
                  type="search"
                  value={search}
                  placeholder="Search the collection"
                  onChange={(event) => setSearch(event.target.value)}
                />
                {search && (
                  <button
                    type="button"
                    className="clear-search"
                    aria-label="Clear search"
                    onClick={() => setSearch("")}
                  >
                    ×
                  </button>
                )}
              </label>
            </div>

            {activeCollection === "food" && (
              <nav className="food-subnav" aria-label="Food and coffee topics">
                {foodTopics.map((topic) => (
                  <button
                    className={activeFoodTopic === topic.id ? "is-active" : ""}
                    type="button"
                    key={topic.id}
                    aria-pressed={activeFoodTopic === topic.id}
                    onClick={() => setActiveFoodTopic(topic.id)}
                  >
                    {topic.label}
                  </button>
                ))}
              </nav>
            )}

            {(activeCollection !== "all" || search) && (
              <div className="results-line">
                <span>
                  {visibleExhibits.length} {visibleExhibits.length === 1 ? "story" : "stories"}
                  {search ? ` matching “${search}”` : ""}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCollection("all");
                    setActiveFoodTopic("all");
                    setSearch("");
                  }}
                >
                  Show all stories
                </button>
              </div>
            )}

            {visibleExhibits.length > 0 ? (
              <div className="exhibit-grid">
                {visibleExhibits.map((exhibit, index) => {
                  const category = collections.find((item) => item.id === exhibit.collectionId);

                  return (
                    <details className="exhibit-card" key={exhibit.id}>
                      <summary>
                        <span className="exhibit-image">
                          {exhibit.image ? (
                            <img src={exhibit.image} alt={exhibit.imageAlt} loading="lazy" />
                          ) : (
                            <span className={`exhibit-art exhibit-art-${index % 5}`} aria-hidden="true">
                              <span>{category?.symbol}</span>
                              <i />
                              <i />
                            </span>
                          )}
                          <span className="exhibit-category">
                            {exhibit.foodTopic === "coffee" ? "Coffee" : category?.shortTitle}
                          </span>
                        </span>
                        <span className="exhibit-card-copy">
                          <span className="exhibit-period">{exhibit.period}</span>
                          <strong>{exhibit.title}</strong>
                          <span className="exhibit-summary">{exhibit.summary}</span>
                          <span className="read-more">Read this story <span aria-hidden="true">＋</span></span>
                        </span>
                      </summary>
                      <div className="exhibit-detail">
                        <p>{exhibit.detail}</p>
                        {exhibit.gallery && (
                          <div className="exhibit-gallery" aria-label="Garments in this photo collection">
                            {exhibit.gallery.map((image) => (
                              <img src={image.src} alt={image.alt} key={image.src} loading="lazy" />
                            ))}
                          </div>
                        )}
                        <ul>
                          {exhibit.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                        </ul>
                        <div className="card-sources">
                          <span>Further reading</span>
                          {exhibit.sourceIds.map((sourceId) => {
                            const source = getSource(sourceId, sourceById);
                            return (
                              <a href={source.url} key={sourceId} target="_blank" rel="noreferrer">
                                {source.name} <span aria-hidden="true">↗</span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </details>
                  );
                })}
              </div>
            ) : (
              <div className="empty-state">
                <span aria-hidden="true">⌕</span>
                <h3>No stories found</h3>
                <p>Try another search, or browse every collection.</p>
                <button type="button" onClick={() => { setActiveCollection("all"); setActiveFoodTopic("all"); setSearch(""); }}>
                  Browse all stories
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="archive-section section-wrap" id="about">
          <div className="archive-mark" aria-hidden="true">E</div>
          <div className="archive-copy">
            <p className="eyebrow"><span>Edition 01</span> A foundation, not a finish line</p>
            <h2>This museum is being built in the open.</h2>
            <p>
              These first exhibits organise the notes and photographs you shared into a browsable
              starting collection. New places, voices, images, and sources can be added as the
              archive grows.
            </p>
          </div>
          <div className="archive-note">
            <span className="note-icon" aria-hidden="true">✳</span>
            <strong>More stories belong here.</strong>
            <span>Every collection is open to another chapter.</span>
            <a href="#sources">See the source shelf <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="sources-section" id="sources">
          <div className="section-wrap">
            <div className="section-heading sources-heading">
              <div>
                <p className="eyebrow"><span>Research shelf</span> Go deeper</p>
                <h2>Sources &amp; further reading</h2>
              </div>
              <p className="section-intro">
                A starting reading list drawn from the shared notes. Open a source to explore its
                documents and context.
              </p>
            </div>
            <div className="source-submenus">
              {sourceCategories.map((category) => {
                const sources = readingList.filter((source) => source.category === category.id);

                return (
                  <details className="source-submenu" key={category.id}>
                    <summary>
                      <span className="source-submenu-title">{category.title}</span>
                      <span className="source-submenu-meta">
                        {sources.length} {sources.length === 1 ? "source" : "sources"}
                      </span>
                      <span className="source-submenu-icon" aria-hidden="true">＋</span>
                    </summary>
                    <div className="source-list">
                      {sources.map((source, index) => (
                        <a
                          className="source-row"
                          href={source.url}
                          key={source.id}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="source-index">{String(index + 1).padStart(2, "0")}</span>
                          <span className="source-copy">
                            <strong>{source.name}</strong>
                            <span>{source.note}</span>
                          </span>
                          <span className="source-arrow" aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  </details>
                );
              })}
            </div>
            <p className="source-disclaimer">
              Exhibit text is an introductory summary, not legal, policy, or professional advice.
              Historical accounts and cultural practices are diverse; this archive will continue to
              be reviewed and expanded.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span className="brand-name">Ethiopian<strong>Museum</strong></span>
        </a>
        <span className="footer-note">An evolving archive of Ethiopia's cultural heritage.</span>
        <span className="service-status" role="status">
          <span className={`opening-dot${apiStatus === "Archive service online" ? " is-online" : ""}`} />
          {apiStatus}
        </span>
      </footer>
    </div>
  );
}

export default App;
