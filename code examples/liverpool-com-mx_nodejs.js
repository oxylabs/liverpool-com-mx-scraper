import fetch from 'node-fetch';

const username = 'YOUR_USERNAME';
const password = 'YOUR_PASSWORD';
const body = {
  'source': 'universal_ecommerce',
  'url': 'https://www.liverpool.com.mx/tienda/colchones/n-wg53pt7492dst%2f0p0r%2fpz0kb9npyijqg5tzypy%2fduqodvgzhzvmk%2fi35f6qjb7l6',
};
const response = await fetch('https://realtime.oxylabs.io/v1/queries', {
  method: 'post',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
  }
});

console.log(await response.json());