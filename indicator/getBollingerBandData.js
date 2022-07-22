import tradingIndicator from 'trading-indicator';
import { BBInputs } from '../input/bollignerBandInputs.js';

const bb = tradingIndicator.bb;

const bollingerBandData = async(market, timeframe, exchange) => {
    try{
        const length = BBInputs.length;
        const mult = BBInputs.mult;
        let bbData = await bb(length, mult, "close", exchange, market, timeframe);
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