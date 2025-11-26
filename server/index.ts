import express from 'express';
import session from 'express-session';
import createMemoryStore from 'memorystore';
import { createServer } from 'http';
import './types.js';
import routes from './routes.js';
import { setupVite, serveStatic } from './vite.js';

const app = express();
const server = createServer(app);
const MemoryStore = createMemoryStore(session);

app.use((req, _res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = _res.json;
  _res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(_res, [bodyJson, ...args]);
  };

  _res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${_res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      console.log(logLine);
    }
  });

  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    store: new MemoryStore({
      checkPeriod: 86400000,
    }),
    secret: 'techflow-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    },
  })
);

app.use('/api', routes);

const PORT = 5000;

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    serveStatic(app);
  } else {
    await setupVite(app, server);
  }

  const host = process.env.HOST || '0.0.0.0';
  server.listen(PORT, host, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
