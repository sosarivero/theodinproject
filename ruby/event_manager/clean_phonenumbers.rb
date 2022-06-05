# If the phone number is less than 10 digits, assume that it is a bad number
# If the phone number is 11 digits and the first number is not 1, then it is a bad number
# If the phone number is more than 11 digits, assume that it is a bad number

def clean_phone_number(phone_number)
  phone_number.gsub!(/\D/, '')
  # If the phone number is 10 digits, assume that it is good
  if phone_number.length == 10
    phone_number
  # If the phone number is 11 digits and the first number is 1, trim the 1 and use the remaining 10 digits
  elsif phone_number == 11 && phone_number.start_with?('1')
    phone_number.slice(0)
  # Else, assume that it is a bad number
  else
    'Bad Number'
  end
end
