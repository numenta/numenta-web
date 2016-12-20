---
author: Numenta
brief: This year’s Super Bowl between the New England Patriots and the Seattle Seahawks was a cliffhanger. In fact, the twists and turns in the last few minutes had a significant effect on our result
date: 2015/02/04
image: ../images/image.png
org: Subutai Ahmad & Ryan McCall
tags: super bowl xlix neuroscience 2015 machine learning numenta sparse football pool results
title: "Super Bowl Neuroscience: Sparse Football Pool 2015 Results"
type: post
---

### SUPER BOWL NEUROSCIENCE: SPARSE FOOTBALL POOL 2015 RESULTS

This year’s Super Bowl between the New England Patriots and the Seattle Seahawks
was a cliffhanger. In fact, the twists and turns in the last few minutes had a
significant effect on our result, with some of the answers determined in the
last five minutes of the game. (To read the original blog post,
[click here](/blog/2015/01/22/introducing-sparse-football-pool-ii-super-bowl-xlix/)).
Congratulations to our winner Glen Speckert who, out of 95 contest
entries, tied for the top score with 8 correct answers. The other top scorer was
our own CEO, Donna Dubinsky, who also had a score of 8 (but is ineligible to win
a prize – sorry Donna!).

So, how does the Sparse Football Pool relate to the brain, the HTM Learning
Algorithms and intelligence? The remainder of this blog post will explain.

HTM relies on Sparse Distributed Representations (SDRs), a form of information
representation where you have a long numerical string with mainly 0’s and a few
1’s (the degree of sparsity is determined by how few 1’s). In fact, each entry
to the pool was an SDR — eleven 1’s and nineteen 0’s. SDRs are the fundamental
way our brain represents information. At any point in time, most of the neurons
in our brain are quiet and a small percentage of them are firing. We constructed
the Sparse Football Pool to highlight some of the special properties of SDRs. Of
course, in the brain the numbers are far larger and the situation is more
complex, but we can illustrate the basic concepts using the Pool.


#### NUMERICAL PROPERTIES OF SDRS

