const { z } = require('zod');

const orderSchema = z.object({
  id: z.number(),
  fullname: z.string(),
  address: z.string(),
  phone: z.string(),
  cost: z.number(),
});

module.exports = orderSchema;
