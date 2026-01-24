import { OpenAPIHono } from '@hono/zod-openapi'

const app = new OpenAPIHono()

import { createRoute } from '@hono/zod-openapi'
import { ParamsSchema, UserSchema } from './schemas/user.dto'

const route = createRoute({
  method: 'get',
  path: '/users/{id}',
  request: {
    params: ParamsSchema
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: UserSchema
        }
      },
      description: 'Retrieve the user'
    }
  }
})

app.openapi(route, (c) => {
  const { id } = c.req.valid('param')
  return c.json({
    id,
    age: 20,
    name: 'Ultra-man'
  })
})

// The OpenAPI documentation will be available at /doc
app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API'
  }
})

export default {
  port: 8787,
  fetch: app.fetch
}
