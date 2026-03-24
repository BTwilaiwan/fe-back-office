import 'angular-server-side-configuration/process';

// const apiUrl = process.env.API_URL || "http://localhost:8080";
const apiUrl = "http://localhost:8080";
export const environment = {
  apis: {
    basic: `${apiUrl}/api`,
    product: `${apiUrl}/api/products`,
  }
}
