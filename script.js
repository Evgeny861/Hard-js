    let num = 266219;

    let str = num + '';

    let sum = str.split('');

    let composition = 1

    for (let i = 0; i < sum.length; i++) {
        composition *= sum[i];
    }
    console.log(composition);

    let next = composition ** 3;


    let nexty = String( next).slice(0,2)
    console.log(nexty);
    




