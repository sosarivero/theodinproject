# Class for the Mastermind decoding board
class DecodingBoard
  attr_reader :code

  def initialize(code)
    @code = code
  end

  def check(guess)
    feedback = []
    feedback = guess.split('').map.with_index do |char, i|
      if char == @code[i]
        feedback.push('X')
      elsif code.include?(char)
        feedback.push('O')
      else
        feedback.push('-')
      end
    end
  end
end

test = DecodingBoard.new('1234')
pp test.check('1435')
