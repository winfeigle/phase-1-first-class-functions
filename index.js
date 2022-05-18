const receivesAFunction = foo => foo();

const returnsANamedFunction = () => {
    return winFunction; 
}

function winFunction() {
    return 'word';
}

const returnsAnAnonymousFunction = () => {
    return function(){
        return 'another word';
    }
}