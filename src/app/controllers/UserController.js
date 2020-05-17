import Mail from '../lib/Mail'

export default {
    async store(req, res) {
        const { name, email, password } = req.body;
        
        const user = {
            name,
            email,
            password,
        };

        console.log();

        await Mail.sendMail({
            from: 'Queue Test <queue@queuetest.com.br>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de usuario',
            html: "Vamo lá campeão..."

        })

        return res.json(user);
    }
};