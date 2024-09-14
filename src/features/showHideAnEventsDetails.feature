Feature: Show and hide events details
  Scenario: An event element is collapsed by default
    Given a list of events
    When the user views the list
    Then each event element should be collapsed
    And no event details should be visible

  Scenario: User can expand an event to see details
    Given a list of collapsed events
    When the user clicks on an event
    Then the event should expand
    And the event details should be visible

  Scenario: User can collapse an event to hide details
    Given an expanded event showing details
    When the user clicks on the event
    Then the event should collapse
    And the event details should be hidden