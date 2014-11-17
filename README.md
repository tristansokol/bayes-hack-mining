bayes-hack-mining
=================

Team Poutine's submission for [Bayes Hack 2014](http://www.bayesimpact.org/hack "Bayes Hack 2014")

We used data from [US Department of Labor / Mine Safety & Health Administration](http://www.msha.gov/OpenGovernmentData/OGIMSHA.asp "US Department of Labor / Mine Safety & Health Administration") to build a model of which mines were most at risk of an accident, and most important to visit on the limited number of random inspections that occur each year. This way we can leverage data science to help make mining safer and mine administration more efficent. 
Learn more about the contest and see other submission here:http://bayeshack.challengepost.com/submissions

---
Using the code
--------
*Demo [MR.E](http://bayes-hack-mining.appspot.com/# "Tristan Sokol & Friends Hackaton submission")*

The app was hosted on Google's App Engine, so cloning the repository and adding it all as an existing application in GoogleAppEngineLauncher should get you up and running. We also used the excellent front-end framework [Foundation](http://foundation.zurb.com/) so much of the /js and /cs folders come from that. 

* ``app.yaml`` Responsible for the App Engine settings
* ``main.php`` Layout for the different tables 
* ``main.js`` Holds the logic for reading the infromation from the data file and generating the different visuals
* ``style.css`` Various CSS hacks to make it look ok-ish


If you have any questions comments or concerns, please use your favorite search engine figure out how to get in touch. 
