const core = require('@actions/core');
const ops = [{ id: 1 },{ id: 2 },{ id: 3 }]
core.setOutput('ops', JSON.stringify(ops))
