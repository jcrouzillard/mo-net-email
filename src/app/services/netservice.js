function isBadNetData(dataM, slaPing, slaDown, slaUp) {
    return dataM.ping > slaPing || dataM.mdDownload < slaDown || dataM.mdUpload < slaUp;
}

function getNetDataAverage(data) {
    const dataMD = {};
    const { ping, download, upload, day, time } = dataMD;

    dataMD.ping = data.reduce((f1, f2) => f1.ping + f2.ping, 0).toFixed(3);
    dataMD.download = data.reduce((f1, f2) => f1.download + f2.download, 0).toFixed(3);
    dataMD.upload = data.reduce((f1, f2) => f1.upload + f2.upload, 0).toFixed(3);
    return dataMD;
};

module.exports.getNetDataAverage = getNetDataAverage;
module.exports.isBadNetData = isBadNetData;
