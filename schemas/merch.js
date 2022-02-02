export default {
  name: 'merch',
  title: 'Merch',
  type: 'document',
  fields: [
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.required()
    }
  ]
}

