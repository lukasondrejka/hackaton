# App

## Development Setup

Development setup with using Docker Compose.

**Requirements:**
- Node.js
- Docker

### Install dependencies

```bash
npm install --prefix backend
npm install --prefix frontend
```

### Start app with Docker Compose

```bash
docker compose up
```

### Containers

| Container     | Exposed Port                  | Description      |
|---------------|-------------------------------|------------------|
| frontend      | [8000](http://localhost:8000) | React App        |
| backend       | [8080](http://localhost:8080) | Express API      |
| mongo-express | [8081](http://localhost:8081) | MongoDB Admin UI |
| mongo         |                               | MongoDB          |

## Architecture

### Services

- Frontend App
- Backend API
- MongoDB
- MistralAI (external)

## Resources

- [React Reference](https://react.dev/reference)
- [Express](https://expressjs.com/)
- [MongoDB Docs](https://www.mongodb.com/docs/)
- [Mongoose Docs](https://mongoosejs.com/docs)
- [MistralAI Docs](https://docs.mistral.ai/)
