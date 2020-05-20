import Queue from '../lib/Queue'

import FileNet from '../lib/File'
import NetService from '../services/netservice'

export default {
    key: 'FileNetReport',
    options: {
        repeat: { cron: '*/6 * * * *' }
    },
    async handle({data}) {
        const dataMD = NetService.getNetDataAverage(FileNet);
        if (NetService.isBadNetData(dataMD, 15 , 35, 10)) {
          await Queue.add('AlertNetMail', {dataMD});
        }
        return mdDownload;
    }
}