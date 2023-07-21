const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const app = express();

const swaggerDefinition = {
	openapi: '3.0.3',
	info: {
		title: 'REST API',
		version: `v1`,
		description: 'REST APIs ',
		license: {
			name: 'http://localhost:3000',
			url: 'http://localhost:3000'
		},
		contact: {
			name: 'Your Company Name',
			url: 'http://localhost:3000'
		}
	},
	servers: [
		{
			url: `http://localhost:3000`,
			description: 'Your Local Server'
		}
	]
};

const options = {
	swaggerDefinition,
	apis: ['swagger.yaml']
};
const specs = swaggerJSDoc(options);
app.use(
	`/v1/docs`,
	swaggerUi.serve,
	swaggerUi.setup(specs)
);

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
