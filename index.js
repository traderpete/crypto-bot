import { binanceClient } from "./exchangeSetting/ExchangeConfig.js";
import { bnbConfig } from "./symbolSetting/major.js";
import {bbSignal} from "./strategy/BBSignal.js";
import axios from 'axios'; 


const onTick = async(bnbConfig, binanceClient) => {
    const {market, timeframe, exchange} = bnbConfig;

    const signal = await bbSignal(market, timeframe, exchange);
    console.log(signal);

  
    // await binanceClient.loadMarkets();
    // const btc = await binanceClient.market('BTC/USDT')
    // console.log(btc);

    // const marketPrice = await binanceClient.fetchTicker(`${market}`)
    // console.log("Bid", marketPrice.bid);
    // console.log("ask", marketPrice.ask);


    // cancel exisiting orders
    // const orders = await binanceClient.fetchOpenOrders(market);
    // console.log(orders);
    // orders.forEach(async order =>{
    //     await binanceClient.cancelOrder(order.id);
    // });

    // const balances = await binanceClient.fetchBalance();
    // console.log(balances);
    // const assetBalance = balances.free[asset];
    // console.log("assetBalance",assetBalance);
    // const baseBalance = balances.free[base];
    // console.log("baseBalance", baseBalance);
    // const sellVolume = assetBalance * allocation;
    // console.log("sellVolume",sellVolume);
    // const buyVolume = (baseBalance * allocation) / marketPrice;

    // console.log("sellPrice", sellPrice);
    // await binanceClient.createLimitSellOrder(market, sellVolume, sellPrice);
    // await binanceClient.createLimitBuyOrder(market, buyVolume, buyPrice);

} 

// const run = ()=> {
//     setInterval(tick, config.tickInterval, config, binanceClient);
// }

// run();
onTick(bnbConfig, binanceClient); 