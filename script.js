function changeNum(val) {
    var num = document.getElementById('num').value;
    var newNum = parseInt(num,10) + val;
    document.getElementById('num').value = newNum;
    return newNum;
}	