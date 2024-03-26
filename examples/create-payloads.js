const { writeFileSync } = require('node:fs');

const payload = [];

for (let index = 0; index < 40_000_000; index++) {
  payload.push(1);
}

writeFileSync(`${__dirname}/example-large.json`, JSON.stringify({ payload }));
writeFileSync(`${__dirname}/example-small.json`, JSON.stringify({ payload: [1, 1, 1] }));
