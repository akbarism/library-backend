module.exports = {
    response: (res, result, status, err, jumlah, jumlahContent) => {
        let resultPrint = {};
        if (status !== 200) {
            resultPrint.status = 'Failed';
            resultPrint.status_code = status;
            resultPrint.result = result;
            resultPrint.err = err || null;
            resultPrint.total = jumlah;
            resultPrint.totalpage = jumlahContent;
            return res.status(resultPrint.status_code).json(resultPrint);
        }
        resultPrint.status = 'Success';
        resultPrint.status_code = status;
        resultPrint.result = result;
        resultPrint.err = err || null;
        resultPrint.total = jumlah;
        resultPrint.totalpage = jumlahContent;
        return res.status(resultPrint.status_code).json(resultPrint);
    }
};