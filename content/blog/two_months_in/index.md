---
title: The Software Engineer Life - 2 Months of Experience
date: "2021-10-13"
---

It's 9pm on a Tuesday evening. 

I just finished work. 

It has been 68 days since I began my new job. 

My probation period ends on day 90. I wonder if that's 90 business days, or 90 calendar days, or 3 months? Maybe I should have asked for details. 

In two months of being a software engineer, these are the 3 takeaways I wish I internalized before I started:

## 1 - I'm not Good Enough

I will never be good enough, fast enough, or efficient enough.

I cannot see the light at the end of the tunnel, and I'm convinced there isn't one. 

But that's okay! 

It's just that nothing could have prepared me for the nature of this job. My weeks look like this:

- To solve problem A
  - I need to learn about B
    - which requires learning about C
      - which requires knowledge of D
        - which needs E, F, and G dependencies
        - but dependency G is not compatible with my H
        - so I need an older version of H
          - but to install H I need knowledge of I
        - learn I
        - install older H
        - install dependencies
      - learn D
    - learn C
  - learn B
- Get assigned another task that's higher priority
- Repeat

The chain of dependencies goes on for so long that you lose sight of the original goal when you're new. That's something I wasn't prepared for. This is something school and courses do not teach--because you're learning in a simplified, closed environment. The closest thing might be The Odin Project, where you're in a situation to which you may have to google X, which leads to needing knowledge of Y, which requires installing library Z. But even in the average TOP assignment, there's a lot of pre-readings so that you don't need to go down the rabbit hole of chasing puzzle pieces.

## 2 - Data Structures and Algorithms: What are Those?

In my company, there is no need to reinvent the wheel. 

- Need to sort a fairly complex set of data? 
  - Call sort().
- Need to implement a trie to create my custom version of a dictionary-lookup module? 
  - A library already exists that does a better job than I can.
- How about FizzBuzz?
  - What's that?

The takeaway is that I should not have spent any more time than needed on leetcode, hackerrank, edabit, codewars, etc. **I should have spent that time learning new technologies and getting more intimate with the ones I knew**. 

I should have spent a lot more time learning skills that transfer to all fields. They are as follows:

- databases
- a stack--any stack
- constructing and manipulating a REST API

I should have installed a GUI-less Linux instance on my laptop, set up the proper network configuration and leave it in the corner of my room to freely SSH into and tinker with. I should have installed postgreSQL on it and learned enough to be able to say that I can work with databases. I should have went all the way to the end of The Odin Project and be able to wield the MERN stack confidently. 

Now I don't have such timely pleasures.

## 3 - Walking Before Running

In July, I was asked during an interview:

- How did you approach security for your app?

To which I answered:

- I don't know enough about security to confidently handle sensitive information, so I decided to use OAuth2 through Google Firebase to authorize users. Letting Google handle the security aspect means that I don't need to touch sensitive data and I can focus only on my product.

They seemed really happy with my honesty and sincerity. In hindsight, using Google to authenticate and authorize users for an etch and sketch app was probably way overkill, but I wanted an excuse to learn a little about the google cloud platform. 

This experience put me in a weird spot--I felt like I learned to run before I could walk. As in--I still don't know much at all about HTTP requests, but I was able to authenticate users, authorize them, and complete a project from start to finish. Not knowing HTTP requests (when that should have been the first thing I touched for this project) came to bite me when it came to my most recent project at work. 

As a junior, there's no way I'll understand what the right tools are for accommodating client requests. This means that not only was it inefficient to learn the cutting edge technologies and softwares in the last 2 years, but it was downright detrimental compared to simply focusing hard on the fundamentals the whole time. 

- Cutting edge tech usually relies on abstracting away some of the intracacies of a language. 

  (Think React, Vue, ExpressJS, NuxtJS, GatsbyJS, Django, Flask, etc)

- That is wonderful, but only after you've gained enough intimacy with a language to be able to do the same thing (on a smaller scale) without the above frameworks. 

- Learning cutting edge tech too soon means that you grow as a developer while simultaneously missing out on some of the fundamentals required to grow fast. This is a scary path to tread. 

Had I only stuck with the fundamentals, I would be a lot faster at diving deep into the codebase of frameworks that I'm currently using at work. Also, a much stronger base would have allowed me to understand on a deeper level why a certain database was chosen over alternatives, or why a framework was used for a REST API as opposed to another framework. 

By the way, I still can't create nice looking responsive sites. 

Maybe that will change in the next year. 