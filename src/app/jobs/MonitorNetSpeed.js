import Queue from '../lib/Queue'
import NetService from '../services/netservice'
import netConfig from '../../config/net';
import speedTest from '../services/speedtest'




export default {
    key: 'MonitorNetSpeed',
    options: {
        // repeat: { cron: '*/1 * * * *' }
    },
    async handle({ data }) {

        console.log(speedTest.getNetDataAverage())

        // const { speedTest } = require('record-wifi-speed')
        const wifiName = netConfig.wifi;
        const resultsDirectory = 'queue';
        // netConfig.savePath
        // speedTest({ wifiName, resultsDirectory })

        return data;
    }
}