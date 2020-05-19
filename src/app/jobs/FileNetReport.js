import Queue from '../lib/Queue'

import FileNet from '../lib/File'

export default {
    key: 'FileNetReport',
    options: {
        // delay: 5,
        repeat: { cron: '*/20 * * * *' }
    },
    async handle({ data }) {
        console.log('FileNet', Object.keys(FileNet).length);
        let downloadTotal = 0;
        FileNet.forEach(item => {
            downloadTotal += item.download;
        })
        let mdDownload = (downloadTotal / Object.keys(FileNet).length);
        console.log(downloadTotal)
        console.log('Media de Download: ', mdDownload.toFixed(3))
        // console.log('FileNetReport', file);

        const dataMD = {
            mdDownload,
        };

        dataMD.mdDownload =  mdDownload.toFixed(3);

        if(mdDownload<37 )
            await Queue.add('AlertNetMail', {dataMD});

        return mdDownload;
    }
}