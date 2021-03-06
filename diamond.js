const row = function (amount) {
    let string = '';

    for (let i = 1; i <= amount; i++) {
        string = string + '*';
    }

    return string;
};

const spaces = function (amount) {
    let string = '';

    for (let i = 1; i <= amount; i++) {
        string = string + ' ';
    }

    return string;
};

const upper = function (length) {
    const iCount = (length + 1) / 2;
    let rowStars = 1;
    let rowSpace = (length - 1) / 2;

    for (let i = 1; i <= iCount; i++) {
        console.log(spaces(rowSpace) + row(rowStars));

        rowStars = rowStars + 2;
        rowSpace = rowSpace - 1;
    }
};

const lower = function (length) {
    const iCount = (length - 1) / 2;
    let rowStars = length - 2;
    let rowSpace = 1;

    for (let i = 1; i <= iCount; i++) {
        console.log(spaces(rowSpace) + row(rowStars));

        rowStars = rowStars - 2;
        rowSpace = rowSpace + 1;
    }
};

const diamond = function (length) {
    if (length % 2 === 0) {
        length = length + 1;
    }

    upper(length);
    lower(length);
};

diamond(10);
