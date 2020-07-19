import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)



export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[4]
    await sheet.loadCells('C3:E8')
    
    const textoRua = sheet.getCell(2, 2)
    const textoTel1 = sheet.getCell(3, 2)
    const textoTel2 = sheet.getCell(3, 3)
    const textoTel3 = sheet.getCell(3, 4)
    const textoCel1 = sheet.getCell(4, 2)
    const textoCel2 = sheet.getCell(4, 3)
    const textoCel3 = sheet.getCell(4, 4)
    const textoEmail = sheet.getCell(5, 2)
    const textoHorario = sheet.getCell(7, 2)

    res.end(JSON.stringify({      
      messageRua: textoRua.value,
      messageTel1: textoTel1.value,
      messageTel2: textoTel2.value,
      messageTel3: textoTel3.value,
      messageCel1: textoCel1.value,
      messageCel2: textoCel2.value,
      messageCel3: textoCel3.value,
      messageEmail: textoEmail.value,
      messageHorario: textoHorario.value

    }))

  } catch (err) {
    res.end(JSON.stringify({
      showCoupon: false,
      message: ''
    }))
  }



}