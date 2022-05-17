# frozen_string_literal: true

# Class for the Mastermind decoding board
class DecodingBoard
  attr_reader :code, :holes, :repeats
  attr_accessor :guesses

  def initialize(max_colors = 6, holes = 4, repeats: false)
    @colors = ('A'...'Z').to_a[0...max_colors]
    @holes = holes
    @repeats = repeats
    @guesses = []
  end

  def verify_guess(guess)
    validate_length(guess) && validate_colors(guess) && @repeats || validate_uniqueness(guess)
  end

  # Compares a guess with the code to crack
  def check_guess(guess)
    feedback = guess.split('').map.with_index do |char, i|
      if char == @code[i]
        'X'
      elsif code.include?(char)
        'O'
      else
        '-'
      end
    end
    # Appends hash of guess => result to an array of guesses
    @guesses << { guess => feedback.sort.reverse.join(' ') }
  end

  def make_code(computer: true)
    @code = @colors.sample(4) if computer
  end

  private

  def validate_colors(guess)
    if (guess.split('') - @colors).empty?
      true
    else
      puts "Incorrect input. List of valid colors: #{@colors}"
      false
    end
  end

  def validate_length(guess)
    if guess.length == @holes
      true
    else
      puts "Incorrect input. Guesses must be of length #{@holes}"
      false
    end
  end

  def validate_uniqueness(guess)
    if guess.chars.uniq.count == @holes
      true
    else
      puts 'Incorrect input. Colors cannot be repeated'
      false
    end
  end
end

board = DecodingBoard.new
board.make_code
pp board.verify_guess('AAAA')
