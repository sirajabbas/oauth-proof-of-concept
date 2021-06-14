/**
 * Author: Siraj
 * Create on Jun 14 2021
 * express response handler
 */


writeResponseMessage = (res, statusCode, status, payload, err) => {
    let msg = {
        status: status,
        code: statusCode,
        payload: payload,
    };

    if (err && process.env.NODE_ENV !== 'PRODUCTION') {
        msg.error = JSON.stringify(err);
    }
    res.status(statusCode);
    res.json(msg);
    res.end();
}


exports.writeResponseMessage = writeResponseMessage;
