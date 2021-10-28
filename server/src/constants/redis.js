const session = (token) => ({ key: `sys:tokenInfoTest:${token}`, format: 'EX', time: 300 });
const user = ({ id }) => ({ key: `sys:userInfo:${id}`, format: 'EX', time: 86400 });

module.exports = {
    session,
    user,
};