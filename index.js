const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const path = require('path');


app.set('view engine', 'pug');
app.set('views', './views');
//app.set('views', path.join(__dirname, './views'));

// using middleware functions
// to get the data from the form via POST method
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// it only serves static files from 'public' folder
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('form');
});

app.get('/home', function(req, res) {
    res.render('home');
});

// app.get('/get-data', function(req, res) {
//     res.send("The entered name is: "+req.query.name+" and the email is: "+req.query.email);
// });

app.post('/', function(req, res) {
    res.send("Success! POST method is working here! The entered name is: "+req.body.name+" and the email is: "+req.body.email);
});

// app.get('/home', function(req, res) {
//     res.render('home', {
//         name: "Programming",
//         url: "http://wwww.google.com"
//     });
// });

// app.get('/home', function(req, res) {
//     res.render('home', {
//         title:"Home Page",
//         users:{name: "Subash", age: "25"}
//     });
// });


// app.get('/public/:imageName', (req, res) => {
//     const imageName = req.params.imageName;
//     const filePath = path.join(__dirname, 'public', imageName); // this is a path to the image in the 'public' folder
  
//     res.download(filePath, imageName, (err) => {
//       if (err) {
//         console.error('Error downloading the file:', err);
//         res.status(500).send('Error downloading the file');
//       }
//     });
//   });


app.get('/download-image', (req, res) => {
    const imagePath = path.join(__dirname, 'public', 'scene.jpg');
    //const imagePath = "/public/scene.jpg";

     // Log the path to ensure it's correct
     console.log('Image path:', imagePath);

    res.download(imagePath, 'scene.jpg', (err) => {
        if (err) {
            console.log("There is an error downloading the file:", err);
            res.status(500).send("Could not download the image")
        }
        
    });
});


// app.get("/", (req, res) => {
//     res.send("Hello Express!");
// });

// app.get("/express", (req, res) => {
//     res.send("Creating routes with Express is simple!");
// });

// app.get("/user", (req, res) => {
//     res.send("Received a GET request for user!")
// })

// app.post("/user", (req, res) => {
//     res.send("Received a POST request for user!")
// })


// app.get("/", (req, res) => {
//     res.send("Try navigating to /user.");
// });

// app.get("/user", (req, res) => {
//     res.send(`Received a GET request for user! Try navigating to /user/somevalue/profile/somevalue.`);
// });

// app.get("/user/:userID", (req, res) => {
//     res.send(`Navigated to the user page for: ${req.params.userID}.`);
// });

// app.get("/user/:userID/profile", (req, res) => {
//     res.send(`Navigated to the user profile page for: ${req.params.userID}.`);
// });

// app.get("/user/:userID/profile/:data", (req, res) => {
//     res.send(`Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`);
// });




app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
    
})