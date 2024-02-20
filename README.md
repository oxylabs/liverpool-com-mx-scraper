# Liverpool-Com-Mx Scraper API

[![Oxylabs promo code](https://user-images.githubusercontent.com/129506779/250792357-8289e25e-9c36-4dc0-a5e2-2706db797bb5.png)](https://oxylabs.go2cloud.org/aff_c?offer_id=7&aff_id=877&url_id=112)

Oxylabs' [Liverpool-Com-Mx Scraper](https://oxylabs.io/products/scraper-api/ecommerce/liverpool-com-mx?utm_source=github&utm_medium=repositories&utm_campaign=product) is a data gathering solution allowing you to extract real-time information from an Liverpool-Com-Mx website effortlessly. This brief guide showcases how Liverpool-Com-Mx Scraper works, along with code examples to help you better understand how to use it hassle-free.

### How it works

You can get Liverpool-Com-Mx results by providing your own URLs to our service. We can return the HTML for any page you like.

#### Python code example

The example below illustrates how you can get HTML of Liverpool-Com-Mx page.

```python
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
```
Find code examples for other programming languages [**here**](https://github.com/oxylabs/liverpool-com-mx-scraper/tree/main/code%20examples)

#### Output Example
```json
{
  "results": [
    {
      "content": "<!DOCTYPE html><html lang=\"es\"><head><meta name=\"next-head-count\"/><meta name=\"format-detection\" con ... </html>",
      "created_at": "2024-02-20 12:54:32",
      "updated_at": "2024-02-20 12:54:34",
      "page": 1,
      "url": "https://www.liverpool.com.mx/tienda/colchones/n-wg53pt7492dst%2f0p0r%2fpz0kb9npyijqg5tzypy%2fduqodvgzhzvmk%2fi35f6qjb7l6",
      "job_id": "7165690186179831809",
      "status_code": 200
    }
  ]
}
```
With our Liverpool-Com-Mx Scraper, you can seamlessly gather public data from any Liverpool-Com-Mx website. Gather essential product details such as cost, product evaluations, or product definitions to examine the market and achieve a competitive edge. Should you have any inquiries, interact with our support team through live chat or send us an email at hello@oxylabs.io.