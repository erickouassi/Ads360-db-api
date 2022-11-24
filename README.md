# Ads360-db-api


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
  
  

Method: GET: [https://ads360-db-api.vercel.app](https://ads360-db-api.vercel.app)

✅ Get today text advert (11/24)

👉 [https://ads360-db-api.vercel.app/v1/today_txt](https://ads360-db-api.vercel.app/v1/today_txt)

✅ Get This month text advert

👉 [https://ads360-db-api.vercel.app/v1/month_txt](https://ads360-db-api.vercel.app/v1/month_txt)

✅ Get date (Thursday)

👉 [https://ads360-db-api.vercel.app/v1/day_txt](https://ads360-db-api.vercel.app/v1/day_txt)

✅ Get date by Sunday or Monday ...  or Saturday.

👉 [https://ads360-db-api.vercel.app/v1/monday_txt](https://ads360-db-api.vercel.app/v1/monday_txt)


✅ Get week number (1-53)

👉 [https://ads360-db-api.vercel.app/v1/week_txt](https://ads360-db-api.vercel.app/v1/week_txt)


✅ Get randon text advert

👉 [https://ads360-db-api.vercel.app/v1/random_txt](https://ads360-db-api.vercel.app/v1/random_txt)
