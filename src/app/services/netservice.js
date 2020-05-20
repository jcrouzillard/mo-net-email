function isBadNetData(dataM, slaPing, slaDown, slaUp) {
    return dataM.ping > slaPing || dataM.mdDownload < slaDown || dataM.mdUpload < slaUp;
}

function getNetDataAverage(FileNet) {
    const dataMD = {
        ping,
        download,
        upload,
    };
    dataMD.ping = FileNet.reduce((f1, f2) => f1.ping + f2.ping, 0).toFixed(3);
    dataMD.download = FileNet.reduce((f1, f2) => f1.download + f2.download, 0).toFixed(3);
    dataMD.upload = FileNet.reduce((f1, f2) => f1.upload + f2.upload, 0).toFixed(3);
    return dataMD;
};

module.exports.getNetDataAverage = getNetDataAverage;
module.exports.isBadNetData = isBadNetData;
