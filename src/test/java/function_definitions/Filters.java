package function_definitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import step_definitions.Hooks;

public class Filters {
    @FindBy(how = How.CSS, using = "div.input-group > input.month-from") private WebElement dateFrom;
    @FindBy(how = How.CSS, using = "div.input-group > input.month-to") private WebElement dateTo;
    @FindBy(how = How.CSS, using = "div:nth-child(5) > select") private WebElement cityFilter;
    @FindBy(how = How.CSS, using = "div:nth-child(6) > select") private WebElement categoryFilter;
    @FindBy(how = How.CSS, using = "div:nth-child(7) > select") private WebElement locationFilter;
    @FindBy(how = How.CSS, using = "#ui-datepicker-div") private WebElement datePicker;
    @FindBy(how = How.CSS, using = "#ui-datepicker-div > div > a.ui-datepicker-next.ui-corner-all") private WebElement nextMonth;

    private WebDriver driver;
    private static Utilities utilities;

    public Filters() {
        this.driver = Hooks.driver;
        utilities = PageFactory.initElements(Hooks.driver, Utilities.class);
    }
    public void filteredByDate(String from, String to) {
        utilities.waitForElement(dateFrom);
        Assert.assertTrue(dateFrom.getAttribute("value").equals(from));
        Assert.assertTrue(dateTo.getAttribute("value").equals(to));
    }

    public void filterCity(String city) {
        Select cityDropdown = new Select(cityFilter);
        cityDropdown.selectByVisibleText(city);
    }

    public void checkUrlContainsCityFilter(String cityFilter) {
        String currentUrl = driver.getCurrentUrl();
        Assert.assertTrue(currentUrl.contains("?city=" + cityFilter));
    }

    public void filterCategory(String category) {
        Select cityDropdown = new Select(categoryFilter);
        cityDropdown.selectByVisibleText(category);
    }

    public void checkUrlContainsCategoryFilter(String categoryFilter) {
        String currentUrl = driver.getCurrentUrl();
        switch (categoryFilter) {
            case "Teātris": {
                Assert.assertTrue(currentUrl.contains("?category=5"));
                break;
            }
            default:
                throw new Error("Unknown category type: " + categoryFilter + "!");
        }
    }

    public void filterLocation(String location) {
        Select cityDropdown = new Select(locationFilter);
        cityDropdown.selectByVisibleText(location);
    }

    public void checkUrlContainsLocationFilter(String locationFilter) {
        String currentUrl = driver.getCurrentUrl();
        switch (locationFilter) {
            case "ARĒNA RĪGA": {
                Assert.assertTrue(currentUrl.contains("?venue=1349_1795_"));
                break;
            }
            default:
                throw new Error("Unknown location type: " + categoryFilter + "!");
        }
    }

    public void setDate(String date) throws InterruptedException {
        dateFrom.click();
        utilities.waitForElement(datePicker);
        nextMonth.click();
        switch (date) {
            case "first day of next month": {
                for (int i = 1; i <= 5; i++) {
                    for (int k = 1; k <= 7; k++){
                        String cssSelector = "#ui-datepicker-div > table > tbody > tr:nth-child(" + i + ") > td:nth-child(" + k + ")";
                        WebElement currentDate = driver.findElement(By.cssSelector(cssSelector));
                        if (currentDate.getText().equals("1")) {
                            currentDate.click();
                            return;
                        }
                    }
                }
            }
            default:
                throw new Error("Unknown specified date: " + date);
        }
    }
    public void checkUrlContainsDateFilter(String date) {
        String currentUrl = driver.getCurrentUrl();
        switch (date) {
            case "first day of next month": {
                Assert.assertTrue(currentUrl.contains("?dateFrom=01"));
                break;
            }
            default:
                throw new Error("Unknown location type: " + categoryFilter + "!");
        }
    }
}
