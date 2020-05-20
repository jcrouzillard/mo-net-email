import Mail from '../lib/Mail';


export default {
    key: 'AlertNetMail',
    async handle({ data }) {
        const content = JSON.parse(JSON.stringify({ data })).data.dataMD;
        await Mail.sendMail({
            from: `Net Monitor Cruzilla's Home <${process.env.MAIL_USER}>`,
            to: `Julien Crouzillard <jcrouzillard@gmail.com>`, // Pensar em como deixar esse email fixo em um propriedade
            subject: 'Queda de desempenho médio da sua internet',
            html: `<p> <b>Media de Ping:</b>  ${content.mdPing} </p>` +
                `<p> <b>Media de Download:</b>  ${content.mdDownload} </p> ` +
                `<p> <b>Media de Upload:</b>  ${content.mdUpload} </p> `
        })
    }
}