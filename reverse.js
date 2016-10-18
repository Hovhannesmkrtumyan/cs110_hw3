const reverse = function (array) {
    const array = [];
    const length = array.length;

    for (let i = length - 1; i >= 0; i--) {
        array.push(array[i]);
    }

    return array;
};
