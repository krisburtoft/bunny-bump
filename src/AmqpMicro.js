const connect = require('./connect').connect
const Publisher = require('./Publisher').Publisher
const logger = require('./logger')
const options = require('./options').options
const Injector = require('./injector').Injector

export function AmqpMicro (defaults, injectableFn) {
  Object.assign(options, defaults)
  Injector.inject(injectableFn,options)
}