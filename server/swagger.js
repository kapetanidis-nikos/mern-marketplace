const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger configuration
const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Node.js Express MongoDB API',
      version: '1.0.0',
      description: 'A REST API built with Node.js, Express, and MongoDB',
      contact: {
        name: 'Nick Kapetanidis',
        email: 'your.email@example.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Error message'
            },
            status: {
              type: 'integer',
              description: 'HTTP status code'
            }
          }
        }
      },
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    './routes/*.js',        
    './routes/**/*.js',     
    './models/*.js',        
    './controllers/*.js',  
    './app.js',            
  ],
};

const specs = swaggerJsdoc(options);

// Debug: Log the generated specs to see if routes are being picked up
console.log('Swagger specs generated:', JSON.stringify(specs, null, 2));

module.exports = {
  specs,
  swaggerUi,
};