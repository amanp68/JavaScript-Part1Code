# JavaScript-Part1Code
Shuffling of Deck of Cards Problem
Problem: This challenge solves a coding problem that involves shuffling a deck of cards. The problem description is as follows:

You are given a deck containing n cards. While holding the deck:

Take the top card off the deck and set it on the table.
Take the next card off the top and put it on the bottom of the deck in your hand.
Continue steps 1 and 2 until all cards are on the table. This is a round.
Pick up the deck from the table and repeat steps 1-3 until the deck is in the original order.
Write a program to determine how many rounds it will take to put a deck back into the original order. This will involve creating a data structure to represent the order of the cards. This program should be written in JavaScript/Node.js, and should be executable from the command line. It should take a number of cards in the deck as a command line argument and write the result to print method, e.g. console.log();.

Other than data structures you create yourself, do not use any Array methods.

Task Simplification:
For a better understanding of the problem, let us assume that there are 3 cards in the deck labelled 123. Applying the procedure in the problem, the cards will follow the following sequence:

	123 original
	231 after round 1
	312 after round 2
	123 after round 3
So, we can conclude that the cards return to its original state in 3 rounds.
Similarly, for different size of deck, we will need different number of rounds to obtain the original deck. Example:
Size of Deck : # of Rounds

75 : 66
76 : 50
77 : 621
78 : 78
79 : 24
80 : 210
81 : 9690
82 : 55440
83 : 3465
84 : 1122
85 : 5040
86 : 370
87 : 87
88 : 720
89 : 630
90 : 90
91 : 783
92 : 92
93 : 78
94 : 50
95 : 95
96 : 96
97 : 6435
98 : 132
99 : 780

Solution: The main function "findNumberOfRounds" finds the number of rounds needed to complete the task, where it inputs the total number of cards from the user. The condition is that the input number should be greater than equal to 1.
The function findNumberOfRounds calls "executeRound" function. It is called inside a loop to find out the number of rounds required to get the original deck back. This function takes the top card off the deck and set it on the table and takes the next card off the top and put it on the bottom of the deck in the hand.
After each round the variable "numberOfRounds" is incremented by 1. 
The function exeuteRound further calls the "compareDecks" function to compare the hand deck to the original deck. If the deck in hand is same as the original deck then the loop is broken else, the loop continues until the orginal deck is achieved.

Further object constructors are used to aid the logical function and present a clean code. "Prototype" property is added to allow to add new properties to object constructors. These constructors perform the steps 1-3 as mentioned in the problem.

Easy way using python: I have solved the same problem using python in a much simpler way.

