function receivesAFunction(callBack) {
    callBack();
}

function returnsANamedFunction() {
    const name = () => '';
    return name;
}

function returnsAnAnonymousFunction() {
    return () => ''
}