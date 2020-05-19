import Mail from '../lib/Mail';

export default {
    key: 'AlertNetMail',
    async handle({ data }) {
        const content = JSON.parse(JSON.stringify({ data })).data.dataMD;
        await Mail.sendMail({
            from: 'Queue Test <queue@queuetest.com.br>',
            to: `Julien Crouzillard <jcrouzillard@gmail.com>`,
            subject: 'Alerta de queda media de velocidade de Download',
            html: `Media de Download:  ${content.mdDownload}`

        })
    }
}