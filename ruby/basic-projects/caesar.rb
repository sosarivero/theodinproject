def caesar_cipher(string, shift)
  # Split the string into chars, then convert them to integers
  unicode = string.split('').map(&:ord)
  # Create a new array of chars with map
  solution = unicode.map do |int|
    if int.between?('A'.ord, 'Z'.ord)
      shifted_int = (int - 'A'.ord + shift) % 26 + 'A'.ord
      shifted_int.chr.upcase
    elsif int.between?('a'.ord, 'z'.ord)
      shifted_int = (int - 'a'.ord + shift) % 26 + 'a'.ord
      shifted_int.chr.downcase
    else
      int.chr
    end
  end
  solution.join
end

p caesar_cipher("SERR CVMMN!", 13)