Even though there are only a small number of 1’s, systems using SDRs can
uniquely represent a massive number of patterns. Let's ask the following
question: given that you could only select 11 True answers out of 30, how many
unique entries are there? The answer is larger than you might guess: there are
54,627,300 possible unique entries (we know that sounds like a lot—it's based on
a concept called
[binomial coefficients](http://en.wikipedia.org/wiki/Binomial_coefficients#Computing_the_value_of_binomial_coefficients)).
In Numenta’s HTM systems, our patterns typically have 40 bits “on” out of 2,048.
The number of unique patterns is an unimaginably large 2.37 x 10^84!

What is the chance someone else would have exactly the same answer as you?
Assuming everything is random, that's just the flip side of the above question:
one in 54,627,300.

What is the chance of someone getting a perfect score? Nine statements out of
the 30 actually came True. Each contestant could select up to 11 statements to
be True, so there was some room for error. Specifically, there are 9,405 answers
that could get the maximum score of 9, so again, if everything was random, the
chance of getting a perfect score is about 9,405/54,627,300, or about 1 in
5,808. (For more details on the math behind SDRs, see
[this talk](/papers-videos-and-more/resources/sparse-distributed-representations/).)

What is a good score? The chance of getting a score of 8 is 1 in 322, and the
chance of getting a 7 is 1 in 37. Now, here's a puzzler: we had less than 100
entries yet two people had a score of 8. How is this possible? The fact that a
highly improbable event occurred tells us that something non-random happened,
and it relates to the semantic properties, or the meanings, of SDRs.


#### SEMANTIC PROPERTIES OF SDRS

The world is not random, and neither were the statements. Certain statements
could be grouped into similar semantic categories. If a contestant’s entry was
totally random, then it wouldn’t matter. But, if a contestant had a “point of
view”, this thinking would be evident in their entry/SDR.

To be sure, the SDRs can represent very specific predictions. If you answered
True to Statement 8 (Lynch will run for more than 120 yards), then you predicted
Marshawn Lynch would do well in a very specific way.

But SDRs also can represent more complex concepts. Suppose you answered True to
statements 3, 12, 13, 14, 20, 21, 23, 25, and 26 (Statement Group 1 below).
These statements are related in meaning; they all predict a wild and exciting
game. If your point of view was that the Super Bowl would be wild and exciting
rather than low scoring and boring, your SDR would reflect this meaning. In
another example, if you answered True to statements 1, 5, 7, 9, 10, 19, 28, and
30 (Statement Group 2 below), you predicted New England was going to dominate
Seattle. This SDR reflects another point of view on the game. So, SDRs can
represent something specific but also can simultaneously convey complex high-
level information.

Put another way, the “distributed” part of SDRs enable the encoding of subtle
information. Looking again at Group 1 below, you didn’t need to answer True to
all the statements for us to know that you thought the game would be exciting –
even 3 or 4 Trues from this list would convey your point of view. You conveyed
more subtlety by choosing exactly which ones you answered as True. Even a
partial answer tells us something about your thoughts; no particular answer is
critical. This structure is analogous to the brain: a sparse subsampling of
active neurons can represent lots of subtlety and complexity.

Finally, SDRs can simultaneously represent multiple independent concepts. If you
answered True to, say, five from the first set, and five from the second set,
you believed both propositions -- the game was going to be exciting, but in the
end the Patriots were going to beat the Seahawks. The ability to simultaneously
represent independent concepts is another property of SDRs. It is particularly
important when you are making predictions. The HTM algorithms and the cortex use
this property to make simultaneous predictions about the future in a single
fixed representation.

How does this explanation answer the question as to why there were two winners,
an extremely unlikely result? Both winners, Donna and Glen, guessed that New
England would win in a high scoring, exciting game. They had a similar point of
view, and they answered True or False to those statements that matched that
point of view. Their guesses weren't perfect, but they weren’t random. Indeed,
if you responded to the statements randomly, you probably didn't do too well!

We have touched on a few properties of SDRs, some of them subtle. You can
represent semantic properties and concepts. You can represent both very specific
and very subtle concepts. You can represent multiple concepts simultaneously,
which can be used in prediction. The Sparse Football Pool, Numenta’s HTM
technology, and our brain rely on these same concepts.

We hope the Pool helped you understand the power of SDRs and how our brains
represent information. Most importantly, we hope you had fun with this unusual
pool! Next time your spouse complains you are watching too much football, let
them know you are actually involved in the greatest possible scientific quest:
understanding human intelligence.


### STATEMENT GROUPS:

#### GROUP 1 - OVERALL GAME EXCITEMENT

*  3: There will be a lead change in the first half
* 12: Russell Wilson will throw at least two interceptions
* 13: There will be points scored in the final 2 minutes of the first half
* 14: The team leading at the end of the first half will lose the game
* 20: There will be at least one lost fumble resulting in a change of possession in the game
* 21: Someone other than Russell Wilson or Tom Brady will throw a touchdown pass
* 23: The game will have a “Pick Six” play where an interception is returned for a touchdown
* 25: There will be points scored in the final 2 minutes of regulation
* 26: The combined score at the end of the game will be greater than 50

#### GROUP 2 – NEW ENGLAND DOMINATION

*  1: The New England Patriots will score first
*  5: Tom Brady will throw for more than 300 yards
*  7: LeGarrette Blount will rush for more than 100 yards
*  9: Jamie Collins will make the most tackles (solo plus assisted) in the game
* 10: Rob Gronkowski will score a touchdown
* 19: The Seattle Seahawks will be penalized the most (in terms of yards)
* 28: The winning team will win by 10 or more points
* 30: The New England Patriots will claim their 4th Superbowl Trophy!
