const app = require('./config/config')();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
	res.render('list');
})

app.listen(3000, function(){
	console.log('server running on port 3000');
});