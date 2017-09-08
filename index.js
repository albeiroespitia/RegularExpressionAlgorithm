let exponent = prompt("Ingrese el exponente: ");

combinations(exponent);

function combinations(n) {
	if(n < 0){
		return;
	}
    let binary = [];
    for (let i = 0; i < (1 << n); i++) {
        let c = [];
        for (let j = 0; j < n; j++) {
            c.push(i & (1 << j) ? '1' : '0');
        }
        binary.push(c.join(' '));
    }
    document.write(`<span style="color:red;font-weight:900">L(L+DL)^${n} = </span> {`)
    for (let p = 0; p < binary.length; p++) {
        let testArray = binary[p].split(" ");
        document.write("L");
        for (let k = 0; k < testArray.length; k++) {
            if (testArray[k] == "1") {
                document.write("L");
            } else if (testArray[k] == "0") {
                document.write("DL");
            }
        }
        document.write(" , ");
    }
    document.write("}<br /> ")
    combinations(n-1);
}

