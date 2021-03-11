const utils = module.exports = {}

utils.propertyCleanup = item => {
  item.name = item.name || ''
  item.type = item.type || ''
  item.description = item.description || ''
  item.sourceType = item.sourceType || ''
  if (!item.hasOwnProperty('defaultValue')) {
    item.defaultValue = ''
  } else {
    item.defaultValue = item.defaultValue.toString()
  }
  return item
}

utils.projectTitle = projectTitle => {
  return [
    { h1: projectTitle }
  ]
}

utils.footer = [
  { h2: 'Powered by metadata2markdown' },
  {
    link: {
      title: 'metadata2markdown',
      source: 'https://github.com/fhirt/metadata2markdown'
    }
  }
]
