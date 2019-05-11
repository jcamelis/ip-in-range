module.exports = function toNumbers(str) {
    return str.split('.').map(Number);
};
