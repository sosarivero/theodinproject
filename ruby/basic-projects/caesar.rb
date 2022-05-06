# frozen_string_literal: true

def caesar_cipher(string, shift)
  # Split the string into chars, then convert them to integers
  rotated_array = string.split('').map do |char|
    if char.match?(/[[:alpha:]]/)
      unicode = char.ord
      lettercase = unicode.between?('A'.ord, 'Z'.ord) ? 'A'.ord : 'a'.ord
      ((unicode - lettercase + shift) % 26 + lettercase).chr
    else
      char
    end
  end
  rotated_array.join
end

p caesar_cipher('SERR CVMMN!', 13)
