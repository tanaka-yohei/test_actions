const core = require('@actions/core');

async function run() {
  try {
    core.setOutput('comment', 'tanakadayo');
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = run;
