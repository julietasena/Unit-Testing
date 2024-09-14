function pin(n) {

    if (!Number.isInteger(n)) {
        return false;
    }

    let pinStr = n.toString();

    if (pinStr.length !== 4 && pinStr.length !== 6) {
        return false;
    }

    return true;
}

module.exports = pin;