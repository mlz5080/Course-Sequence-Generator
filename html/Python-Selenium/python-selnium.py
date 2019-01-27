import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument('window-size=1200,1100')
driver = webdriver.Chrome(chrome_options=chrome_options)
#driver.maximize_window()
driver.get('https://vsb.concordia.ca/criteria.jsp');
#time.sleep(1) # Let the user actually see something!
"""
driver.find_element_by_class_name("big_button").click()
time.sleep(5)
driver.find_element_by_css_selector("input[type='submit']").click()
time.sleep(5)
"""
driver.find_element_by_id('term_1201910').click()
"""
search_box.send_keys('ChromeDriver')
search_box.submit()
time.sleep(5) # Let the user actually see something!
"""
#driver.quit()
search_box = driver.find_element_by_id("code_number")
search_box.send_keys("MATH 203")
#time.sleep(0.5)
driver.find_element_by_id("addCourseButton").click()
search_box.send_keys("MATH 202")
#time.sleep(0.5)
driver.find_element_by_id("addCourseButton").click()
search_box.send_keys("MATH 201")
#time.sleep(1)
driver.find_element_by_id("addCourseButton").click()
#time.sleep(1)
driver.find_element_by_css_selector("a[onclick^='ShareLinkController.createLink();']").click()
time.sleep(1)
inputbox = driver.find_element_by_css_selector("input[onclick^='$(this).select();']")
url = inputbox.get_attribute("value")
print(url)
driver.quit()
