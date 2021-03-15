/* eslint-env mocha */
const expect = require('chai').expect
const metadata2markdown = require('../lib')

const emptyPropertiesMetadata = {
  properties: []
}

const completePropertiesMetadata = {
  properties: [
    {
      name: 'metrics.collector.db.enabled',
      type: 'java.lang.Boolean',
      description: 'enables collection of db metrics',
      sourceType: 'ch.tie.iengine.config.DatabaseMetricsProperties',
      defaultValue: false
    }
  ]
}

const incompletePropertiesMetadata = {
  properties: [
    {
      name: 'metrics.collector.db.enabled',
      type: 'java.lang.Boolean',
      sourceType: 'ch.tie.iengine.config.DatabaseMetricsProperties',
      defaultValue: false
    }
  ]
}

const multiplePropertiesMetadata = {
  properties: [
    {
      name: 'metrics.collector.db.enabled',
      type: 'java.lang.Boolean',
      sourceType: 'ch.tie.iengine.config.DatabaseMetricsProperties',
      defaultValue: false
    },
    {
      name: 'metrics.collector.discovery.enabled',
      type: 'java.lang.Boolean',
      sourceType: 'ch.tie.iengine.config.DiscoveryMetricsProperties',
      defaultValue: false
    }
  ]
}

describe('#metadata2markdown(data)', function () {
  context('when no metadata present', function () {
    it('should return empty string', function () {
      const markdown = metadata2markdown({})
      expect(markdown).to.equal('')
    })
  })

  context('when no properties present', function () {
    it('should return empty string', function () {
      const markdown = metadata2markdown(emptyPropertiesMetadata)
      expect(markdown).to.equal('')
    })
  })

  context('when null data', function () {
    it('should return empty string', function () {
      const markdown = metadata2markdown(null)
      expect(markdown).to.equal('')
    })
  })

  context('when all properties defined', function () {
    it('should print a complete table', function () {
      const markdown = metadata2markdown(completePropertiesMetadata)
      expect(markdown).to.equal('\n\n## configuration properties documentation\n\n| sourceType | name | type | description | defaultValue |\n| ---------- | ---- | ---- | ----------- | --' +
        '---------- |\n| ch.tie.iengine.config.DatabaseMetricsProperties | metrics.collector.db.enabled | java.lang.Boolean | enables collection of db metrics | false |\n\n\n\n')
    })
  })

  context('when only some properties defined', function () {
    it('should print a complete table', function () {
      const markdown = metadata2markdown(incompletePropertiesMetadata)
      expect(markdown).to.equal('\n\n## configuration properties documentation\n\n| sourceType | name | type | description | defaultValue |\n| ---------- | ---- | ---- | ----------- | --' +
        '---------- |\n| ch.tie.iengine.config.DatabaseMetricsProperties | metrics.collector.db.enabled | java.lang.Boolean |  | false |\n\n\n\n')
    })
  })

  context('when multiple entries defined', function () {
    it('should print multiple rows', function () {
      const markdown = metadata2markdown(multiplePropertiesMetadata)
      expect(markdown).to.equal('\n\n## configuration properties documentation\n\n| sourceType | name | type | description | defaultValue |\n| ---------- | ---- | ---- | ----------- | --' +
        '---------- |\n| ch.tie.iengine.config.DatabaseMetricsProperties | metrics.collector.db.enabled | java.lang.Boolean |  | false\nch.tie.iengine.config.DiscoveryMetricsProperties | metrics' +
        '.collector.discovery.enabled | java.lang.Boolean |  | false |\n\n\n\n')
    })
  })
})
