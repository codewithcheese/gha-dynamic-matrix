const core = require('@actions/core');

const out_1 = core.getInput('out_1')
const out_2 = core.getInput('out_2')
const out_3 = core.getInput('out_3')

console.log('Received op outputs', out_1 || 'null', out_2 || 'null', out_3 || 'null')

const ops = [{ id: 1 },{ id: 2 },{ id: 3 }]
core.setOutput('ops', JSON.stringify(ops))
