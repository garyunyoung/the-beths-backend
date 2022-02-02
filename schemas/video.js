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
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    }
  ]
}

