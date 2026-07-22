# Module 10A – StudentCard Code Review

## Description
This is a React code review assignment. I reviewed the StudentCard component and added comments to 
explain the logic behind props, state, and interactivity.

## What I Learned
- How to use and identify props and state
- How toggle functionality works with useState
- How to better document and explain React components

## Minor Challenges
For some reason, when attempting to work with React's useState, nothing was rendering (this is how the pre-written code came). After a lot of trial and error and brute-force debugging,
I was only able to fix this by importing useState into the StudentCard.jsx component and removing React from this code: "const [showBio, setShowBio] = React.useState(false);"
I'm not sure why this is. It could be an issue where the set function is only updating the state variable for the next render, so I was getting the old value. I'm not totally sure how to rectify this, however.

## Screenshot
(Add a screenshot of the running component with your comments visible in the code editor)
Screenshot added in project folder.
