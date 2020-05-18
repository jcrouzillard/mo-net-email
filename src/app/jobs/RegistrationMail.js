import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    async handle({ data }) {
        const { user } = data;
        console.log('RegEmail ' ,user);

        // await Mail.sendMail({
        //     from: 'Queue Test <queue@queuetest.com.br>',
        //     to: `${user.name} <${user.email}>`,
        //     subject: 'Cadastro de usuario',
        //     html: "Vamo lá campeão..."

        // })
    }
}