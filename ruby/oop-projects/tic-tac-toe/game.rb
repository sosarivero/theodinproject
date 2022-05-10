# frozen_string_literal: true

WIN_CONDITIONS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]].freeze

# Class to manage the game' state
class Game
  def initialize
    @board = Board.new
    @player1 = Player.new('Mario', 'O')
    @player2 = Player.new('Luigi', 'X')
    @next_turn = @player1
    puts @board
  end

  def play_round(player)
    loop do
      print "#{player} turn: "
      move = gets.chomp.to_i
      break if player.move(@board, move)
    end
    puts @board
    @next_turn = player == @player1 ? @player2 : @player1
  end

  def winner?
    [@player1, @player2].each do |player|
      return player if WIN_CONDITIONS.any? do |line|
        (line - player.owned_cells).empty?
      end
    end
    false
  end

  def play_game
    play_round(@next_turn) until winner? || @board.full?

    if winner?
      puts "#{winner?} (#{winner?.mark}) WINS!"
    elsif @board.full?
      puts 'DRAW!'
    end
  end
end
