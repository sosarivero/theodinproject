# frozen_string_literal: true

# Class for tic-tac-toe board-game
class TicTacToeBoard
  attr_accessor :array_board, :available_spaces

  def initialize
    # Create the following array: [nil, nil, nil, nil, nil, nil, nil, nil, nil]
    @array_board = Array.new(9)
    @available_spaces = @array_board.map.with_index { |cell, i| i if cell.nil? }
  end

  def update(mark, position)
    position = position.to_i
    if @array_board[position].nil?
      @array_board[position] = mark
      @available_spaces.delete_at(position)
      true
    else
      puts 'Invalid or unavailable position!'
      false
    end
  end

  def full?
    @array_board.none?(nil)
  end

  def to_s
    # Represents empty spaces with the numbers that players can use to input moves
    # 1 | 2 | 3
    # --+---+---
    # 4 | 5 | 6
    # --+---+---
    # 7 | 8 | 9
    p = @array_board.map.with_index { |cell, i| cell.nil? ? i : cell }
    "#{p[0]} | #{p[1]} | #{p[2]}\n--+---+---\n#{p[3]} | #{p[4]} | #{p[5]}\n--+---+---\n#{p[6]} | #{p[7]} | #{p[8]}\n"
  end
end

# Class for the tic-tac-toe players
class Player
  attr_reader :owned_cells, :mark, :name

  def initialize(name, mark)
    @name = name
    @mark = mark
    @owned_cells = []
  end

  def move(board, cell_index)
    return false unless board.update(@mark, cell_index)

    @owned_cells.push(cell_index)
    true
  end

  def winner?
    win_conditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [3, 4, 6]]
    win_conditions.any? { |line| (line - @owned_cells).empty? }
  end

  def to_s
    @name
  end
end

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

game = Game.new
game.play_game
