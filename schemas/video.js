export default {
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string'
    },
    // TO DO: Add Cloudinary integration
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'string'
    }
  ]
}

