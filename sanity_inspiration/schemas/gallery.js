export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'heading1',
            title: 'Heading1',
            type: 'string'
        },
        {
            name: 'heading2',
            title: 'Heading2',
            type: 'string'
        },
        {
            name: 'heading3',
            title: 'Heading3',
            type: 'string'
        },
        {
            name: 'coverImg',
            title: 'CoverImg',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        }
    ]
}