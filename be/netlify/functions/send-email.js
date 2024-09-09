import express from "express"
import serverless from "serverless-http"
import { Resend } from "resend"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const resend = new Resend(process.env.REACT_APP_RESEND)
const app = express()
const corsOptions = {
  origin: "https://rapidtell.com",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "x-api-key"]
}
app.use(cors(corsOptions))
const checkApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"]
  const validApiKey = process.env.API_KEY

  if (apiKey && apiKey === validApiKey) {
    next()
  } else {
    res.status(403).send("Forbidden: Invalid API Key")
  }
}
app.use(checkApiKey)
app.get("/.netlify/functions/send-email", async (req, res) => {
  const { email, name, phone, color, price, ram, rom } = req.query
  try {
    const response = await resend.emails.send({
      from: "Rapidtell <info@rapidtell.com>",
      to: email,
      subject: `${phone} - ${capitalizeFirstLetter(
        name
      )}, Gracias por confiar en Rapidtell.`,
      html: `
        <!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title></title><!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
            body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
            table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
            img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
            p { display:block;margin:13px 0; }</style><!--[if mso]>
          <noscript>
          <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
          </noscript>
          <![endif]--><!--[if lte mso 11]>
          <style type="text/css">
            .mj-outlook-group-fix { width:100% !important; }
          </style>
          <![endif]--><style type="text/css">@media only screen and (min-width:480px) {
          .mj-column-per-100 { width:100% !important; max-width: 100%; }
        }</style><style media="screen and (min-width:480px)">.moz-text-html .mj-column-per-100 { width:100% !important; max-width: 100%; }</style><style type="text/css">@media only screen and (max-width:480px) {
        table.mj-full-width-mobile { width: 100% !important; }
        td.mj-full-width-mobile { width: auto !important; }
      }</style></head><body style="word-spacing:normal;"><div><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tbody><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:60px;"><a href="https://rapidtell.com/" target="_blank"><img height="auto" src="https://rapidtell.com/images/email-logo.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="120"></a></td></tr></tbody></table></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:16px;word-break:break-word;"><div style="font-family:Poppins,sans-serif;font-size:16px;font-weight:500;line-height:24px;text-align:center;color:#000000;">Compra tu teléfono. Más rápido. Más seguro. En un clic.</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-top:50px;padding-bottom:16px;word-break:break-word;"><div style="font-family:Poppins,sans-serif;font-size:16px;font-weight:500;line-height:24px;text-align:left;color:#000000;"><span style="font-weight:bold;">Detalles de tu compra:</span><br>${phone} - ${color}<br/>${ram}GB / RAM - ${rom}GB / ROM<br><br><span style="font-weight:bold;">Total pagado:</span><br>${price}</div></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;padding-top:20px;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tbody><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:16px;word-break:break-word;"><div style="font-family:Poppins,sans-serif;font-size:12px;font-weight:500;line-height:24px;text-align:left;color:#000000;"><span style="font-weight:bold;">Sobre la garantía:</span><br><span style="line-height:16px">Contamos con una garantía de 1 mes por problemas de software y 3 días por pin de carga en cualquiera de nuestros equipos.<br><br><span style="font-weight:bold;">Información relevante sobre tu compra:</span><br>* Equipos completamente nuevos.<br>* No se aceptan devoluciones.<br>* Todos los equipos vienen con su caja, cargador y accesorios.<br>* Las entregas son gratuitas solo en los municipios Maracaibo y San Francisco.<br>* Cualquier envío fuera de estos municipios, nuestro equipo de venta se pondra en contacto.<br>* Sí realizas la compra antes de las 3PM., garantizamos la entrega el mismo día en los municipios Maracaibo y San Fco.<br>* Cualquier otra información que requiras no dudes en contactarnos: info@rapidtell.com | (whatsapp) +58 412-2078579.</span></div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:16px;word-break:break-word;"><div style="font-family:Poppins,sans-serif;font-size:16px;font-weight:500;line-height:24px;text-align:center;color:#000000;">Gracias por confiar en <a href="https://rapidtell.com/" style="color:#000;">Rapidtell</a></div></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>
        `
    })
    if (response.data) {
      res.send("Correo electrónico enviado correctamente")
    } else {
      res
        .status(401)
        .send("Error al enviar correo electrónico: " + response.error.message)
    }
  } catch (error) {
    res.status(500).send("Error al enviar correo electrónico: " + error)
  }
})
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
export const handler = serverless(app)
