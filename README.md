# Meet App

## Introduction
The Events App is a user-friendly application designed to help users find and manage events happening in their area. 
It offers a variety of features to enhance the user experience, including viewing and hiding event details, specifying 
the number of events, using the app offline, adding an app shortcut to the home screen, visualizing event details in charts, and filtering events by city.

## Features
**1. Show/Hide Event Details**
View event details: Allows users to see detailed information about a specific event.

Hide event details: Enables users to hide the detailed information after reading it.

**2. Specify Number of Events**
View number of events: Users can see how many events are happening in their area.

Filter by category: Users can view the number of events in a specific category.

**3. Use the App When Offline**
Offline access: Users can access previously loaded event details even without an internet connection.

Error message: Displays an error message if users try to load new events while offline.

**4. Display Charts Visualizing Event Details**
Pie chart of event categories: Visual representation of the distribution of event categories.

Bar chart of events by date: Visual representation of the number of events on each date.

**5. Filter Events By City**
Select from dropdown: Users can filter events by selecting a city from a dropdown menu.

Type city name: Users can filter events by typing a city name and selecting from autocomplete suggestions.

Clear filter: Users can view all events after removing the city filter.

No events message: Displays a message if no events are available in the selected city.

## User Stories & Scenarios

### Filter Events By City
  As a user,
  
  I should be able to filter events by choosing a specific city,
  
  so that I can narrow down my options in terms of location.

 **Scenario:** Filter events by selecting a city from a dropdown
 
    Given I am on the events page
    
    When I select a city from the city dropdown menu

    And I click on the "Filter" button
    
    Then I should see the events filtered to show only those in the selected city

  **Scenario:** Filter events by typing a city name
  
    Given I am on the events page
    
    When I type the name of a city into the city search bar
    
    And I select the city from the autocomplete suggestions
    
    And I click on the "Filter" button
    
    Then I should see the events filtered to show only those in the selected city

  **Scenario:** View all events after removing the city filter
  
    Given I have filtered events by a specific city
    
    When I click on the "Clear Filter" button
    
    Then I should see all events regardless of city

  **Scenario:** No events available for the selected city
  
    Given I am on the events page
    
    When I select a city from the city dropdown menu
    
    And I click on the "Filter" button
    
    Then I should see a message indicating that no events are available in the selected city

### Show/Hide Event Details
  As a user,
  
  I should be able to view details of a certain event and hide these details when I am done reading it,
  
  so that I can understand more about the event and get the necessary information to attend the event.

  **Scenario:**  Show event details
  
    Given I am on the events page
    
    When I click on the "Show Details" button for an event
    
    Then I should see the event details displayed

  **Scenario:**  Hide event details
  
    Given I have shown the details for an event
    
    When I click on the "Hide Details" button for the same event
    
    Then the event details should be hidden

### Specify Number of Events
  As a user,
  
  I should be able to view how many events are happening in my area,
  
  so that I can make a decision on what event to attend.

  **Scenario:** View number of events in the area
  
    Given I am on the home page
    
    When I enter my location
    
    And I click on the "Search Events" button
    
    Then I should see the number of events happening in my area

  **Scenario:** View number of events in a specific category
  
    Given I am on the home page
    
    When I enter my location
    
    And I select a category
    
    And I click on the "Search Events" button
    
    Then I should see the number of events happening in my area for the selected category

 ### Use the App When Offline
  As a user,
  
  I should be able to use the app even without an internet connection,
  
  so that I can check the event details when I'm on the street and not connected to data/wifi.

  **Scenario:** View previously loaded event details offline
  
    Given I have loaded event details online
    
    And I am now offline
    
    When I open the app
    
    Then I should be able to see the previously loaded event details

  **Scenario:** Try to load new events when offline
  
    Given I am offline
    
    When I try to search for new events
    
    Then I should see an error message indicating that I need an internet connection to load new events

### Add an App Shortcut to the Home Screen
  As a user,
  
  I should be able to add an app shortcut to the homescreen of my device,
  
  so that I can have access to the app.

**Scenario:** Add app shortcut from within the app

    Given I am in the app settings
    
    When I click on "Add Shortcut to Home Screen"
    
    Then I should see a confirmation that the shortcut has been added
    
    And the app icon should appear on my home screen

  **Scenario:** Add app shortcut from device settings
  
    Given I am in my device's app settings
    
    When I select the option to add the app to my home screen
    
    Then the app icon should appear on my home screen

### Display Charts Visualizing Event Details
  As a user,
  
  I should be able to visualize event details in a chart,
  
  so that I have a clear overview of the details.

  **Scenario:** View a pie chart of event categories
  
    Given I am on the event details page
    
    When I select the option to view the event categories chart
    
    Then I should see a pie chart displaying the distribution of event categories

**Scenario:** View a bar chart of events by date
