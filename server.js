const app = require('./config/config')();
const routes = require('./app/routes/routes')(app);
app.listen(3000, function(){
	console.log('server running on port 3000');
});