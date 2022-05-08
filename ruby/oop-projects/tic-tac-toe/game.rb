# frozen_string_literal: true

# Class for tic-tac-toe game
class Board
  attr_accessor :board
  attr_reader :available_spaces

  def initialize
    # Create the following array: [nil, nil, nil, nil, nil, nil, nil, nil, nil]
    @board = Array.new(9)
    @available_spaces = @board.map.with_index { |cell, i| i + 1 if cell.nil? }
  end


  def full?
    board.none?(nil)
  end

  def winner?(player_cells)
    self.WIN_CONDITIONS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7] [2, 5, 8], [0, 4, 8], [3, 4, 6]]
    WIN_CONDITIONS.each do |line|
      return true if (player_cells - line).empty?
    end
  end

  def to_s
    # Represents empty spaces with the numbers that players can use to input moves
    # 1 | 2 | 3
    # --+---+---
    # 4 | 5 | 6
    # --+---+---
    # 7 | 8 | 9
    p = @board.map.with_index { |cell, i| cell.nil? ? i + 1 : cell }
    "#{p[0]} | #{p[1]} | #{p[2]}\n--+---+---\n#{p[3]} | #{p[4]} | #{p[5]}\n--+---+---\n#{p[6]} | #{p[7]} | #{p[8]}\n"
  end
end

hello = Board.new
puts hello
pp hello.available_spaces
