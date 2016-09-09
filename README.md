# Code 2040 Fellow's Application (in an application)


-- created using **Node.js** and **Electron**


The code that completes the actual steps of the actual application is entirely front-end based JavaScript -- located in `/app/assets/javascripts/script.js`

The beauty of **Electron** is it's ability to quickly create a small desktop application within the framework of a traditional web application. With this, I was able to create an interactive application.

#### Just HTML, CSS, & JavaScript. :)

###### BEGIN
---
![alt text](https://photos-2.dropbox.com/t/2/AAAVDxJeqlECi9XzWuLfbeE2Y05LQ3IaEYTtiPN_hxIaYA/12/408215651/png/32x32/1/_/1/2/begin.png/EJDSjaIDGKPFAyAHKAc/pdAiLCpLV1fOltEhUrt3VfnngkTX4K1c6Etkapq-SKc%2COY3hiuf6Q6WZRbbnWxe3ssFZti2VQIfG4e6qQpJFrw0%2CemL-Sp36ZcwxnJmH___yupFssFisJj9JhMSXR6fNl9E?size=2048x1536&size_mode=3 "Begin")

**AJAX** is our friend! Let's Begin!

###### Step 1 -- Token Registration
---
![alt text](https://photos-4.dropbox.com/t/2/AAAcm6iuzaz6yePvcO2do729HGkrXl1nUM0_Sq6afGmncg/12/408215651/png/32x32/1/_/1/2/step1-token.png/EJDSjaIDGN7FAyAHKAc/PhDosbH3lJ0DErKxQLh0_j4liQjBe6DcmuNsRWfd0BM%2ChXVqFOdMSPROjlagKBejNLW5ZW_ctToA2Ymkc5PxvAA%2CZdjQ-4AMZXmwqgDtJD-YGSX0L8GveMBTKQCZzoFJzmE?size=2048x1536&size_mode=3 "Token Register")

Just a regular old _POST_ request did the trick here -- nothing too fancy.

###### Step 2 -- Word Reversal
---
![alt text](https://photos-5.dropbox.com/t/2/AACk2SL35VqPZfMImdmjCUZyO6pdjemgg3RkcIMKNiOZ9w/12/408215651/png/32x32/1/_/1/2/step2.png/EJDSjaIDGKPFAyAHKAc/ILOtXLn6v0cI7vVrJmdkDT2fKIAcS2gZuaW5ZmNfYRY%2CcOTWtttxXuWbYVYtJpostG70NUO5JMPK2BKhhszAJN4%2CEOg7DnCgshkQ7QivAcMKoSpsQ6G2WucIhGaOqTS15fM?size=2048x1536&size_mode=3 "Word Reversal")

For this one, a backwards iteration across the string with a new string concatonation gave us what we wanted.

###### Step 3 -- Needle in a Haystack
---
![alt text](https://photos-6.dropbox.com/t/2/AAB6x9Vm5haFUBIARlVVsdMfpaZ7lff0WiDOyEXk4YSMIg/12/408215651/png/32x32/1/_/1/2/step3.png/EJDSjaIDGKPFAyAHKAc/awdZNNqFNWWa7xh7K0aNyzSlR6k2Fpu0KMgOUryQnzM%2CnK72Mu-bxqU5MaCnt4ZGnpVSG4tHndRsSY8fj7QiyQQ%2CDIap1s4vyt84ZvCIaHFAGdBMM7uzwirVXgt4lVFMxNs?size=2048x1536&size_mode=3 "Needle in a Haystack")

Nothing extravagant here either. Looping through the array, until we found a match handled it for us. Interestingly enough, however, I found that when I tried to bind the AJAX Post request (in order to submit the information) to the click event on the button, it would time out with a 422 code error -- but **_only sometimes_**. Super Weird. Luckily when I extracted it, everything was consistently peaches. Ended up following the same philosophy with the rest of the steps as well.

###### Step 4 -- Words Without the Prefix
---
![alt text](https://photos-4.dropbox.com/t/2/AABT80cMgZizYR5ZKKymoX8bWlHLb71w83MAteE8wu-ZSg/12/408215651/png/32x32/1/_/1/2/step4.png/EJDSjaIDGKPFAyAHKAc/CBoJcjPolzugbkRw-f_USyyf3DO3ApLiLoxUKEqElcw%2CLkHUwVoP5-QslOj3mArWzv-hvvDfiOzLi3QzjXKdgG4%2CPfrm8c0zXq3RM9ekChjEUMGhKj08o4X9EpgpFsfBJMk?size=2048x1536&size_mode=3 "No Prefix")

This was effectively the opposite of Step #3, with a substring search at the beginning to spice it up. Fortunately, to make things simpler, JavaScript strings (much like those in many other languages) have a `startsWith()` method.

###### Step 5 -- Let's Go on a Date
---
![alt text](https://photos-2.dropbox.com/t/2/AAAqdPntYoLowYpFGrmAwfAeuIQ3s7ICSHOSXCo8HjIzKg/12/408215651/png/32x32/1/_/1/2/step5.png/EJDSjaIDGKPFAyAHKAc/szmh2AMWAdnWD5pFxsPcDrJEBHIMR7m37A7CO3MU3qU%2CTfvnTQKvdhP6Rquumsk31iSIARZS5dMGi5OCFj204P4%2Cf-X3sDJkjC9ewZQA4pDnP2jxMCEjGI5nkYFj2hJ9cmA?size=2048x1536&size_mode=3 "Date Addition")

Last Step! It's all about the `Date` object maninpulation with this one. Had to make some minor string tweaks at the end, but all in all came out successsfully!

###### END
---
![alt text](https://photos-2.dropbox.com/t/2/AACIzWYOUN9Z7HRjSoR-iG3SvliZDQ4c2z0FTxfHP81hug/12/408215651/png/32x32/1/_/1/2/finished.png/EJDSjaIDGKPFAyAHKAc/xsyaLbL1pzjE5KmStp9mng_FJeiWABmYOX8iHWu3ooY%2Cm59Ybw5YhfVT-evZSiBWK-5-VK-o3Y5O0lEwAgUlwLE%2Co0TwZUTQ57UUYVBRixNEZCMOqXnBRyYWXefB3YGWaN0?size=2048x1536&size_mode=3 "Done")

Finito! Thanks for following along. 
___

### If the screenshots aren't convincing enough ...
_Feel free to run it yourself. Make sure you have **Node.js** installed!_ 

1. You must clone the repo.
    
    ``` git clone ```
2. You must nurture the repo .
    
    ``` npm install ```
3. You must love the repo.

    ``` npm start ```
4. You should be good to go!
