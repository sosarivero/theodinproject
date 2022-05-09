# frozen_string_literal: true

# Class to manage the game' state
class Game
  def initialize
    @game_board = TicTacToeBoard.new
    @player1 = Player.new('Mario', 'O')
    @player2 = Player.new('Luigi', 'X')
    @next_turn = @player1
    puts @game_board
  end

  def play_round(player)
    puts "#{player} turn:"
    move = gets.chomp.to_i
    player.move(@game_board, move)
    @next_turn = player == @player1 ? @player2 : @player1
    puts @game_board
  end

  def winner?
    @player1.winner? || @player2.winner?
  end

  def play_game
    play_round(@next_turn) until winner? || @game_board.full?

    puts 'DRAW!' if @game_board.full?
    winner = @player1.winner? ? @player1 : @player2
    puts "#{winner} WINS!" if winner?
  end
end
