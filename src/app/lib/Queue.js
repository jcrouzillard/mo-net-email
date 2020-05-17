import Queue from 'bull';
import redisConfig from '../../config/redis'

import * as jobs from '../jobs';

const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle,
    options: job.options,
}))

export default {
    queues,
    add(name, data) {
        const queue = this.queues.find(queue => queue.name == name);

        return queue.bull.add(data, queue.options);
    }, 
    process() {
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle);

            queue.bull.on('failed', (jab, err) => {
                console.log('Job Failed', queue.key, job.data);
                console.log(err);
            });
        })
    }
}

// import RegistrationMail from '../jobs/RegistrationMail';

// const mailQueue = new Queue(RegistrationMail.key, redisConfig);

// mailQueue.on('failed', (job) => {
//     console.log('Errrrrou!', job.name, job.data);
// })

// export default mailQueue;