Feature: Specify number of events
  Scenario: Default number of events displayed when not specified
    Given the user has not specified a number of events to display
    When the event list is loaded
    Then 32 events should be displayed by default

  Scenario: User can change the number of events displayed
    Given the user wants to see a different number of events
    When the user specifies a number of events to display
    Then that specified number of events should be displayed
    And the event list should update accordingly