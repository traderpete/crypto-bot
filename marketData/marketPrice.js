import { binanceClient } from "../exchangeSetting/ExchangeConfig.js";

const marketData = async(market, timeframe) => {
    const ohlc = await binanceClient.fetchOHLCV(market, timeframe)
    const barPrice = {
        barPrevious: ohlc[ohlc.length - 2],
        barPrevious2: ohlc[ohlc.length - 3] 
    }
    // console.log("barPrice:", barPrice);
    return barPrice;
}

// const market = "BTC/BUSD";
// marketData(market);

export{
    marketData
}
