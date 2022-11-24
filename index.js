//index.js
const http = require("http");
const AppData = require("./controller");

const PORT = process.env.PORT || 5005;

const server = http.createServer(async (req, res) => {
    
    if (req.url === "/" && req.method === "GET") {
    // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "*" });
       res.end(JSON.stringify({ message: "App is active!" }));
   }
    
    // /api/v1/random : GET
    else if (req.url === "/v1/random_txt" &&
  req.method === "GET") {
         // get random data.
        const randomData = await new AppData().getRandomDataTxt();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(randomData));
    }
    //
      // /api/v1/today : GET
    else if (req.url === "/v1/today_txt" &&
  req.method === "GET") {
         // get today data.
        const todayData = await new AppData().getTodayDataTxt();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(todayData));
    }
    //
// Add below
 // /api/v1/Sunday : GET
 else if (req.url === "/v1/sunday_txt" &&
 req.method === "GET") {
        // get Sunday data.
       const sundayData = await new AppData().getSundayDataTxt();
       // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "*"  });
       // send the data
       res.end(JSON.stringify(sundayData));
   }
   //
    // /api/v1/monday : GET
   else if (req.url === "/v1/monday_txt" &&
 req.method === "GET") {
        // get Monday data.
       const mondayData = await new AppData().getMondayDataTxt();
       // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "*"  });
       // send the data
       res.end(JSON.stringify(mondayData));
   }
   //
    // /api/v1/Tuesday : GET
   else if (req.url === "/v1/tuesday_txt" &&
 req.method === "GET") {
        // get Tuesday data.
       const tuesdayData = await new AppData().getTuesdayDataTxt();
       // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "*"  });
       // send the data
       res.end(JSON.stringify(tuesdayData));
   }
   //
    // /api/v1/Wednesday : GET
   else if (req.url === "/v1/wednesday_txt" &&
 req.method === "GET") {
        // get Wednesday data.
       const wednesdayData = await new AppData().getWednesdayDataTxt();
       // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "*"  });
       // send the data
       res.end(JSON.stringify(wednesdayData));
   }
   //
    // /api/v1/Thursday : GET
   else if (req.url === "/v1/thursday_txt" &&
 req.method === "GET") {
        // get Thursday data.
       const thursdayData = await new AppData().getThursdayDataTxt();
       // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "*"  });
       // send the data
       res.end(JSON.stringify(thursdayData));
   }
   //
    // /api/v1/Friday : GET
   else if (req.url === "/v1/friday_txt" &&
 req.method === "GET") {
        // get Friday data.
       const fridayData = await new AppData().getFridayDataTxt();
       // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "*"  });
       // send the data
       res.end(JSON.stringify(fridayData));
   }
   //
    // /api/v1/Saturday : GET
   else if (req.url === "/v1/saturday_txt" &&
 req.method === "GET") {
        // get Saturday data.
       const saturdayData = await new AppData().getSaturdayDataTxt();
       // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "*"  });
       // send the data
       res.end(JSON.stringify(saturdayData));
   }
   //
    // /api/v1/day : GET
    else if (req.url === "/v1/day_txt" &&
    req.method === "GET") {
           // get Day data.
          const dayData = await new AppData().getDayDataTxt();
          // set the status code, and content-type
          res.writeHead(200, { "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"  });
          // send the data
          res.end(JSON.stringify(dayData));
      }
      //
      // /api/v1/week_txt : GET
   else if (req.url === "/v1/week_txt" &&
   req.method === "GET") {
          // get Week data.
         const weekData = await new AppData().getWeeklyDataTxt();
         // set the status code, and content-type
         res.writeHead(200, { "Content-Type": "application/json",
         "Access-Control-Allow-Origin": "*"  });
         // send the data
         res.end(JSON.stringify(weekData));
     }
     //
      	    // /api/v1/month : GET
   else if (req.url === "/v1/month_txt" &&
   req.method === "GET") {
          // get Month data.
         const monthData = await new AppData().getMonthDataTxt();
         // set the status code, and content-type
         res.writeHead(200, { "Content-Type": "application/json",
         "Access-Control-Allow-Origin": "*"  });
         // send the data
         res.end(JSON.stringify(monthData));
     }
     //

// Add above

    // No route present
    else {
        res.writeHead(404, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});


server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});

// I will add credit or inspiration later.
// Avoid a single error from crashing the server in production.
process.on("uncaughtException", (...args) => console.error(args));
process.on("unhandledRejection", (...args) => console.error(args));