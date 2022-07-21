import tradingIndicator from 'trading-indicator';

const bb = tradingIndicator.bb;

const bollingerBandData = async(market, timeframe, exchange) => {
    try{
        let bbData = await bb(20, 2, "close", exchange, market, timeframe);
        const bbPrice = {
            // bbNow: bbData[bbData.length - 1],
            bbPrevios: bbData[bbData.length - 2],
            bbPrevios2: bbData[bbData.length - 3]
        };
        // console.log(bbPrice);
        return bbPrice;
    }catch(err){
        console.log("bollingerBandData Err: ", err);
    }  
}

export{
    bollingerBandData,
}