# API-for-Fund-Price

Get latestNAV price through an API call so you can use them anywhere

# Why?

You pay to get other solutions that you might not need. Also as F2P user sometimes I only need to see publically available, "how much is it today" price that is out there anyways.

Also, this is sort of Excel friendly if you track your investments through it.

# How to use

1. Currently it only pulls data from [https://fund.cnyes.com](https://fund.cnyes.com), a Taiwanese site that has some data. So please go find your fund that you want to track, then **copy the full https://fund.cnyes.com/details/<fund_name>/<some_other_stuff> link**.
2. Put it after https://fund-price-api.herokuapp.com/. I hosted it. Please don't spam it. Or else I will be poor poor.
3. Receive JSON if success!

## example

Query this:

`https://fund-price-api.herokuapp.com/cnyes/https://fund.cnyes.com/detail/%E5%AF%8C%E8%98%AD%E5%85%8B%E6%9E%97%E9%BB%83%E9%87%91%E5%9F%BA%E9%87%91%E7%BE%8E%E5%85%83A%E8%82%A1/B15,232/`

Returns this:

```json
{
  "isin": "US3535351072",
  "sitca": "",
  "displayName": "Franklin Gold and Precious Metals Fund A",
  "displayNameLocal": "富蘭克林黃金基金美元A股",
  "baseCurrency": "USD",
  "onshore": false,
  "inceptionDate": -19641600,
  "priceDate": 1613664000,
  "managementFee": 0.47,
  "nav": 23.17,
  "return1Month": -4.45361,
  "return3Month": 1.79233,
  "return1Year": 31.28309,
  "forSale": 0,
  "change": 0.03,
  "changePercent": 0.13,
  "currencyName": "美元",
  "forSaleUrl": "",
  "netAssetInfo": {
    "currency": "USD",
    "amount": 1108707670,
    "date": 1493308800
  },
  "currency": "USD",
  "categoryAbbr": "產業股票 - 貴金屬",
  "categoryAbbrId": "C48",
  "returns": {
    "return1Month": -4.45361,
    "return3Month": 1.79233,
    "return6Month": -6.68115,
    "return1Year": 31.28309,
    "accReturn3Year": 65.78574,
    "accReturn5Year": 154.79225,
    "accReturn10Year": -31.88101,
    "returnYTD": -7.72601
  },
  "indexReturns": {
    "return1Month": -7.07788,
    "return3Month": -9.46911,
    "return6Month": -22.85737,
    "return1Year": 13.16673,
    "returnYTD": -8.7811,
    "accReturn3Year": 54.15974,
    "accReturn5Year": 160.7159,
    "accReturn10Year": -20.20066
  },
  "categoryRankings": {
    "return1Month": { "ranking": 6, "total": 21, "surpassRate": 71 },
    "return3Month": { "ranking": 2, "total": 21, "surpassRate": 90 },
    "return6Month": { "ranking": 2, "total": 21, "surpassRate": 90 },
    "returnYTD": { "ranking": 8, "total": 21, "surpassRate": 62 },
    "return1Year": { "ranking": 2, "total": 21, "surpassRate": 90 },
    "accReturn3Year": { "ranking": 3, "total": 20, "surpassRate": 85 },
    "accReturn5Year": { "ranking": 6, "total": 16, "surpassRate": 63 },
    "accReturn10Year": { "ranking": 9, "total": 16, "surpassRate": 44 }
  },
  "categoryAverages": {
    "return1Month": -5.787419581667441,
    "return3Month": -6.602283447709711,
    "return6Month": -21.795813020009756,
    "return1Year": 7.627688932026122,
    "returnYTD": -9.21903361544063,
    "accReturn3Year": 43.97972703958906,
    "accReturn5Year": 99.23825130920645,
    "accReturn10Year": -32.99169842259223
  },
  "effectiveDate": 1613664000,
  "primaryProspectusIndexName": "S&P 500 TR USD",
  "investmentProviderNameLocal": "富蘭克林證券投資顧問(股)公司",
  "starRating": 3,
  "categoryLocal": "產業股票 - 貴金屬",
  "fundProfileLocal": "追求長期資本利得，次要目標為藉由投資賺取股利或利息收入以提供當期收益予股東。在一般市場狀況下，本基金將至少投資80%總資產於黃金及貴金屬營運公司所發行的證券。本基金得購買位於全球各地的黃金及貴金屬營運公司的證券，並且通常將顯著地投資在美國境外的公司。本基金得投資在不同市值規模之公司，包括小型及中型企業。本基金主要投資在股權證券，主要為普通股。本基金也可投資於美國、全球及歐洲的存託憑證。",
  "managerNameLocal": "SteveM.Land",
  "fundCompanyNameLocal": "富蘭克林證券投資顧問股份有限公司",
  "fundCompanyTel": "(02)2781-0088",
  "fundCompanyAddressLine1Local": "台北市忠孝東路四段87號8樓",
  "investmentArea": "全球市場",
  "domicileLocal": "美國",
  "riskLevel": 5,
  "fundManagerStartDate": 922896000,
  "portfolioDate": 1609344000,
  "minInvestment": null,
  "distributionFee": null,
  "frontLoadFee": 5.75,
  "deferLoadFee": null,
  "managementFeeMax": 0.63,
  "deferLoadMax": null,
  "custodianFee": null
}
```

(on 2021/02/22)

# Contribution

Thanks to myself for sponsoring this project, and the sole coder, also myself.

If you want to contribute, I plan to update fetching so it responds to the homepage of each fund rather than relying on Cnyes, please see if you can help create more starting point by adding more fetch\*.js scripts.

Currently no plan to keep a history of prices since that involves maintaining a database which I think costs money. Maybe when I'm richer I can consider doing it but until then we'll only have the latest price.
