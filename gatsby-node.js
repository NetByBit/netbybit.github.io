/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require('fs-extra')
const path = require('path')

exports.onPostBuild = () => {
  console.log('Copying locales')
  fs.copySync(
    path.join(__dirname, '/src/locales'),
    path.join(__dirname, '/public/locales')
  )
}

// function generatePagesInfos(defaultInfos) {
//   const pageId = defaultInfos.jsonName.slice(0, -5) // NOTE: Get pageId from "pageName.json"

//   const pageAr = {
//     ...defaultInfos,
//     context: {
//       pageId: 'index',
//       namespace: 'common',
//       language: 'ar',
//     },
//     path: '/ar',
//   }

//   const pageEN = {
//     ...defaultInfos,
//     context: {
//       pageId: 'index',
//       namespace: 'common',
//       language: 'en-US',
//     },
//     path: '/',
//   }

//   return [pageAr, pageEN]
// }

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage, deletePage } = actions

//   return new Promise((resolve, reject) => {
//     if (page.path.match(page.path.match(/^\/$/))) {
//       const i18nPages = generatePagesInfos(page)
//       deletePage(page) // Remove old default page
//       i18nPages.map(page => createPage(page)) // Create custom i18n pages
//     }
//     resolve()
//   })
// }

const locales = {
  'en-US': {
    path: 'en-US',
    default: true,
  },
  ar: {
    path: 'ar',
  },
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
        },
      })
    })

    resolve()
  })
}
