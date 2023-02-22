Feature:Website

Scenario: Title shows as expected
Given Website is loaded
Then The title should be "Berrymans Buiscuits"

Scenario: Font changes color after click
Given Website is loaded
When Button is clicked
Then Font color changes

# Scenario: Picture loads
# When Website is loaded
# Then Picture shows as anticipated

# Scenario: Sub Headings load
# When Website is loaded
# Then Sub Headings show as anticipated

# Scenario: Text shows in form
# When Type in first name box
# Then writing shows in first name box

# Scenario: Contact us link works
# Given Website is loaded
# When Contact us is clicked
# Then Sends to new page

