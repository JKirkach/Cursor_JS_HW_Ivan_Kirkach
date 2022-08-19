let cola = 15.678;
let whiskey = 123.965;
let beer = 90.2345;
let SumPrice = cola+whiskey+beer; //229.8775
let MaxPrice = Math.max(cola,whiskey,beer);
let MinPrice = Math.min(cola,whiskey,beer);
let SumFloorPrice = Math.floor(cola)+Math.floor(whiskey)+Math.floor(beer); //228
let SumRound = (Math.round(SumFloorPrice/100)*100); //200
let change = 500 - 229.8775;
let av_val = SumPrice/3;
let RandDiscount = Math.random()*100;
let Sum_with_RandDiscount = SumPrice - ((SumPrice/100) * RandDiscount);
let PureProfit = SumPrice/2 - ((SumPrice/100) * RandDiscount);


console.log ("Max price is - " + MaxPrice); //123.965
console.log ("Min price is - " + MinPrice); //15.678
console.log (SumPrice); //229.8775
console.log (SumFloorPrice); //228
console.log(SumRound); //200
console.log(SumFloorPrice %2 == 0); //true
console.log(change.toFixed(2));
console.log(av_val.toFixed(2));
console.log(RandDiscount);
console.log((Sum_with_RandDiscount).toFixed(2));
console.log(PureProfit);

let list = `
                <h4>Максимальна ціна ${MaxPrice} грн</h4>
                <h4>Мінімальна ціна ${MinPrice} грн</h4>
                <h4>Сума товарів ${SumPrice} грн</h4>
                <h4>Сума почерзі округлених товарів в меншу сторону ${SumFloorPrice} грн</h4>
                <h4>Чи сума округлених товарів є цілим числом ${SumFloorPrice %2 == 0}</h4>
                <h4>Здача з 500 грн = ${change.toFixed(2)} грн</h4>
                <h4>Середня ціна товарів = ${av_val.toFixed(2)} грн</h4>
                <h4>Випадкова знижка = ${RandDiscount} %</h4>
                <h4>Сума з урахуванням знижки ${(Sum_with_RandDiscount).toFixed(2)} грн</h4>
                <h4>Чистий прибуток = ${PureProfit} грн</h4>` ;


document.getElementById("calculation").innerHTML = list;

