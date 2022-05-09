# frozen_string_literal: true

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
      puts "#{player} turn:"
      move = gets.chomp.to_i
      break if player.move(@board, move)
    end
    puts @board
    @next_turn = player == @player1 ? @player2 : @player1
  end

  def winner?
    @player1.winner? || @player2.winner?
  end

  def play_game
    play_round(@next_turn) until winner? || @board.full?

    puts 'DRAW!' if @board.full?
    winner = @player1.winner? ? @player1 : @player2
    puts "#{winner} WINS!" if winner?
  end
end
