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

    const sheet = doc.sheetsByIndex[3]
    await sheet.loadCells('B3:B7')

    const paragrafoUm = sheet.getCell(2, 1)
    const paragrafoDois = sheet.getCell(3, 1)
    const paragrafoTres = sheet.getCell(4, 1)
    const paragrafoQuatro = sheet.getCell(5, 1)
    const paragrafoCinco = sheet.getCell(6, 1)
    
    res.end(JSON.stringify({      
      message1: paragrafoUm.value,
      message2: paragrafoDois.value,
      message3: paragrafoTres.value,
      message4: paragrafoQuatro.value,
      message5: paragrafoCinco.value
    }))

  } catch (err) {
    res.end(JSON.stringify({      
      message: ''
    }))
  }



}