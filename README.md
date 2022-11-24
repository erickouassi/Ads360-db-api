# Ads360-db-api

Getting started
---------------

Fork this repository [https://github.com/erickouassi/Ads360-db-api/fork](https://github.com/erickouassi/Ads360-db-api/fork) in your account.

Core Features
-------------

*   Self-hosting & it's Free!
*   Advertising campaign:
    *   Randon
    *   Time of Day (Morning, Afternoon & Evening)
    *   Daily
    *   Weekly
    *   Monthly
*   Insert Any Code Anywhere on the Page
*   Advertising Formats/Types:
    *   Text/html Ads
    *   Image Ads:
        *   .png
        *   .jpg
        *   .gif
    *   3rd Party Ads (JavaScript ads)
*   No Databases, all client-side (just simple HTML, CSS & Javascript)

General Usage
-------------

_All of our API calls return a JSON response. No authentication required_  

_This example uses fetch, a modern built-in way to make HTTP requests with JavaScript._

  ```
  fetch(".../v1/today_txt")
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  ```
  
  

Core Features
-------------

Method: GET: [https://ads360-db-api.vercel.app](https://ads360-db-api.vercel.app)

✅ Get today text advert (11/24)

👉 [.../v1/today_txt](https://ads360-db-api.vercel.app/v1/today_txt)

✅ Get This month text advert

👉 [.../v1/month_txt](https://ads360-db-api.vercel.app/v1/month_txt)

✅ Get date (Thursday)

👉 [.../v1/day_txt](https://ads360-db-api.vercel.app/v1/day_txt)

✅ Get date by Sunday or Monday ...  or Saturday.

👉 [.../v1/monday_txt](https://ads360-db-api.vercel.app/v1/monday_txt)


✅ Get week number (1-53)

👉 [.../v1/week_txt](https://ads360-db-api.vercel.app/v1/week_txt)


✅ Get randon text advert

👉 [.../v1/random_txt](https://ads360-db-api.vercel.app/v1/random_txt)
