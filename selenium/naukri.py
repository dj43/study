from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
import time

# Your Naukri credentials
EMAIL = "jain43066@gmail.com"
PASSWORD = "&Roll22er00"

# Start WebDriver
# ✅ Set correct ChromeDriver path
chromedriver_path = "/usr/local/bin/chromedriver"  # Update path if needed

# ✅ Set Chrome options
chrome_options = webdriver.ChromeOptions()

# ✅ Start WebDriver
service = Service(chromedriver_path)
driver = webdriver.Chrome(service=service, options=chrome_options)

# Maximize window
driver.maximize_window()

# Track processed checkboxes
processed_checkboxes = 0

def login():
    driver.get("https://www.naukri.com/nlogin/login")
    try:
        WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "usernameField"))).send_keys(EMAIL)
        driver.find_element(By.ID, "passwordField").send_keys(PASSWORD)
        driver.find_element(By.XPATH, "//button[contains(text(), 'Login')]").click()
        print("Logged in successfully!")
    except Exception as e:
        print("Login failed:", e)
        driver.quit()
        exit()
    time.sleep(5)

def navigate_to_jobs():
    driver.get("https://www.naukri.com/mnjuser/recommendedjobs")
    time.sleep(5)

def apply_jobs():
    global processed_checkboxes
    checkboxes = driver.find_elements(By.CSS_SELECTOR, ".tuple-check-box i")
    
    for i in range(processed_checkboxes, len(checkboxes)):
        try:
            checkboxes[i].click()
            print(f"Clicked checkbox {i + 1}.")
            processed_checkboxes += 1

            apply_button = WebDriverWait(driver, 5).until(
                EC.element_to_be_clickable((By.CLASS_NAME, "multi-apply-button"))
            )
            apply_button.click()
            print("Clicked Apply button.")
            time.sleep(3)
            
            while True:
                messages = driver.find_elements(By.CLASS_NAME, "botMsg")
                filled = False
                experience_count = 0
                
                for message in messages:
                    label = message.text.lower()
                    input_box = driver.find_element(By.CSS_SELECTOR, "div.textArea")
                    
                    if "willing" in label:
                        try:
                            radio_yes = driver.find_element(By.CSS_SELECTOR, "input[type='radio'][value='Yes']")
                            driver.execute_script("arguments[0].click();", radio_yes)
                            print("Clicked 'Yes' radio button.")
                            filled = True
                        except:
                            continue
                    
                    if "expected" in label or "expectation" in label:
                        input_text = "28" if "lpa" in label else "2800000"
                    elif "current" in label:
                        input_text = "21" if "lpa" in label else "2100000"
                    elif "experience" in label:
                        experience_count += 1
                        input_text = "66" if experience_count == 2 else "6"
                    elif "notice" in label or "days" in label or "join" in label:
                        input_text = "30"
                    elif "location" in label:
                        input_text = "Gurgaon"
                    else:
                        continue
                    
                    driver.execute_script("arguments[0].focus();", input_box)
                    time.sleep(0.5)
                    driver.execute_script("document.execCommand('insertText', false, arguments[1]);", input_box, input_text)
                    time.sleep(1)
                    filled = True
                    
                if filled:
                    try:
                        time.sleep(1)
                        driver.execute_script("setTimeout(() => { let saveButton = document.querySelector('.sendMsgbtn_container .send .sendMsg'); if (saveButton) { saveButton.click(); console.log('Clicked Save button.'); } else { console.log('Save button not found.'); } }, 1000);")
                        print("Clicked Save button via JavaScript.")
                        time.sleep(2)
                    except:
                        break
                else:
                    break

            submit_button = WebDriverWait(driver, 5).until(
                EC.element_to_be_clickable((By.CLASS_NAME, "popup-submit-button"))
            )
            submit_button.click()
            print("Form submitted.")
            time.sleep(5)
        except:
            continue

def main():
    login()
    while True:
        try:
            navigate_to_jobs()
            apply_jobs()
        except Exception as e:
            print("Error occurred, refreshing and retrying:", e)
            time.sleep(5)
            driver.refresh()
            time.sleep(5)
            continue

main()
driver.quit()
