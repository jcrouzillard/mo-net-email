import Queue from '../lib/Queue'

export default {
    async store(req, res) {
        const { action } = req.body;

        const data = {
            action,
        };

        // await Queue.add('RegistrationMail', { user });

        await Queue.add('FileNetReport', {data});

        // await Queue.add('UserReport', { user });

        return res.json(data);
    }
};