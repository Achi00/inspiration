// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import art from './art'
import web from './web'
import branding from './branding'
import product from './product'
import gallery from './gallery'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ art, web, branding, product, gallery ]),
})
