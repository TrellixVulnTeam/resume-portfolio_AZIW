const express = require('express');
const path = require('path');
const app = express();
app.use(requireHTTPS);
app.use(express.static(__dirname + '/dist/resume-portfolio'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname+'/dist/resume-portfolio/index.html'));
  });
app.listen(process.env.PORT || 8080);