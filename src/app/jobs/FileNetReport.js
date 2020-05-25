import Queue from '../lib/Queue'

import FileNet from '../lib/File'
import NetService from '../services/netservice'

export default {
    key: 'FileNetReport',
    options: {
        // repeat: { cron: '*/6 * * * *' }
    },
    async handle({ data }) {
        const { ping, download, upload, day, time } = FileNet;
        const dataFile = {
            ping,
            download,
            upload,
            day,
            time,
        };
        NetService.getNetDataAverage(FileNet);
        await Queue.add('MonitorNetSpeed', { FileNet });


        // if (NetService.isBadNetData(dataMD, 15 , 35, 10)) {
        //   //await Queue.add('AlertNetMail', {dataMD});
        // }
        return dataFile;
    }
}