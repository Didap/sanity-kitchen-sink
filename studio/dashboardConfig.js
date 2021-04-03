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
                  buildHookId: '6068353310cbab567771dcb7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cdgqvwq3',
                  apiId: '20550317-50a8-4a14-820a-2ec4448721e3'
                },
                {
                  buildHookId: '60683533d977d32adcb54881',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-s8a81cqm',
                  apiId: 'b0a49406-c28e-4f84-bbcf-0076fe9a361b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Didap/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-s8a81cqm.netlify.app', category: 'apps'}
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
