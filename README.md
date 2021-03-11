
















# metadata2markdown

Utility to transform spring configuration metadata to human-readable markdown.




## Installation

```sh
$ npm i metadata2markdown
```









## Example






```js
const transformToMarkdown = require('metadata2markdown')

const metadata = {
  groups: [
    {
      name: 'metrics.collector.db',
      type: 'ch.tie.iengine.config.DatabaseMetricsProperties',
      sourceType: 'ch.tie.iengine.config.DatabaseMetricsProperties'
    },
    {
      name: 'metrics.collector.discovery',
      type: 'ch.tie.iengine.config.DiscoveryMetricsProperties',
      sourceType: 'ch.tie.iengine.config.DiscoveryMetricsProperties'
    },
    {
      name: 'sender.email',
      type: 'ch.tie.iengine.config.EmailProperties',
      sourceType: 'ch.tie.iengine.config.EmailProperties'
    }
  ],
  properties: [
    {
      name: 'metrics.collector.db.enabled',
      type: 'java.lang.Boolean',
      sourceType: 'ch.tie.iengine.config.DatabaseMetricsProperties'
    },
    {
      name: 'metrics.collector.discovery.enabled',
      type: 'java.lang.Boolean',
      sourceType: 'ch.tie.iengine.config.DiscoveryMetricsProperties'
    },
    {
      name: 'metrics.collector.discovery.installation-config-path',
      type: 'java.nio.file.Path',
      sourceType: 'ch.tie.iengine.config.DiscoveryMetricsProperties'
    },
    {
      name: 'sender.email.enabled',
      type: 'java.lang.Boolean',
      description: 'Determines whether email sender is active or not.',
      sourceType: 'ch.tie.iengine.config.EmailProperties',
      defaultValue: false
    },
    {
      name: 'sender.email.from-address',
      type: 'java.lang.String',
      description: 'Has to be a valid email-address. Cannot be blank.',
      sourceType: 'ch.tie.iengine.config.EmailProperties'
    },
    {
      name: 'sender.email.interval',
      type: 'java.time.Duration',
      sourceType: 'ch.tie.iengine.config.EmailProperties',
      defaultValue: '1m'
    },
    {
      name: 'sender.email.subject',
      type: 'java.lang.String',
      description: 'Must not be empty.',
      sourceType: 'ch.tie.iengine.config.EmailProperties'
    },
    {
      name: 'sender.email.to-addresses',
      type: 'java.util.List<java.lang.String>',
      description: 'Has to contain at least one valid email-address.',
      sourceType: 'ch.tie.iengine.config.EmailProperties'
    }
  ],
  hints: []
}

console.log(transformToMarkdown('example-project', metadata))
// =>
//
// # example-project
//
//
//
// ## configuration properties documentation
//
// | sourceType | name | type | description | defaultValue |
// | ---------- | ---- | ---- | ----------- | ------------ |
// | ch.tie.iengine.config.DatabaseMetricsProperties | metrics.collector.db.enabled | java.lang.Boolean |  |
// ch.tie.iengine.config.DiscoveryMetricsProperties | metrics.collector.discovery.enabled | java.lang.Boolean |  |
// ch.tie.iengine.config.DiscoveryMetricsProperties | metrics.collector.discovery.installation-config-path | java.nio.file.Path |  |
// ch.tie.iengine.config.EmailProperties | sender.email.enabled | java.lang.Boolean | Determines whether email sender is active or not. | false
// ch.tie.iengine.config.EmailProperties | sender.email.from-address | java.lang.String | Has to be a valid email-address. Cannot be blank. |
// ch.tie.iengine.config.EmailProperties | sender.email.interval | java.time.Duration |  | 1m
// ch.tie.iengine.config.EmailProperties | sender.email.subject | java.lang.String | Must not be empty. |
// ch.tie.iengine.config.EmailProperties | sender.email.to-addresses | java.util.List<java.lang.String> | Has to contain at least one valid email-address. |  |
//
//
//
//
// ## Powered by metadata2markdown
//
//   [metadata2markdown](https://github.com/fhirt/metadata2markdown)
//

```






## Documentation





### `metadata2markdown(projectTitle, data)`

#### Params
- **String** `projectTitle`: title
- **Array|Object|String** `data`: The input JSON data. [metadata-format]{@link https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-configuration-metadata.html#configuration-metadata-format}

#### Return
- **String** The generated markdown result.






## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].



## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
