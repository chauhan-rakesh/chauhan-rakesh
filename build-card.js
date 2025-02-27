const fs = require('fs');
const chalk = require('chalk');
const boxen = require('boxen');
const pkg = require('./package.json');

const text = chalk `Rakesh Chauhan / {cyan @chauhan-rakesh}                       {dim 【ツ】}

{bold     Work:} {italic Chief Technical Officier } @ PollPe
{bold   GitHub:} {cyan https://github.com/chauhan-rakesh}
{bold  PollPe:} {cyan https://pollpe.com}
{bold   Dev.to:} {cyan https://dev.to/chauhanrakesh}
{bold LinkedIn:} {cyan https://www.linkedin.com/in/rakeshchauhan7075/}

{bold     Card:} $ npx ${pkg.name}`;

const card = boxen(text, { padding: 1, borderColor: 'blue' });

fs.writeFileSync('text', card);