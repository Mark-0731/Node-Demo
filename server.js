const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const appConfig = require('./config/appconfig');
const { sequelize } = require('./config/data');

const app = express();
const PORT = appConfig.Server_Port || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// API Routes
const v1Routes = require('./v1/1');
app.use('/api/v1', v1Routes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: "Server is Running",
    status: "success",
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: "healthy",
    database: sequelize.authenticate() ? "connected" : "disconnected",
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong!",
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    message: "Route not found",
    path: req.originalUrl
  });
});

// Database connection and server startup
sequelize.authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Health check available at: http://localhost:${PORT}/health`);
      console.log(`API endpoints available at: http://localhost:${PORT}/api/v1`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  });