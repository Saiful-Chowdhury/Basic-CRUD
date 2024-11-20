const express = require("express"); //Import the express libiriary. It's a framework for build server
const mongoose = require("mongoose"); //To connect with MongoDB
const cors = require("cors"); //Cross-Origin Resource Sharing. To handle CORS request.
const bodyParser = require("body-parser"); //A middleware used to parse incoming request bodies, especially JSON data sent by the client.

const app = express(); // Declare app first

app.use(cors());
app.use(bodyParser.json());  //Use body-parser to automatically parse incoming JSON request bodies
app.use(express.json());

const PORT = process.env.PORT || 5000;


// Explain this part to the point in simple language 
// Connect MongoDb Atlas
mongoose.connect('mongodb+srv://@cluster1.nnuyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
// Routes
app.use("/api/users", require("./routes/userRoutes"));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
