const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
    res.json({
        imie: 'Mykola',
        nazwisko: 'Haponiuk',
        numerIndeksu: 77550
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
