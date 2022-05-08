# frozen_string_literal: true

# Class for tic-tac-toe board-game
class Board
  attr_accessor :board, :available_spaces

  def initialize
    # Create the following array: [nil, nil, nil, nil, nil, nil, nil, nil, nil]
    @board = Array.new(9)
    @available_spaces = @board.map.with_index { |cell, i| i if cell.nil? }
  end

  def full?
    board.none?(nil)
  end

  def to_s
    # Represents empty spaces with the numbers that players can use to input moves
    # 1 | 2 | 3
    # --+---+---
    # 4 | 5 | 6
    # --+---+---
    # 7 | 8 | 9
    p = @board.map.with_index { |cell, i| cell.nil? ? i : cell }
    "#{p[0]} | #{p[1]} | #{p[2]}\n--+---+---\n#{p[3]} | #{p[4]} | #{p[5]}\n--+---+---\n#{p[6]} | #{p[7]} | #{p[8]}\n"
  end
end

# Class for the tic-tac-toe players
class Player
  attr_reader :owned_cells

  @@count = 0

  def initialize(cpu: false)
    @cpu = cpu
    @mark = (@@count == 0) ? '◯' : '✗'
    @@count += 1
    @owned_cells = []
  end

  def move(board, cell_index)
    if board.available_spaces.include?(cell_index)
      board.board[cell_index] = @mark
      @owned_cells.push(cell_index)
    else
      puts 'That cell is not available!'
    end
  end

  def winner?
    win_conditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [3, 4, 6]]
    win_conditions.any? { |line| (line - @owned_cells).empty? }
  end
end
