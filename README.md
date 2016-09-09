# Code 2040 Fellow's Application (in an application)


-- created using **Node.js** and **Electron**


The code that completes the actual steps of the actual application is entirely front-end based **JavaScript** -- located in `/app/assets/javascripts/script.js`

The beauty of **Electron** is it's ability to quickly create a small desktop application within the framework of a traditional web application. With this, I was able to create an interactive application.

### Just HTML, CSS, & JavaScript. :)
&nbsp;

 "_But why would you build out a full fledged application for a simple 5 step process,_" you ask?

#### _Well, A wise woman once said,_

> Life is short,   
Make each hair flip fabulous

##### This is one of my hair flips.

&nbsp;

###### LET'S BEGIN
---
![Begin](http://i.imgur.com/nUkmYb0.jpg)

**AJAX** is our friend! Time to try this bad boy out!

###### Step 1 -- Token Registration
---
![Token Registration](http://i.imgur.com/WoNSTFC.jpg)

Just a regular old _POST_ request did the trick here -- nothing too fancy.

###### Step 2 -- Word Reversal
---
![Word Reversal](http://i.imgur.com/ZS6u3uH.jpg)

For this one, a backwards iteration across the string with a new string concatenation gave us what we wanted.

###### Step 3 -- Needle in a Haystack
---
![Needle in a Haystack](http://i.imgur.com/cKkQncS.jpg)

Nothing extravagant here either. Looping through the array, until we found a match handled it for us. Interestingly enough, however, I found that when I tried to bind the **AJAX** Post request (in order to submit the information) to the click event on the button, it would time out with a **422** code error -- but **_only sometimes_**. Super Weird. Luckily when I extracted it, everything was consistently peaches. Ended up following the same philosophy with the rest of the steps as well.

###### Step 4 -- Words Without the Prefix
---
![No Prefix](http://i.imgur.com/aLcIN1A.jpg)

This was effectively the opposite of Step #3, with a substring search at the beginning to spice it up. Fortunately, to make things simpler, **JavaScript** strings (much like those in many other languages) have a `startsWith()` method.

###### Step 5 -- Let's Go on a Date
---
![Date Addition](http://i.imgur.com/rLGRfWX.jpg)

Last Step! It's all about the `Date` object maninpulation with this one. Had to make some minor string tweaks at the end, but all in all came out successsfully!

###### END
---
![Done](http://i.imgur.com/RwYbOau.jpg)

Finito! Thanks for following along. 
___

&nbsp;

### If the screenshots aren't convincing enough ...
_Feel free to run it yourself. But make sure you have **Node.js** installed!_ 

1. You must clone the repo.
    
    ``` git clone ```
2. You must nurture the repo.
    
    ``` npm install ```
3. You must love the repo.

    ``` npm start ```
4. You should be good to go!

&nbsp;

-- signing off!	☺