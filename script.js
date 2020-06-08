    let num = 266219;

    let str = num + '';

    let sum = str.split('');

    let composition = 1

    for (let i = 0; i < sum.length; i++) {
        composition *= sum[i];
    }
    console.log(composition);




