# PROJECT TITLE
- "Your Destination. Your Information."
- deployment website = "www.mydestinationnow.com"

## TEAM MEMBERS for Team "SUPER DUPER"
Dheepa, Shaun, Singhe, Andrew

## PROJECT DESCRIPTION
When people are travelling, or looking to find out something about a particular destination,
they often look to Google, Wikipedia, TripAdvisor and many other disparate places to search the info.  

The problem(s) that we are attempting to solve is really one of a "human" nature.  We live in an age of "information overload".  In other words, we are trying to help people identify with their chosen destination of interest in as few clicks as possible. 

The CONCEPT is to rapidly consolidate essential information about the destingation for the user.  Return only the information that they want to see.
The MOTIVATION for the project is to educate people, save people time, and automate their searching.

## TARGET AUDIENCE / USE CASES

1. Travellers looking for quick info, top things to do, places to eat
1. Business folks looking to connect with their customers quickly
1. Individuals looking to just learn more about a particular city/region (e.g. caves in Thailand, the typhoon in Japan)

## TECHNOLOGIES USED 

1.  GeoNames API (geographical names and country data)
1.  Wikipedia API (summary information)
1.  Bootstrap
1.  TripAdvisor API (popular destinations, restaurants, etc.)
1.  Bootstrap
1.  jQuery libraries to access the complex GeoNames and Wikipedia APIs
=== CONCEPT TOOLS NOT YET IMPLEMENTED ===
1.  Google API (to email the info back to the user - if desired)
1.  CNN/NYTimes APIs
1.  library to convert HTML into PDF "one-pagers" that can be sent by email back to user

## SKETCH OF FINAL PRODUCT
- to follow

## ROUGH BREAKDOWN OF TASKS
* mobile-responsive frontend (Dheepa and Singhe)
* backend (Shaun and Andrew)

## PSEUDOCODE for Minimum Viable Product (MVP)

+ User enters city (input validation field), and country (drop-down list of all countries)
+ User then presses a SUBMIT button to begin search
+ Program returns possible locations from a call to GeoNames db via AJAX
+ User selects city and preferences for info required (e.g. if they want to see Wikipedia summary information, they can check that as an option, if they have seen it already, then they can leave the option unchecked).
=== CONCEPT ITEMS NOT YET IMPLEMENTED ===
+ The information is then presented on a new HTML page (for desktop); and maybe by categories on mobile
+ The page would return information fields from GeoNames (e.g. weather) and Wikipedia (e.g. summary)
+ Firebase db and "lists" could include country flags, TripAdvisor info
+ User then presses button to email information in PDF format to themselves

## KEY INFORMATION TO BE SERVED UP...
1.  At MINIMUM - Wikipedia summary page

## FUTURE IMPROVEMENTS
1.  Ability to select multiple locations at the same time
1.  Time
1.  Weather
1.  Hotels/accommodations
1.  Restaurants/Food
1.  Top attractions/places to visit
1.  Local news