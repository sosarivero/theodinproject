# frozen_string_literal: true

def stock_picker(prices)
  min_max = [], best_profit = 0
  prices.each_index do |i|
    highest = prices[i..-1].max
    current_profit = highest - prices[i]
    if current_profit > best_profit
      best_profit = current_profit
      min_max = [i, prices.rindex(highest)]
    end
  end
  min_max
end

p stock_picker([30, 3, 6, 9, 15, 8, 6, 1, 0])
#  => [1,4]  # for a profit of $15 - $3 == $12
