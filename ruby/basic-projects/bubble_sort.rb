# frozen_string_literal: true

def bubble_sort(array)
  loop do
    changed = false
    array.each_index do |i|
      if !array[i + 1].nil? && array[i] > array[i + 1]
        array[i], array[i + 1] = array[i + 1], array[i]
        changed = true
      end
    end
    return array unless changed
  end
end

p bubble_sort([4, 3, 78, 2, 0, 2])
