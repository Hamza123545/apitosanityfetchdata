// schemas/product.ts
export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'description',
        type: 'text',
      },
      {
        name: 'price',
        type: 'number',
      },
      {
        name: 'imageUrl',
        type: 'url',
      },
    ],
  };
  