const express = require('express');
const app = express();
const port = 3000; // You can choose any available port
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml'); // Load your local Swagger YAML file

app.use(express.json());

// Define your endpoint
app.get('/api', (req, res) => {
  const parameterValue = req.query.parameterName;

  // Implement your logic to check if the parameter is correct
  if (parameterValue === 'JMAT') {
    res.status(200).json({ message: 'Parameter is correct.' });
  } else {
    res.status(400).json({ error: 'Bad Request' });
  }
});

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));


// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});