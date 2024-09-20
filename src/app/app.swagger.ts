import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions: swaggerJsDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Notification Hub API",
      version: "1.0.0",
      description: "Notification Hub API Information",
      contact: {
        name: "Junior Carrillo",
        email: "junior@example.com",
        url: "https://github.com/soyjrcarrillo",
      },
      license: {
        name: "Private License",
        url: "https://example.com/license",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
    externalDocs: {
      description: "Postman Collection",
      url: "https://example.com/postman-collection",
    },
    components: {
      securitySchemes: {
        jwt: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
        oauth2: {
          type: "oauth2",
          flows: {
            authorizationCode: {
              authorizationUrl: "https://example.com/oauth/authorize",
              tokenUrl: "https://example.com/oauth/token",
              scopes: {
                read: "Grants read access",
                write: "Grants write access",
                admin: "Grants access to admin operations",
              },
            },
          },
        },
      },
    },
  },
  apis: ["src/app/routes/*.route.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;
