# frozen_string_literal: true

# Class for tic-tac-toe player
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
