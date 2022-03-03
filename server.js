const express = require('express');
const app = express();
const PORT = 3001 || process.env.PORT;
// const quotesRouter = require('./routes/quotes');



app.listen(PORT, () => {
    console.log(` Port listening at http://localhost:${PORT}`);
});
