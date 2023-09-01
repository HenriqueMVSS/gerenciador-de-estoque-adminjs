
import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
import * as AdminJSSequelize from '@adminjs/sequelize';
import { Product } from './models/Product';
import { Stock } from './models/Stock';

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
})
​
const PORT = 3000
​
const start = async () => {
  const app = express()
​
  const admin = new AdminJS({
    resources: [
      {
        resource: Product,
        options: {
          properties: {
            createdAt: {
              isVisible: { add: false, edit: false, list:true, show:true, filter:true}
            },
            updatedAt: {
              isVisible: { add: false, edit: false, list:true, show:true, filter:true}
            },
          }
        }
      },
      {
        resource: Stock,
          options: {
            properties: {
              createdAt: {
                isVisible: { add: false, edit: false, list:true, show:true, filter:true}
              },
              updatedAt: {
                isVisible: { add: false, edit: false, list:true, show:true, filter:true}
              },
            }
          }
      }
    ],
    rootPath: '/admin',
    dashboard: {
      component: AdminJS.bundle('./components/dashboard.jsx')
     },
     branding: {
      companyName: "Gerenciador de Estoque de Produtos"
     }
  })
​
  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)
​
  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}
​
start()