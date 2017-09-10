var pack            = require('../package');
var golos = require('../golos-js/lib');

function index(request, reply) {
	
	
const username = 'fxmonster';
const password = 'GLS82dzrN3K9nNZN46TQDRdUXxtuXGkEFgxa7Px36759ZVEYfRWi8';
const wif = golos.auth.toWif(username, password, 'posting');

var res = 'test';

/*
golos
  .broadcast
  .upvote(
    wif,
    username,
    'pal',
    '2scmtp-test',
    null,
    function(err, result) {
      res = result;
      console.log(err, result);
    }
  );
*/

	reply.view('index.html', {
		title: pack.name,
		version: pack.version,
		result: wif,
	});
}

exports.index = index;




