# frozen_string_literal: true

# Class for tic-tac-toe board-game
class Board
  attr_accessor :array_board, :available_spaces

  def initialize
    # Create the following array: [nil, nil, nil, nil, nil, nil, nil, nil, nil]
    @array_board = Array.new(9)
    @available_spaces = @array_board.map.with_index { |cell, i| i if cell.nil? }
  end

  def update(mark, position)
    if @array_board[position].nil?
      @array_board[position] = mark
      @available_spaces.delete(position)
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
    # Add +1 in the map in order to create the visual representation without 0-index, as it is most user-friendly visually.
    p = @array_board.map.with_index { |cell, i| cell.nil? ? i + 1 : cell }
    "\n#{p[0]} | #{p[1]} | #{p[2]}\n" \
      "--+---+---\n" \
      "#{p[3]} | #{p[4]} | #{p[5]}\n" \
      "--+---+---\n" \
      "#{p[6]} | #{p[7]} | #{p[8]}\n\n"
  end
end
