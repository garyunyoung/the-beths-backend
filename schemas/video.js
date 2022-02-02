export default {
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    // TO DO: Add Cloudinary integration
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

