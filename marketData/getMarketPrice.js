import { binanceClient } from "../exchangeSetting/ExchangeConfig.js";

const marketData = async(market, timeframe, exchange) => {
    if(exchange == "binance"){
        const ohlc = await binanceClient.fetchOHLCV(market, timeframe)
        const barPrice = {
            barPrevious: ohlc[ohlc.length - 2],
            barPrevious2: ohlc[ohlc.length - 3] 
        }
        // console.log("barPrice:", barPrice);
        return barPrice;
    }else{
        console.log("exchange not supported")
    }
}

export{
    marketData
}
