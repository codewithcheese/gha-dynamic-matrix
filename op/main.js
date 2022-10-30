const core = require('@actions/core');

const op_id = core.getInput('op_id')

// console.log(`Running op #${op_id}`)
console.log(JSON.stringify(op_id))
