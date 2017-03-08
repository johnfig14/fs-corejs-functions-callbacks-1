export default {
    add(num1, num2, callback) {
        const result = num1 + num2;
        return callback(null, result);
    },
    multiply(num3, num4, callback) {
        return callback(null, num3 * num4);
    }
};