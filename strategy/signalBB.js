import {bollingerBandData} from "../indicator/bollinger-band.js";
import { binanceClient } from "../exchangeSetting/binanceConfig.js";

const bbSignal = async(market)=>{
    const {bbPrevios, bbPrevios2} = await bollingerBandData();
    console.log(bbPrevios2);
    console.log(bbPrevios);


    const ohlc = await binanceClient.fetchOHLCV(market, '1h')
    const barPrice = {
        barPrevious: ohlc[ohlc.length - 2],
        barPrevious2: ohlc[ohlc.length - 3] 
    }
    console.log(barPrice);

}


// bbSignal()
export{
    bbSignal
}

