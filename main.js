const value = parseInt(window.prompt('Enter the value'));
if (isNaN(value)) {
    window.alert('Error: not a number');
} else if (value < 10) {
    window.alert('Error: less then 10');
} else {
    let res = 0;
    for (var i = 1; i < value; i++) {
        console.log('res', res, 'i', i);
        res = i + res;
    }
    window.alert(res);
}

