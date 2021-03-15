const utils = module.exports = {}

utils.propertyCleanup = item => {
  item.name = item.name || ''
  item.type = item.type || ''
  item.description = item.description || ''
  item.sourceType = item.sourceType || ''
  if (!Object.prototype.hasOwnProperty.call(item, 'defaultValue')) {
    item.defaultValue = ''
  } else {
    item.defaultValue = item.defaultValue.toString()
  }
  return item
}
