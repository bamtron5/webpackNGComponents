import * as schedule from 'node-schedule';
import {Github} from '../models/Github';
let https = require('https');
let count = 0;

// export default schedule.scheduleJob('*/1 * * * *', function(){
export default setInterval(function(){
  // TODO check for status code 400+ and then reset schedule for rate-limit-reset in header
  console.log(`${count++} \n`);
  // var keepAliveAgent = new https.Agent({ keepAlive: true });
  let options = {
    hostname: 'api.github.com',
    path: '/repos/vmg/redcarpet/issues?state=closed',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'CoderCampsTesting'
    }
  };

  let req = https.get(options, (res) => {
    let stream = '';
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      stream += chunk;
      // console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      Github.create(JSON.parse(stream));
      console.log('No more data in response.');
    });

    res.on('error', (e) => {
      console.log('oops', e);
      req.end();
    });
  });
}, 10000);

process.on('uncaughtException', function (err) {
  console.log(err);
});
