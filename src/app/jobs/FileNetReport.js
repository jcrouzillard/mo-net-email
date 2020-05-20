import Queue from '../lib/Queue'

import FileNet from '../lib/File'
import FileGraphNetHtml from '../lib/FileGraphNetHtml'

export default {
    key: 'FileNetReport',
    options: {
        // delay: 5,
        repeat: { cron: '*/6 * * * *' }
    },
    async handle({data}) {
        let pingTotal = 0;
        let downloadTotal = 0;
        let uploadTotal = 0;

        // console.log(FileGraphNetHtml)

        FileNet.forEach(item => {
            pingTotal += item.ping;
            downloadTotal += item.download;
            uploadTotal += item.upload;
        })
        let mdPing = (pingTotal / Object.keys(FileNet).length);
        let mdDownload = (downloadTotal / Object.keys(FileNet).length);
        let mdUpload = (uploadTotal / Object.keys(FileNet).length);

        const dataMD = {
            mdPing,
            mdDownload,
            mdUpload,
        };

        dataMD.mdPing =  mdPing.toFixed(3);
        dataMD.mdDownload =  mdDownload.toFixed(3);
        dataMD.mdUpload =  mdUpload.toFixed(3);

        if(mdPing>15 
            || mdDownload<35 
            || mdUpload<10 ) {
            await Queue.add('AlertNetMail', {dataMD});
        }

        return mdDownload;
    }
}