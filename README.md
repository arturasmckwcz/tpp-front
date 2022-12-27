# Teamway Technical Challenge

## How to run:

The first of all you need to clone this repo cd to it and `yarn start`. And before starting it please make sure the backend is up'n'running.
For this you may either
1. Run already dockerized image:
```
docker run -p 3009:3000 -d arturasmckwcz/ttp-backend
```
2. Or clone it from repo:`git@github.com:arturasmckwcz/ttp-back.git` and run:
```
yarn compile:clear && PORT=3009 node ./dist/index.js
```


## Original Terms Of Reference

Build a simple personality test application, that takes 3-5 different questions, maps them into a score and produces a personality trait of either Introvert or Extrovert.

You can find examples of questions here: https://www.psychologies.co.uk/self/are-you-an-introvert-or-an-extrovert.html

* An example could be
* Landing screen
* Start personality test
* Dynamic screen, that reads question and answers from a the backend (Just build CRUD, with in memory DB)
* Finish screen, where you can see your personality trait.

It is a plus if you write some unit-tests.

