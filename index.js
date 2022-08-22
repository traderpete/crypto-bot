import { binanceClient } from "./exchangeSetting/ExchangeConfig.js";
import { marketInputs } from "./input/major.js"; 
import { bbSignal } from "./strategy/getBBSignal.js";
import { getCurrentTime } from "./utilities/getCurrentTime.js";
import { isNewBar } from "./utilities/isNewBar.js";
import axios from "axios";

const onTick = async (market, timeframe, exchange, binanceClient) => {
  // console.log(getCurrentTime());

  // Get BB Signal
  // const signal = await bbSignal(market, timeframe, exchange);
  // console.log("signal:", signal);

  // await binanceClient.loadMarkets();
  // const btc = await binanceClient.market('BTC/USDT')
  // console.log(btc);


  
  console.log(await binanceClient.fetchOHLCV(market, timeframe, undefined, 2));

  // console.log(await binanceClient.fetchOrders("CRV/BUSD", 1659511156353));
 
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
};

const checkNewBar = async (market, timeframe, exchange) => {
  // console.log(await isNewBar(market, timeframe));
  return await isNewBar(market, timeframe, exchange);
};

const run = () => {

 
      onTick(
        marketInputs.market,
        marketInputs.timeframe,
        marketInputs.exchange,
        binanceClient
      );


};

run();
