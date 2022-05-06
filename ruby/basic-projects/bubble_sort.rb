# frozen_string_literal: true

def bubble_sort(array)
  loop do
    # Assume it is all sorted until a change is made
    all_sorted = true
    array.each_index do |i|
      if !array[i + 1].nil? && array[i] > array[i + 1]
        array[i], array[i + 1] = array[i + 1], array[i]
        all_sorted = false
      end
    end
    return array if all_sorted
  end
end

p bubble_sort([4, 3, 78, 2, 0, 2])
