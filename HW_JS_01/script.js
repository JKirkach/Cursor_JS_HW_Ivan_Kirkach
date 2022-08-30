const cola = 15.678;
const whiskey = 123.965;
const beer = 90.2345;
const SumPrice = cola+whiskey+beer; //229.8775
const MaxPrice = Math.max(cola,whiskey,beer);
const MinPrice = Math.min(cola,whiskey,beer);
const SumFloorPrice = Math.floor(cola)+Math.floor(whiskey)+Math.floor(beer); //228
const SumRound = (Math.round(SumFloorPrice/100)*100); //200
const clientMoney = 500;
const change = clientMoney - SumPrice;
const av_val = SumPrice/3;
const RandDiscount = Math.random()*100;
const Sum_with_RandDiscount = SumPrice - ((SumPrice/100) * RandDiscount);
const PureProfit = SumPrice/2 - ((SumPrice/100) * RandDiscount);


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

const list = `
                <div>Максимальна ціна ${MaxPrice} грн</div>
                <div>Мінімальна ціна ${MinPrice} грн</div>
                <div>Сума товарів ${SumPrice} грн</div>
                <div>Сума почерзі округлених товарів в меншу сторону ${SumFloorPrice} грн</div>
                <div>Чи сума округлених товарів є цілим числом ${SumFloorPrice %2 == 0}</div>
                <div>Здача з 500 грн = ${change.toFixed(2)} грн</div>
                <div>Середня ціна товарів = ${av_val.toFixed(2)} грн</div>
                <div>Випадкова знижка = ${RandDiscount.toFixed(1)} %</div>
                <div>Сума з урахуванням знижки ${(Sum_with_RandDiscount).toFixed(2)} грн</div>
                <div>Чистий прибуток = ${PureProfit.toFixed(2)} грн</div>` ;


document.getElementById("calculation").innerHTML = list;

