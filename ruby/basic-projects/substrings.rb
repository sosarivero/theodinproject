# frozen_string_literal: true

def substrings(string, word_array)
  frequency_dictionary = {}
  word_array.each do |word|
    matches = string.scan(/#{word}/i)
    frequency_dictionary[word] = matches.length unless matches.length.zero?
  end
  frequency_dictionary
end

dictionary = %w[below down go going horn how howdy it i low own part partner sit]
pp substrings('below', dictionary)
# Expected output:
# { "below" => 1, "low" => 1 }
pp substrings("Howdy partner, sit down! How's it going?", dictionary)
# Expected output:
# { "down" => 1, "go" => 1, "going" => 1, "how" => 2, "howdy" => 1, "it" => 2,
# "i" => 3, "own" => 1, "part" => 1, "partner" => 1, "sit" => 1 }
