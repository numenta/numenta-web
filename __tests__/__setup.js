// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import JasmineExpect from 'jasmine-expect'  // eslint-disable-line
import {JUnitXmlReporter} from 'jasmine-reporters'

const reporterJUnit = new JUnitXmlReporter({
  // Jest runs many instances of Jasmine in parallel. Force distinct file output
  // per test to avoid collisions.
  consolidateAll: false,
  filePrefix: 'jest-junit-',
  savePath: 'coverage/junit-report/',
})


/**
 * Initialize Jasmine testing environment context.
 */

// Add JUnit reporting to Jest+Jasmine
jasmine.getEnv().addReporter(reporterJUnit)
