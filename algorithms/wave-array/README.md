# Wave Array — Best Discount Day

## Task

Given an array of daily prices, find the **local peaks** (a day where the price is higher than both the day before and the day after), then determine which peak represents the best candidate according to the given criteria (e.g. the highest peak value).

## Approach

The array is scanned from index 1 to length-2 (so that both neighbors always exist), collecting every index where `price[i-1] < price[i] > price[i+1]`. The collected peaks are then sorted by value to determine the best one.
