// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import merge from 'lodash/merge'
import {parse} from 'toml'
import {readFileSync} from 'fs'

const fileCom = readFileSync('packages/numenta.com/config.toml')
const configCom = parse(fileCom)

const fileOrg = readFileSync('packages/numenta.org/config.toml')
const configOrg = parse(fileOrg)


/**
 * Jest test Config mock. Return contents of ../config.toml file.
 * @requires jest webpack
 */

const config = merge({}, configCom, configOrg)

export default config
