# frozen_string_literal: true

require_relative 'decoding_board'

mastermind = DecodingBoard.new(holes: 3, max_colors: 5)

until mastermind.winner?
  guess = ''
  loop do
    print 'Choose a guess: '
    guess = gets.chomp
    break if mastermind.verify_guess(guess)
  end
  mastermind.check_guess(guess)
  puts mastermind
end

puts 'You win!'
