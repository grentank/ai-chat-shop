const { z } = require('zod');

const productsSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  image: z.string(),
});

module.exports = productsSchema;
