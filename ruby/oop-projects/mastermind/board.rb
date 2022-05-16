# frozen_string_literal: true

# Class for the Mastermind decoding board
class DecodingBoard
  attr_reader :code

  def initialize(code)
    @code = code
  end

  def check(guess)
    feedback = guess.split('').map.with_index do |char, i|
      if char == @code[i]
        'X'
      elsif code.include?(char)
        'O'
      else
        '-'
      end
    end
    # So the feedback always follows the same format and does not give information
    feedback.sort.reverse.join(' ')
  end
end
