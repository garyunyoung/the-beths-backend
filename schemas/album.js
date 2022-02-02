export default {
  name: 'album',
  title: 'Album',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ]
}

