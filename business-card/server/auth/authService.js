const { verifyToken, GenerateAuthToken } = require('./providers/jwt');
const { handleError } = require('../utils/errorHandler');
const config = require('config');

const tokenGenerator = config.get('TOKEN_GENERATOR');

const auth = (req, res, next) => {
    if(tokenGenerator === 'jwt'){
        try {
            const tokenFromClient = req.headers['x-auth-token'];
            if(!tokenFromClient) throw new Error("Please Login")

            const uesrInfo = verifyToken(tokenFromClient)
            if(!uesrInfo) throw new Error("Auth Err")

            req.user = uesrInfo
            return next()

        } catch (error) {
            return handleError(res, 401, error.message)
        }
    }

    return handleError(req, 500, 'You not use JWT');
}

module.exports = auth;