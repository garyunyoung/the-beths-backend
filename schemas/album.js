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
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY'
      },
      validation: Rule => Rule.required()
    }
  ]
}

