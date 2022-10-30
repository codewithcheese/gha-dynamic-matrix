const core = require('@actions/core');

const id = core.getInput('id')

console.log(JSON.stringify(id))
