const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const router = express.Router();
const secretKey = require('./config/jwt')
const SECRET_KEY = secretKey;

router.post('/login', (req, res, next) => {
    const nickname = "Jang Jae Hoon";

    token = jwt.sign({
        type: 'JWT',
        nickname: nickname,
    }, SECRET_KEY, {
        expiresIn: '15m',
        issuer: "jjh",
    });

    res.cookie('jwt', token)
    return res.status(200).json({
        code: 200,
        message: "토큰이 발급되었습니다.",
        jwt: token
    });
});

module.exports = router;