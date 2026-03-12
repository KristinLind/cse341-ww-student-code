const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temple API',
    description: 'API documentation for the Temple project'
  },
  host: 'localhost:8080',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);