---
author: Subutai Ahmad
brief: We promised to explain how the Sparse Football Pool relates to the brain, the CLA (Numenta's Cortical Learning Algorithm) and Intelligence.  The CLA relies on
date: 2013/02/11
image: ../images/image.png
org: VP Research
tags:  Neuroscience, Machine Learning
title: Super Bowl Neuroscience
type: post
---

We are slowly recovering from the disappointing 49er loss to the Ravens in the
Superbowl. For those who watched it, it was a tremendously exciting game. In
fact the events of the last few minutes had a significant effect on our Sparse
Pool result!

We promised to explain how the Sparse Football Pool relates to the brain, the
CLA (Numenta's Cortical Learning Algorithm) and Intelligence.  The CLA relies on
Sparse Distributed Representations, a form of information representation where
you have a bunch of 0s and 1s.  Most of the numbers are 0s and a few of them
are 1s (hence the term "Sparse").  In fact, each entry to the pool was an
SDR&#8212;nine 1s and twenty-one 0s. SDRs are also the fundamental way our
brain represents information. At any point in time, most of the neurons in our
brain are quiet and a small percentage of them are firing. It turns out that
this form of representation can have some really interesting properties.
I constructed the Football Pool specifically so I could highlight some of
these points. In the brain the numbers are, of course, far larger and the
situation is a lot more complex, but we can illustrate the basic concepts
using the Pool.

#### Numerical Properties Of SDRs

Even though there are only a small number of 1s, systems using SDRs can uniquely
represent a massive number of patterns.  Let's ask the following question: given
that you can only select 9 True answers out of 30, how many unique entries are
there?  The answer turns out to be larger than you might guess: there are
14,307,150 possible unique entries! (I know that sounds like a lot&#8212;it's
based on a concept called
["binomial coefficients"](http://en.wikipedia.org/wiki/Binomial_coefficients#Computing_the_value_of_binomial_coefficients)).
In Grok our patterns have 40 bits on out of 2048.  The number of unique patterns
is an unimaginably large 2.37 x 10^84! Give or take 10^80.

What is the chance someone else can have the exact same answer as you? Assuming
everything is random, that's just the flip side of the above question: it is 1
in 14,307,150. Even your identical twin would have a hard time guessing your
answer.

What is the chance of someone getting a perfect score?  There were 12 Trues in
the final answer. Picking any 9 out of those 12 would be fine. There are 220
possible perfect answers, so again, if everything was random, the chance of
getting a perfect score is about 220/14,307,150, or about 1 in 65,032.

OK, even if you don't get a perfect score, what is a good score?  The chance of
getting a score of 8 is 1 in 28,903. The chance of getting a 7 is still very
rare: only 1 in 18,065.    Now, here's a puzzler: we had less than 150 entries
yet two people had a score of 7. How is this possible? Either the constellations
were lined up perfectly, or there is something else going on. Turns out we can
ignore astrology&#8212;there is another answer. The fact that a highly
improbable event occurred tells us that there is something really non-random
happening.

#### Semantic Properties Of SDRs

The world is not random, and neither were the questions. The questions were
grouped into similar semantic categories and the SDR corresponding to each entry
represents these semantics.  Here are four aspects of this:

**SDRs can represent specific information:**  Each person's answer reveals
something about the way they thought about the game.  This could be very
specific. Suppose you answered True to Question 11 (Frank Gore will rush for
more yards than Ray Rice). That tells us you predicted Frank Gore would do well.

**SDRs can represent complex information:**  Suppose you answered True to
questions 2, 3, 5, 14, 17, 21, and 22 (Question Group 1 below). This probably
means you predicted it would be an exciting game.   On the other hand if you
answered True to questions 6, 9, 10, 11, 16, 19, 23, 24, and 26 (Question Group
2 below) it means you predicted the 49ers were going to dominate the Ravens.
So, SDRs can represent something specific but can also implicitly represent
complex high level information. Isn't that a key to intelligence and intelligent
representations?

**SDRs represent subtle variations using a distributed code:**  The questions
are "overlapping" and so the information is distributed. For example, questions
2, 3, and 5 in Group 1 have a lot in common. This means you don't have to answer
True to all the questions in Group 1. Even answering True to, say, any 3 or 4 of
them would be sufficient to tell us you thought the game was going to be
exciting. You can convey more or less subtlety by choosing exactly which ones
you answer as True.  A partial answer tells us something about your thoughts and
no particular answer is critical. This is exactly analogous to the brain: a
sparse set of active neurons can represent lots of subtlety and complexity.

**SDRs can simultaneously represent multiple independent concepts:**  If you
answered True to, say, any 4 of the first set, and any 5 from the second set it
means you believed both propositions: the game was going to be exciting, but in
the end the 49ers were going to beat the Ravens. The ability to simultaneously
represent independent concepts is another property of SDRs.  It is particularly
important when you are making predictions. Grok's algorithms (and neurons) use
this property to make simultaneous predictions about the future in a single
step.

Can we use all this to say something about our winners? If you look at our
winner, Ryan, it looks like he basically guessed that the game would be pretty
exciting and that the 49er stars would have a good statistical game. Our second
place entry (also with a score of 7) guessed that the game would be exciting and
that the Ravens would win. Their guesses weren't perfect, but their basic
hunches ended up being correct and hence they had a high overlap score.  This
could only have happened in a non-random world, with meaningful SDRs.
Conversely, if you answered the questions randomly, you probably didn't do too
well!

We have touched on a few properties of SDRs, some of them subtle. You can
represent semantic properties and concepts.  You can represent both very
specific and very subtle concepts.  You can represent multiple concepts
simultaneously and this can be used in prediction. Grok (and our brain) relies
on all of these properties and more.   Of course, there are many other aspects
of Grok (such as learning SDRs) that we didn't cover here.

To wrap up, I hope you gained some insight into the power of SDRs and how our
brains represent information. Most importantly, I hope you had fun with this as
I did. Next time your spouse complains you are watching too much football, let
them know you are actually involved in the greatest possible scientific quest:
understanding human intelligence. Go Niners!

#### Question Group 1 - Overall Game Excitement

2. There will be a lead change in the first half
3. There will be three lead changes in the game
5. The team leading at the end of the first half will lose the game
14. There will be more than 10 total points in the first half
17. There will be a punt or kickoff return that is greater than 40 yards
21. There will be a score in the final 2 minutes of the first half
22. There will be a score in the final 2 minutes of regulation time


#### Question Group 2 - 49er Domination

6. Colin Kaepernick will have at least one run greater than 20 yards
9. Patric Willis will get more tackles than Ray Lewis (solo + assisted)
10. Aldon Smith will finally get a sack in the playoffs
11. Frank Gore will rush for more yards than Ray Rice
16. San Francisco will score first
19. Colin Kaepernick will have a higher QB Rating than Joe Flacco
23. Frank Gore will score the first touchdown
24. Vernon Davis will score a touchdown.
26. The San Francisco Forty Niners claim their 6th Superbowl Trophy!
