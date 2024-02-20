import requests
from pprint import pprint

# Structure payload.
payload = {
    'source': 'universal_ecommerce',
    'url': 'https://www.liverpool.com.mx/tienda/colchones/n-wg53pt7492dst%2f0p0r%2fpz0kb9npyijqg5tzypy%2fduqodvgzhzvmk%2fi35f6qjb7l6'
}

# Get response.
response = requests.request(
    'POST',
    'https://realtime.oxylabs.io/v1/queries',
    auth=('user', 'pass1'),
    json=payload,
)

# Instead of response with job status and results url, this will return the
# JSON response with the result.
pprint(response.json())