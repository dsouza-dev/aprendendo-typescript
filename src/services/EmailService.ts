interface IMailTo {
  name: string
  email: string
}

interface IMailMessage {
  subject: string
  body: string
  attachment?: string[]
}

interface IMessageDTO {
  to: IMailTo,
  message: IMailMessage
} // DTO - Data Transfer Object (DDD)

interface IMailService {
  sendEmail(request: IMessageDTO): void
}
class EmailService implements IMailService {
  sendEmail({ to, message }: IMessageDTO) {
    console.log(`Email Enviado para ${to.name}: ${message.subject}`)
  }
}

export default EmailService