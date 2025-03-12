from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

# ✅ Set correct ChromeDriver path
chromedriver_path = "/usr/local/bin/chromedriver"  # Update path if needed

# ✅ Set Chrome options
chrome_options = webdriver.ChromeOptions()

# ✅ Start WebDriver
service = Service(chromedriver_path)
driver = webdriver.Chrome(service=service, options=chrome_options)

# ✅ Open Hirist website
driver.get("https://www.hirist.com/")
time.sleep(5)

# ✅ Click on "Jobseeker Login" button
try:
    login_button = driver.find_element(By.ID, "user-login-button-id")
    login_button.click()
    time.sleep(3)

    # ✅ Click on "Sign In" button
    sign_in_button = driver.find_element(By.XPATH, "//span[text()='Sign In']")
    sign_in_button.click()
    time.sleep(3)

    # ✅ Enter login details
    driver.find_element(By.NAME, "email").send_keys("jain43066@gmail.com")
    driver.find_element(By.NAME, "password").send_keys("&Roll22er00")
    driver.find_element(By.NAME, "password").submit()  # Press Enter to login
    time.sleep(5)

except Exception as e:
    print("❌ Login failed:", e)
# driver.get('https://www.hirist.tech/k/reactjs-jobs.html?ref=topnavigation')
# ✅ Navigate to job listings
time.sleep(3)

# ✅ Find job links
job_links = driver.find_elements(By.XPATH, "//div[@class='job-title']/a")  # Selects job title links

for i, link in enumerate(job_links):  # Open first 5 jobs
    job_url = link.get_attribute("href")
    if job_url:
        # ✅ Open job link in a new tab
        driver.execute_script("window.open(arguments[0]);", job_url)
        time.sleep(2)

        # ✅ Switch to the new tab
        driver.switch_to.window(driver.window_handles[-1])
        time.sleep(3)

        # ✅ Click on the Apply button
        try:
            apply_btn = driver.find_element(By.CLASS_NAME, "apply-btn")  # Find apply button by class
            apply_btn.click()
            print(f"✅ Applied successfully to job {i+1}")
            time.sleep(2)

            # ✅ Check if form appears
            try:
                form_text = driver.find_element(By.CLASS_NAME, "assessment-subtext").text
                if "Tell the recruiter more about yourself" in form_text:
                    print(f"📋 Filling form for job {i+1}...")

                    # ✅ Fill radio buttons with "Yes"
                    radio_buttons = driver.find_elements(By.XPATH, "//input[@type='radio']")
                    for radio in radio_buttons:
                        if radio.get_attribute("value").lower() == "yes":
                            driver.execute_script("arguments[0].click();", radio)
                        time.sleep(0.5)

                    # ✅ Fill text input fields using sibling div for question text
                    question_containers = driver.find_elements(By.CLASS_NAME, "my-plugin-quest-wrapper")

                    for question in question_containers:
                        try:
                            question_text = question.find_element(By.CLASS_NAME, "my-plugin-quest-text").text.lower()
                            text_area = question.find_element(By.CLASS_NAME, "my-plugin-textareaShortAnswer")

                            if "notice" in question_text or "days" in question_text:
                                text_area.send_keys("30")  # Notice period
                            elif "expected" in question_text or "ectc" in question_text:
                                text_area.send_keys("2800000")  # Expected CTC
                            elif "current" in question_text:
                                text_area.send_keys("2100000")  # Current CTC
                            elif "start" in question_text:
                                text_area.send_keys("30-03-2025")  # Start date
                            elif "experience" in question_text:
                                text_area.send_keys("6")  # Experience
                            elif "immediately" in question_text or "immediate" in question_text:
                                text_area.send_keys("yes")  # Experience
                            
                            time.sleep(0.5)
                        except:
                            print(f"⚠ Unable to process question: {question.text}")

                    # ✅ Wait for user to click "Submit Response"
                    print(f"⏳ Waiting for you to click 'Submit Response' for job {i+1}...")
                    while True:
                        try:
                            driver.find_element(By.ID, "my-plugin-submitResponseButton")
                        except:
                            print(f"✅ Form submitted for job {i+1}!")
                            break
                        time.sleep(2)  # Check every 2 seconds

            except:
                print(f"✅ No form required for job {i+1}")

        except:
            print(f"❌ Apply button not found for job {i+1}")

        time.sleep(2)
        driver.close()  # ✅ Close tab

        # ✅ Switch back to main tab
        driver.switch_to.window(driver.window_handles[0])

print("🎉 Auto Apply Completed!")
driver.quit()
