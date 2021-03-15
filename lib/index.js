const json2md = require('json2md')
const utils = require('./utils')

json2md.converters.groups = function (input) {
  if (Array.isArray(input) && input.length > 0) {
    return json2md([{ h2: 'groups' }, { p: 'not yet supported' }])
  }
  return ''
}

json2md.converters.properties = function (input) {
  if (Array.isArray(input) && input.length > 0) {
    return json2md([
      { h2: 'configuration properties documentation' },
      {
        table: {
          headers: ['sourceType', 'name', 'type', 'description', 'defaultValue'],
          rows: input.map(utils.propertyCleanup)
        }
      }])
  }
  return ''
}

json2md.converters.hints = function (input) {
  if (Array.isArray(input) && input.length > 0) {
    return json2md([{ h2: 'hints' }, { p: 'not yet supported' }])
  }
  return ''
}

/**
 * @name metadata2markdown
 * @function
 * @param {Array|Object|String} data The input JSON data. [metadata-format](https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-configuration-metadata.html#configuration-metadata-format)
 * @return {String} The generated markdown result.
 */
function metadata2markdown (data) {
  if (data === null || !Object.prototype.hasOwnProperty.call(data, 'properties') || data.properties.length === 0) {
    return ''
  }
  return json2md([
    { groups: [] },
    { properties: data.properties || [] },
    { hints: [] }
  ])
}

module.exports = metadata2markdown
