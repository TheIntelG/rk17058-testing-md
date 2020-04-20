package step_definitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import function_definitions.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class userStory_StepDefs {
    private WebDriver driver;
    private static PageNavBar pageNavBar;
    private static Utilities utilities;
    private static Filters filters;

    public userStory_StepDefs() {
        this.driver = Hooks.driver;
        pageNavBar = PageFactory.initElements(Hooks.driver, PageNavBar.class);
        utilities = PageFactory.initElements(Hooks.driver, Utilities.class);
        filters = PageFactory.initElements(Hooks.driver, Filters.class);
    }

    @Given("^website \"([^\"]*)\" is opened$")
    public void openWebsite(String link) throws Throwable {
        driver.get(link);
        utilities.waitForPageLoad();
    }

    @When("^dropdown \"([^\"]*)\" is opened$")
    public void dropdownIsOpened(String dropdown) throws Throwable {
        pageNavBar.openDropdown(dropdown);
    }

    @When("^date option \"([^\"]*)\" is selected$")
    public void dateOptionIsSelected(String option) throws Throwable {
        pageNavBar.selectDateOption(option);
    }

    @Then("^shows are filtered for next (\\d+) days$")
    public void showsAreFilteredForNextDays(int days) {
        utilities.waitForPageLoad();

        String dateFrom = utilities.getCurrentDate();
        String dateTo = utilities.getFutureDate(days);

        filters.filteredByDate(dateFrom, dateTo);
    }

    @And("^event option \"([^\"]*)\" is selected$")
    public void eventOptionIsSelected(String option) throws Throwable {
        pageNavBar.selectEventOption(option);
    }

    @When("^events are filtered by city \"([^\"]*)\"$")
    public void eventsAreFilteredBy(String option) throws Throwable {
        utilities.waitForPageLoad();
        filters.filterCity(option);
    }

    @Then("^events only in city \"([^\"]*)\" are shown$")
    public void eventsOnlyInAreShown(String city) throws Throwable {
        utilities.waitForPageLoad();
        filters.checkUrlContainsCityFilter(city);
    }

    @When("^events are filtered by category \"([^\"]*)\"$")
    public void eventsAreFilteredByCategory(String category) throws Throwable {
        utilities.waitForPageLoad();
        filters.filterCategory(category);
    }

    @Then("^events only by category \"([^\"]*)\" are shown$")
    public void eventsOnlyByCategoryAreShown(String category) throws Throwable {
        utilities.waitForPageLoad();
        filters.checkUrlContainsCategoryFilter(category);
    }

    @When("^events are filtered by location \"([^\"]*)\"$")
    public void eventsAreFilteredByLocation(String location) throws Throwable {
        utilities.waitForPageLoad();
        filters.filterLocation(location);
    }

    @Then("^events only by location \"([^\"]*)\" are shown$")
    public void eventsOnlyByLocationAreShown(String location) throws Throwable {
        utilities.waitForPageLoad();
        filters.checkUrlContainsLocationFilter(location);
    }

    @When("^events are filtered by \"([^\"]*)\"$")
    public void eventsAreFilteredEndOfMonth(String date) throws Throwable {
        utilities.waitForPageLoad();
        filters.setDate(date);
    }

    @Then("^events filtered by \"([^\"]*)\" are shown$")
    public void eventsFilteredByAreShown(String date) throws Throwable {
        utilities.waitForPageLoad();
        filters.checkUrlContainsDateFilter(date);
    }
}
