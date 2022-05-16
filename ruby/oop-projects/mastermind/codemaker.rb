# Class for the player that creates the code for the MasterMind game
class CodeMaker
  PEGS = Array(1..6)
  # Todo = Add options for blanks and repeatable pegs
  def initialize(computer: true)
    @code = Array.sample(4) if computer
  end
end
