module.exports.cookieTestSpecialCode = cookieTestSpecialCode;
async function cookieTestSpecialCode(data) {
    const specialCodeUser = data.specialcode;
    const specialCode = await data.userAuthorization.getSpecialCode();
    if (!specialCode || !specialCodeUser || (specialCodeUser !== specialCode)) {
        return {
            type: "code",
            code: 404
        }
    }
    return {
        type: "code",
        code: 200
    }
}

module.exports.cookieDeleteAll = cookieDeleteAll;
async function cookieDeleteAll(data) {
    const specialCodeUser = data.specialcode;
    const specialCode = await data.userAuthorization.getSpecialCode();
    if (!specialCode || !specialCodeUser || (specialCodeUser !== specialCode)) {
        return {
            type: "code",
            code: 404
        }
    }

    data.app.cookiesList = {};
    return {
        type: "code",
        code: 200
    }
}



module.exports.startApi = startApi;
async function startApi(app) {
    app.get("/api/cookie/", async function (req, res) {
        try {
            const data = await require("../functions/apiActions").prepareData(app, req, res);
            const result = await cookieDeleteAll(data);
            await require("../functions/apiActions").sendResponse(req, res, result);
        } catch (error) {
            console.log("ERROR: GET /api/cookie/");
            console.log(error);
            res.sendStatus(500);
        }
    })

    app.delete("/api/cookie/", async function (req, res) {
        try {
            const data = await require("../functions/apiActions").prepareData(app, req, res);
            const result = await cookieDeleteAll(data);
            await require("../functions/apiActions").sendResponse(req, res, result);
        } catch (error) {
            console.log("ERROR: DELETE /api/cookie/");
            console.log(error);
            res.sendStatus(500);
        }
    })
}