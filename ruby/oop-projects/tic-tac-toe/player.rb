# frozen_string_literal: true

# Class for tic-tac-toe player
class Player
  attr_reader :owned_cells, :mark, :name

  def initialize(name, mark)
    @name = name
    @mark = mark
    @owned_cells = []
  end

  def move(board, cell)
    index = cell.to_i - 1
    return false unless board.update(@mark, index)

    @owned_cells.push(index)
    true
  end

  def to_s
    @name
  end
end
