import { Component, OnInit } from '@angular/core';
import Kline from 'kline';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() {
  }

  ngOnInit() {
  	console.log('Kline', Kline);

  	    var kline = new Kline({
        element: "#kline_container",
        width: 1200,
        height: 650,
        theme: 'dark', // light/dark
        language: 'en-us', // zh-cn/en-us/zh-tw
        ranges: ["1w", "1d", "1h", "30m", "15m", "5m", "1m", "line"],
        symbol: "BTC",
        symbolName: "BTC/USD",
        type: "poll", // poll/socket
        url: "/assets/mock.json",
        limit: 1000,
        intervalTime: 5000,
        debug: true,
        showTrade: true,
        onResize: function(width, height) {
            console.log("chart resized: " + width + " " + height);
        }
    });

    kline.draw();
    kline.toggleTrade();

  }
}
