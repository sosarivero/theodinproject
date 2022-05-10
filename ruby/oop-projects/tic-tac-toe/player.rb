# frozen_string_literal: true

require 'pry'

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

# Class for human player
class Human < Player
  def move(board)
    print "#{self}'s turn: "
    move = gets.chomp.to_i
    super(board, move)
  end
end

# Class for simple CPU player that just uses randomness to choose cells
class CPU < Player
  def move(board)
    move = board.available_spaces.sample + 1
    puts "Computer's turn: #{move}"
    super(board, move)
  end
end
