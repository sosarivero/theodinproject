# frozen_string_literal: true

require 'pry'

# Class for tic-tac-toe board-game
class Board
  attr_accessor :array_board, :available_spaces

  def initialize
    # Create the following array: [nil, nil, nil, nil, nil, nil, nil, nil, nil]
    @array_board = Array.new(9)
    @available_spaces = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  end

  def update(mark, position)
    if @available_spaces.include?(position)
      @available_spaces.delete(position)
      @array_board[position] = mark
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
    p = @array_board.map.with_index { |cell, i| cell.nil? ? i + 1 : cell }
    "\n#{p[0]} | #{p[1]} | #{p[2]}\n" \
      "--+---+---\n" \
      "#{p[3]} | #{p[4]} | #{p[5]}\n" \
      "--+---+---\n" \
      "#{p[6]} | #{p[7]} | #{p[8]}\n\n"
  end
end
