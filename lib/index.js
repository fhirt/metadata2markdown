const json2md = require('json2md')
const utils = require('./utils')

json2md.converters.groups = function (input) {
  if (Array.isArray(input)) {
    if (input.size > 0) {
      return json2md([{ h2: 'groups' }, { p: 'not yet supported' }])
    } else {
      return ''
    }
  }
  return ''
}

json2md.converters.properties = function (input) {
  return json2md([
    { h2: 'configuration properties documentation' },
    {
      table: {
        headers: ['sourceType', 'name', 'type', 'description', 'defaultValue'],
        rows: input.map(utils.propertyCleanup)
      }
    }])
}

json2md.converters.hints = function (input) {
  if (Array.isArray(input)) {
    if (input.size > 0) {
      return json2md([{ h2: 'hints' }, { p: 'not yet supported' }])
    } else {
      return ''
    }
  }
  return ''
}

/**
 * @name metadata2markdown
 * @function
 * @param {String} projectTitle title
 * @param {Array|Object|String} data The input JSON data. [metadata-format]{@link https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-configuration-metadata.html#configuration-metadata-format}
 * @return {String} The generated markdown result.
 */
function metadata2markdown (projectTitle, data) {
  return json2md([
    utils.projectTitle(projectTitle),
    { groups: [] },
    { properties: data.properties || [] },
    { hints: [] },
    utils.footer
  ])
}

module.exports = metadata2markdown
