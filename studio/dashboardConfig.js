export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ecc124645228a15f2799274',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xunb8bso',
                  apiId: '91e2793d-3d78-4d72-8164-7fe58a005c43'
                },
                {
                  buildHookId: '5ecc124651f1bc8e356114f8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qdmmya4b',
                  apiId: '1da5b022-3c70-41a0-b3e9-c79c913dbce2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jbrenna/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qdmmya4b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
