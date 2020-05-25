import Queue from '../lib/Queue'

export default {
    async store(req, res) {
        const { action } = req.body;

        const data = {
            action,
        };


        await Queue.add('FileNetReport', {data});


        return res.json(data);
    }
};