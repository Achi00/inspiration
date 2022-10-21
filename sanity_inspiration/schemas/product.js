export default {
    name: 'product',
    title: 'Product',
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
            name: 'image1',
            title: 'Image1',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'image2',
            title: 'Image2',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'image3',
            title: 'Image3',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'gif',
            title: 'Gif',
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