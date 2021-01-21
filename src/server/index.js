const express = require('express');
const app = express();
app.use(express.static('public'));
 
import render from './template'

app.get('*', function (req, res) {
	render(req, res)
})

app.listen(3000, () => {
	console.log('success');
})