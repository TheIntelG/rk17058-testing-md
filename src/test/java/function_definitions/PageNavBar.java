package function_definitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import step_definitions.Hooks;

public class PageNavBar {
    @FindBy(how = How.CSS, using = "#navbar-collapse-1 > ul > li:nth-child(3)") private WebElement calendarDropdownButton;
    @FindBy(how = How.CSS, using = "li:nth-child(3) > ul") private WebElement calendarDropdownMenu;
    @FindBy(how = How.CSS, using = " li:nth-child(3) > ul > li > div > ul > li:nth-child(6)") private WebElement next14DaysOption;
    @FindBy(how = How.CSS, using = "#navbar-collapse-1 > ul > li:nth-child(2)") private WebElement placesDropdownButton;
    @FindBy(how = How.CSS, using = "li:nth-child(2) > ul") private WebElement placesDropdownMenu;
    @FindBy(how = How.CSS, using = "#navbar-collapse-1 > ul > li:nth-child(1)") private WebElement eventsDropdownButton;
    @FindBy(how = How.CSS, using = "li:nth-child(1) > ul") private WebElement eventsDropdownMenu;
    @FindBy(how = How.CSS, using = "ul.event-group.topCategories > li:nth-child(11)") private WebElement allEventsOption;

    private WebDriver driver;
    private static Utilities utilities;

    public PageNavBar() {
        this.driver = Hooks.driver;
        utilities = PageFactory.initElements(Hooks.driver, Utilities.class);
    }

    public void openDropdown(String dropdownName) {
        switch (dropdownName) {
            case "calendar": {
                utilities.waitForElementIsClickable(calendarDropdownButton);
                calendarDropdownButton.click();
                utilities.waitForElement(calendarDropdownMenu);
                break;
            }
            case "events": {
                utilities.waitForElementIsClickable(eventsDropdownButton);
                eventsDropdownButton.click();
                utilities.waitForElement(eventsDropdownMenu);
                break;
            }
            default:
                throw new Error("Unknown dropdown type:" + dropdownName + "!");
        }
    }

    public void selectDateOption(String option) {
        switch (option) {
            case "next 14 days": {
                utilities.waitForElementIsClickable(next14DaysOption);
                next14DaysOption.click();
                break;
            }
            default:
                throw new Error("Unknown option type: " + option + "!");
        }
    }

    public void selectEventOption(String option) {
        switch (option) {
            case "all events": {
                utilities.waitForElementIsClickable(allEventsOption);
                allEventsOption.click();
                break;
            }
            default:
                throw new Error("Unknown option type: " + option + "!");
        }
    }
}
