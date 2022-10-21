export default {
    name: 'web',
    title: 'Web',
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
            name: 'moreDetails',
            title: 'MoreDetails',
            type: 'string'
        },
        {
            name: 'detailsImg',
            title: 'DetailsImg',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        }
    ]
}