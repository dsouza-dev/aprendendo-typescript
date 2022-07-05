import { Request, Response } from "express"
import EmailService from "../services/EmailService"

const users = [
  { name: 'Don', email: 'don@email.com' }
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService()
    emailService.sendEmail({
      to: {
        name: 'Don',
        email: 'don@email.com'
      },
      message: {
        subject: 'Sistema',
        body: 'bem vindo ao sistema'
      }
    })
    return res.send()
  }
}