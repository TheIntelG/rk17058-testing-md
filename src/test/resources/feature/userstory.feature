@UserStories
Feature: User stories prepared in the project

#  @testUserStory
  Scenario: The User can select performances using calendar shortcuts instead of date picker
    Given website "https://www.bilesuparadize.lv/lv/" is opened
    When dropdown "calendar" is opened
    And date option "next 14 days" is selected
    Then shows are filtered for next 14 days

#  @testUserStory
  Scenario: The User can select performances using calendar date picker
    Given website "https://www.bilesuparadize.lv/lv/" is opened
    And dropdown "events" is opened
    And event option "all events" is selected
    When events are filtered by "first day of next month"
    Then events filtered by "first day of next month" are shown

#  @testUserStory
  Scenario: The User can filter performances by city
    Given website "https://www.bilesuparadize.lv/lv/" is opened
    And dropdown "events" is opened
    And event option "all events" is selected
    When events are filtered by city "Aizkraukle"
    Then events only in city "Aizkraukle" are shown

#  @testUserStory
  Scenario: The User can filter performances by category
    Given website "https://www.bilesuparadize.lv/lv/" is opened
    And dropdown "events" is opened
    And event option "all events" is selected
    When events are filtered by category "Teātris"
    Then events only by category "Teātris" are shown

#  @testUserStory
  Scenario: The User can filter performances by location
    Given website "https://www.bilesuparadize.lv/lv/" is opened
    And dropdown "events" is opened
    And event option "all events" is selected
    When events are filtered by location "ARĒNA RĪGA"
    Then events only by location "ARĒNA RĪGA" are shown