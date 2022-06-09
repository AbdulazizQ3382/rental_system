import express, { Application, Request, Response } from 'express'
import { Prisma, PrismaClient } from '@prisma/client'
import { SampleRepo } from './sampleRepo'
const app: Application = express()
app.use(express.urlencoded({ extended: true }))

const prisma = new PrismaClient()
const port: number = 3001

SampleRepo.createAllData()

app.get('/contracts', async (req, res) => {
    const posts = await prisma.contract.findMany({
      include: { landLord: {
        include : {
          property: true 
        }
      } },

    })
    res.json(posts)
  })

  app.post(`/addContract`, async (req, res) => {
    const { title, content, renterName, mobile, size, type } = req.body
    const result = await prisma.contract.create({
      data: {
        title,
        renterName,
        content,
        landLord: { connect: { mobileNo:  mobile} },
        
      },
    })
    res.json(result)
  })

  app.post('/updateContract/:id', async (req, res) => {
    const { id } = req.params
    const title = req.body.title
    const content = req.body.content
    console.log(req.body);
    const post = await prisma.contract.updateMany({
      where: { id: Number(id) },
      data: { title: title, content: content},
    })
    res.json(post)
  })

  app.delete('/deleteContract/:id', async (req, res) => {
    const { id } = req.params
    const post = await prisma.contract.delete({
      where: {
        id: Number(id),
      },
    })
    res.json(post)
  })
  

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})