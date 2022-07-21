import {bollingerBandData} from "../indicator/bollinger-band.js";
import {marketData} from "../marketData/marketPrice.js";

const bbSignal = async(market, timeframe, exchange)=>{
    // Bollinger Band Data
    const {bbPrevios, bbPrevios2} = await bollingerBandData(market, timeframe, exchange);
    // console.log("bbPrevios2:", bbPrevios2);
    // console.log("bbPrevios:", bbPrevios);

    // Market Data
    const {barPrevious, barPrevious2} = await marketData(market, timeframe);
    // console.log("barPrevious", barPrevious);
    // console.log("barPrevious2", barPrevious2); 

    // Signal Generator
    let signal = "there's no signal";

    const closingPricePreviousBar =  await barPrevious[4];
    const closingPricePreviousBar2 = await barPrevious2[4];
    const bbLowerPriceBar = await bbPrevios.lower;
    const bbLowerPriceBar2 = await bbPrevios2.lower;
    const bbUpperPriceBar = await bbPrevios.upper;
    const bbupperPriceBar2 = await bbPrevios2.upper;

    if( (bbLowerPriceBar <= closingPricePreviousBar) && (bbLowerPriceBar2 > closingPricePreviousBar2) ){
        return signal = "buy";
    }else if((bbUpperPriceBar >= closingPricePreviousBar) && (bbupperPriceBar2 < closingPricePreviousBar2)){
        return signal = "sell";
    }else{
        return "there's no signal";
    }
}   

// bbSignal()
export{
    bbSignal
}

