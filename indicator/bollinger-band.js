import tradingIndicator from 'trading-indicator';

const bb = tradingIndicator.bb;


let ticker = async() => {
    try{
        let bbData = await bb(20, 2, "close", "binance", "BTC/BUSD", "1h")
        console.log(bbData[bbData.length - 1])
        console.log(bbData[bbData.length - 2]);
        console.log(bbData[bbData.length - 3]);
    }catch(err){
        console.log(err);
    }
    
}

ticker();