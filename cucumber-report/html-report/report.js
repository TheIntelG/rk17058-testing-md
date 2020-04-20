$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("userstory.feature");
formatter.feature({
  "line": 2,
  "name": "User stories prepared in the project",
  "description": "",
  "id": "user-stories-prepared-in-the-project",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@UserStories"
    }
  ]
});
formatter.before({
  "duration": 2737486222,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#  @testUserStory"
    }
  ],
  "line": 5,
  "name": "The User can select performances using calendar shortcuts instead of date picker",
  "description": "",
  "id": "user-stories-prepared-in-the-project;the-user-can-select-performances-using-calendar-shortcuts-instead-of-date-picker",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "website \"https://www.bilesuparadize.lv/lv/\" is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "dropdown \"calendar\" is opened",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "date option \"next 14 days\" is selected",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "shows are filtered for next 14 days",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bilesuparadize.lv/lv/",
      "offset": 9
    }
  ],
  "location": "userStory_StepDefs.openWebsite(String)"
});
formatter.result({
  "duration": 1347466203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "calendar",
      "offset": 10
    }
  ],
  "location": "userStory_StepDefs.dropdownIsOpened(String)"
});
formatter.result({
  "duration": 369398725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "next 14 days",
      "offset": 13
    }
  ],
  "location": "userStory_StepDefs.dateOptionIsSelected(String)"
});
formatter.result({
  "duration": 278775343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 28
    }
  ],
  "location": "userStory_StepDefs.showsAreFilteredForNextDays(int)"
});
formatter.result({
  "duration": 611810319,
  "status": "passed"
});
formatter.after({
  "duration": 657361005,
  "status": "passed"
});
formatter.before({
  "duration": 2105473237,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "#  @testUserStory"
    }
  ],
  "line": 12,
  "name": "The User can select performances using calendar date picker",
  "description": "",
  "id": "user-stories-prepared-in-the-project;the-user-can-select-performances-using-calendar-date-picker",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "website \"https://www.bilesuparadize.lv/lv/\" is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "dropdown \"events\" is opened",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "event option \"all events\" is selected",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "events are filtered by \"first day of next month\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "events filtered by \"first day of next month\" are shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bilesuparadize.lv/lv/",
      "offset": 9
    }
  ],
  "location": "userStory_StepDefs.openWebsite(String)"
});
formatter.result({
  "duration": 3041767884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "events",
      "offset": 10
    }
  ],
  "location": "userStory_StepDefs.dropdownIsOpened(String)"
});
formatter.result({
  "duration": 127381643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all events",
      "offset": 14
    }
  ],
  "location": "userStory_StepDefs.eventOptionIsSelected(String)"
});
formatter.result({
  "duration": 241146434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first day of next month",
      "offset": 24
    }
  ],
  "location": "userStory_StepDefs.eventsAreFilteredEndOfMonth(String)"
});
formatter.result({
  "duration": 1517410318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first day of next month",
      "offset": 20
    }
  ],
  "location": "userStory_StepDefs.eventsFilteredByAreShown(String)"
});
formatter.result({
  "duration": 16967421,
  "status": "passed"
});
formatter.after({
  "duration": 673151691,
  "status": "passed"
});
formatter.before({
  "duration": 2098498165,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 19,
      "value": "#  @testUserStory"
    }
  ],
  "line": 20,
  "name": "The User can filter performances by city",
  "description": "",
  "id": "user-stories-prepared-in-the-project;the-user-can-filter-performances-by-city",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "website \"https://www.bilesuparadize.lv/lv/\" is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "dropdown \"events\" is opened",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "event option \"all events\" is selected",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "events are filtered by city \"Aizkraukle\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "events only in city \"Aizkraukle\" are shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bilesuparadize.lv/lv/",
      "offset": 9
    }
  ],
  "location": "userStory_StepDefs.openWebsite(String)"
});
formatter.result({
  "duration": 1356649120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "events",
      "offset": 10
    }
  ],
  "location": "userStory_StepDefs.dropdownIsOpened(String)"
});
formatter.result({
  "duration": 184811594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all events",
      "offset": 14
    }
  ],
  "location": "userStory_StepDefs.eventOptionIsSelected(String)"
});
formatter.result({
  "duration": 284708483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aizkraukle",
      "offset": 29
    }
  ],
  "location": "userStory_StepDefs.eventsAreFilteredBy(String)"
});
formatter.result({
  "duration": 1142031149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aizkraukle",
      "offset": 21
    }
  ],
  "location": "userStory_StepDefs.eventsOnlyInAreShown(String)"
});
formatter.result({
  "duration": 14562937,
  "status": "passed"
});
formatter.after({
  "duration": 777201160,
  "status": "passed"
});
formatter.before({
  "duration": 2106454570,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 27,
      "value": "#  @testUserStory"
    }
  ],
  "line": 28,
  "name": "The User can filter performances by category",
  "description": "",
  "id": "user-stories-prepared-in-the-project;the-user-can-filter-performances-by-category",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "website \"https://www.bilesuparadize.lv/lv/\" is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "dropdown \"events\" is opened",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "event option \"all events\" is selected",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "events are filtered by category \"Teātris\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "events only by category \"Teātris\" are shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bilesuparadize.lv/lv/",
      "offset": 9
    }
  ],
  "location": "userStory_StepDefs.openWebsite(String)"
});
formatter.result({
  "duration": 1321154473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "events",
      "offset": 10
    }
  ],
  "location": "userStory_StepDefs.dropdownIsOpened(String)"
});
formatter.result({
  "duration": 143104309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all events",
      "offset": 14
    }
  ],
  "location": "userStory_StepDefs.eventOptionIsSelected(String)"
});
formatter.result({
  "duration": 355670880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teātris",
      "offset": 33
    }
  ],
  "location": "userStory_StepDefs.eventsAreFilteredByCategory(String)"
});
formatter.result({
  "duration": 1137171169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teātris",
      "offset": 25
    }
  ],
  "location": "userStory_StepDefs.eventsOnlyByCategoryAreShown(String)"
});
formatter.result({
  "duration": 10772406,
  "status": "passed"
});
formatter.after({
  "duration": 640610937,
  "status": "passed"
});
formatter.before({
  "duration": 2157199150,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 35,
      "value": "#  @testUserStory"
    }
  ],
  "line": 36,
  "name": "The User can filter performances by location",
  "description": "",
  "id": "user-stories-prepared-in-the-project;the-user-can-filter-performances-by-location",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "website \"https://www.bilesuparadize.lv/lv/\" is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "dropdown \"events\" is opened",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "event option \"all events\" is selected",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "events are filtered by location \"ARĒNA RĪGA\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "events only by location \"ARĒNA RĪGA\" are shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bilesuparadize.lv/lv/",
      "offset": 9
    }
  ],
  "location": "userStory_StepDefs.openWebsite(String)"
});
formatter.result({
  "duration": 1374731749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "events",
      "offset": 10
    }
  ],
  "location": "userStory_StepDefs.dropdownIsOpened(String)"
});
formatter.result({
  "duration": 176896618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all events",
      "offset": 14
    }
  ],
  "location": "userStory_StepDefs.eventOptionIsSelected(String)"
});
formatter.result({
  "duration": 252195556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ARĒNA RĪGA",
      "offset": 33
    }
  ],
  "location": "userStory_StepDefs.eventsAreFilteredByLocation(String)"
});
formatter.result({
  "duration": 1131617082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ARĒNA RĪGA",
      "offset": 25
    }
  ],
  "location": "userStory_StepDefs.eventsOnlyByLocationAreShown(String)"
});
formatter.result({
  "duration": 34906281,
  "status": "passed"
});
formatter.after({
  "duration": 656373797,
  "status": "passed"
});
});