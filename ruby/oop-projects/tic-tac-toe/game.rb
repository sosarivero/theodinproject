# frozen_string_literal: true

# Class for tic-tac-toe game
class Board
  attr_accessor :board
  attr_reader :available_spaces

  def initialize
    # Create the following array: [nil, nil, nil, nil, nil, nil, nil, nil, nil]
    @board = Array.new(9)
  end

  @available_spaces = board.each_index { |i| i if board[i].nil? }

  def full?
    board.none?(nil)
  end
end
