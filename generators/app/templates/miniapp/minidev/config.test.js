const Ding = require('./lib/ding');
const Mini = require('./lib/mini');

module.exports = (async function () {
    let params = {
        'msgtype': 'markdown',
        'at': {},
        'markdown': {},
    };
    let s1, s2;

    try {
        // 授权
        await Mini.auth();
        const {
            qrcodeUrl,
        } = await Mini.preview('<%= appid %>', './dist', null);

        s1 = {
            "at": {
                "atMobiles": ['<%= testPhone %>']
            }
        };

        s2 = {
            "markdown": {
                "title": "新功能来临，测试大佬们请速速验证验证，二维码来也",
                "text": `@<%= testPhone %> \n ![screenshot](${qrcodeUrl})`
            }
        };
    } catch (error) {
        console.error(error);
        s1 = {
            "at": {
                "atMobiles": ["<%= devPhone %>"]
            }
        };
        s2 = {
            "markdown": {
                "title": "生成二维码失败",
                "text": `@<%= devPhone %> \n **生成二维码失败** \n > 问题原因：**${error && error.msg}**`
            }
        };
    } finally {
        Object.assign(params, s1, s2);
        const ding = new Ding();
        await ding.customSendMsg(params);
        params = null;
        s1 = null;
        s2 = null;
    }
})();
