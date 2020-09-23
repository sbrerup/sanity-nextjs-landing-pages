export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f6b08b3e17efad08673ae49',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gik3mbx1',
                  apiId: '632a8002-db56-4ca8-a0d1-6a0fe4ccf612'
                },
                {
                  buildHookId: '5f6b08b3c9ebb1d92d6cf494',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-znoy9x19',
                  apiId: '7f17a72d-c38d-4695-acf6-5f0d96c6a5e1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sbrerup/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-znoy9x19.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
