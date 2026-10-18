# Ethiopian Museum

An evolving digital museum for Ethiopian history, cultural heritage, UNESCO
World Heritage sites, living traditions, and further reading. The project
contains a React/Vite frontend and an Express backend.

## Run locally

From the project root, install dependencies and start both services:

```sh
npm install
npm run dev
```

The frontend runs at http://127.0.0.1:5173 and proxies `/api` requests to the
backend at http://127.0.0.1:3001. To run only the backend, use
`npm run start:backend`.

## Publish as a website

The production Node server serves both the built frontend and the `/api`
endpoints from the same origin. This is configured for Render in `render.yaml`.

1. Push this project to a GitHub repository.
2. Create or sign in to a Render account and connect your GitHub account.
3. In the Render dashboard, choose **New > Blueprint**, then select the
   repository containing this project.
4. Review the service named `ethiopian-museum` and apply the Blueprint.
   Render builds the frontend and starts the backend using the commands in
   `render.yaml`.
5. When the first deploy is live, open the `onrender.com` URL shown in the
   Render dashboard. Check that the website loads and that `/api/health`
   returns `{"status":"ok"}`.

The free service plan can have availability and performance limitations. A
custom domain can be connected from the service's **Settings > Custom Domains**
page after deployment.

## Add to the museum

The opening collection is intentionally a starting point. Add or revise
collection navigation, exhibit text, and source links in
`frontend/src/data/collections.js`. Each exhibit has a `collectionId`, a short
summary, expanded detail, highlights, and source IDs. Add a matching source to
`readingList` and its ID to the exhibit's `sourceIds` to make it appear as a
clickable citation. Place locally supplied images in `frontend/public/images/`
and reference them with a path such as `/images/example.jpg`.

Keep the reading list alongside exhibit summaries so visitors can follow the
references and the archive can be reviewed and extended over time.

Food and coffee are one collection with nested topics: set `collectionId` to
`food` and `foodTopic` to `cuisine` or `coffee`. Healthcare remains its own
collection under `healthcare`. Add food exhibits with one of the supported
topics so the in-collection menu can filter them.

The Ethiopia UNESCO feature is maintained in `frontend/src/data/unesco.js`.
World Heritage sites link to their individual UNESCO records; living-heritage
entries link to UNESCO's Ethiopia page. The feature is intentionally presented
as a selected introduction rather than a complete inventory.
