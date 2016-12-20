---
author: "Matthew Taylor"
brief: "Last weekend's hackathon was a lot of fun. Thanks to everyone for coming out. We gave several educational presentations and held some working sessions. The participation from the attendees was outstanding"
date: 2013/11/06
hideImage: false
image: ../images/image.png
org: "Open Source Manager"
tags: 2013 numenta nupic fall hackathon results demos videos
title: "2013 Fall Hackathon Outcome"
type: post
---

Last weekend's hackathon was a lot of fun. Thanks to everyone for coming out. We
gave several educational presentations and held some working sessions. The
participation from the attendees was outstanding.

[![NuPIC 2013 Fall Hackathon](http://farm6.staticflickr.com/5548/10709312963_a32cf4a7fb_z.jpg)](http://www.flickr.com/photos/107852893@N04/10709312963/)
> *A panoramic view of the hackathon space at Tagged.*

Thanks again to [Tagged](http://about.tagged.com), who generously donated some
of their workspace to us for the event. The Tagged offices are very cool, and
in a great part of San Francisco.

[![NuPIC 2013 Fall Hackathon](http://farm4.staticflickr.com/3808/10981929444_a357663da7_z.jpg)](http://www.flickr.com/photos/107852893@N04/10981929444/)
> *Jeff Hawkins talking about sensor-motor integration in the neocortex.*

We had over 50 people attend the hackathon from across the United States and
Europe, most of whom stuck around for the demos after the 30-hour hack period.
In all, we had 7 impressive demos (see below)! Only a couple were
*natural language processing* hacks, but that's okay. It was great to see
NuPIC users making their ideas a reality in whichever direction they chose to
apply it.

[![NuPIC 2013 Fall Hackathon](http://farm8.staticflickr.com/7325/10709055775_72897d1031_z.jpg)](http://www.flickr.com/photos/107852893@N04/10709055775/)
> *Hackathon attendees watching Subutai Ahmad's
  [CLA Deep Dive](http://www.youtube.com/watch?v=QBs-2_wl_JM) presentation.*


## Feedback

Here's what some attendees had to say on our
[Meetup page](http://www.meetup.com/numenta/events/136809782/) and
[mailing list](http://lists.numenta.org/mailman/listinfo/nupic_lists.numenta.org)
about the hackathon:

> *"It was easily the best hackathon I have attended this year."*
  —**Jeff Fohl**

> *"There was fantastic energy in the room, something that only reinforced my
  sense that Numenta is on to something really big."*
  —**Johann Schleier-Smith**

> *"Very informative and spiked my interest in machine learning and NuPIC."*
  —**Venkat Venkataraju**

> *"Great event, convinced to jump in and start experimenting. Numenta seems to
  be going in the right direction."*
  —**Brian Eppert**

> *"Great experience. Intelligent people, insightful talks. I was totally new to
  NuPIC and although I didn't complete a project, I feel like I've learned a lot
  about the technology and the whole approach."*
  —**Nikolay Samusik**

> *"I think we had a nice mix of people at the event, e.g. from those focused on
  neuroscience biological aspects, to those just getting their feet wet, a few
  hackers applying NuPIC to some applications, and the great staff.  Great new
  introductions, good conversations and informational sessions. Definitely an
  event worth attending!"*
  —**Ari Kamlani**

[![NuPIC 2013 Fall Hackathon](http://farm6.staticflickr.com/5483/10709048275_e3caaa6270_z.jpg)](http://www.flickr.com/photos/107852893@N04/10709048275/)
> *Hacking in progress!*


## Videos

We tried to record everything we could, which included all the sessions (minus
one because of a technical glitch). My apologies for the poor audio and video in
some of these. We had a wireless microphone failure because of unanticipated RF
interference. We attempted to live-stream everything on YouTube via Google
Hangout, which meant we sacrificed quality. For future hackathons, I plan to
have better tools in place.

#### Kickoff

Jeff and I got the event rolling. This includes protocol information,
thank-yous, and guidance for hackers.

- [Video](http://www.youtube.com/watch?v=QNF-gONtSmA)
- [Slides](/resources/hackathon/2013-10/Kickoff.pdf)

#### NLP

Matthew Taylor had done some NLP work before the hackathon in order to help
others get started doing some work with NuPIC, NLP, and especially the CEPT API
for word SDRs (http://cortical.io). In this presentation, I present some of the
initial progress I made.

- [Video](http://www.youtube.com/watch?v=QNF-gONtSmA&amp;start=1260)
- [Slides](/resources/hackathon/2013-10/nupic_nlp.pdf)

#### Deep Dive

Subutai Ahmad, Grok/Numenta VP of Engineering, detailed some aspects of the CLA.
He discussed an interesting property of SDR's affecting temporal pooling and
hierarchies. The interactive session included a lot of Q&A

- [Video](http://www.youtube.com/watch?v=QBs-2_wl_JM)
- [Slides](/resources/hackathon/2013-10/November_2013_hackathon_subutai.pdf)

#### Sensori-Motor Integration

Most of the changes on our senses are due, wholly or in part, to our own
actions. Therefore, the neocortex learns a sensory-motor model of the world. In
this talk, Jeff discussed some of what we know about how the neocortex generates
behavior and how we might construct a simple sensory-motor system based on the
Cortical Learning Algorithm. It is a good starting point for anyone wanting to
add motor output to the CLA.

- [Video](http://www.youtube.com/watch?v=v9LWbV3QO5A)
- [Slides](/resources/hackathon/2013-10/Sensori-motor%20Nov%202013%20hackathon.pdf)

#### Q&A

This was an informal question and answer session between some hackathon
attendees and Jeff and Subutai.

- [Video](http://www.youtube.com/watch?v=g9UYCH29AEo)

#### CEPT Word-SDRs

Francisco Webber talked about his service that provides text comparison and
association services, as well as SDRs for English words. He described in great
detail how these SDRs are created, and talked about how they are being used by
Phase 6 in their effort to apply this technology to better English education
opportunities.

- [Video](http://www.youtube.com/watch?v=hjMjhhmYKhI)
- [Slides](/resources/hackathon/2013-10/CEPT_Word_SDRs.pdf)


## Demos

[Full Videos of all Hackathon Demonstrations](http://www.youtube.com/watch?v=X4XjYXFRIAQ&amp;start=285).

#### NTA CAR

Matt compiled and ran NuPIC on a Raspberry Pi, and wired up some wheels, a
controller, and light-sensitive sensors to help drive it. While he programmed it
to continuously steer towards the brightest light source, he used NuPIC's
anomaly scores of the light input from right and left to stop the vehicle when
it wandered into unexpected territory.

* Video: http://www.youtube.com/watch?v=X4XjYXFRIAQ&amp;start=390
* By: Matt Keith

#### NuPIC on ARM7

Ari compiled NuPIC into ARM 7, ran it on a Chromebook, and talked about using
NuPIC to predict the signal strength of public wifi access points.

* Video: http://www.youtube.com/watch?v=X4XjYXFRIAQ&amp;start=990
* By: Ari Kamlani

#### Imagine That!

This hack intends to give the CLA an ability to evaluate hypothetical input.
Imagine that you want to assess (predict) what the consequences of some action
(input) would be. You may have a set of possible inputs (as alternatives), and
want to evaluate which would lead to the best (predicted) outcome. The
demonstration will include mice, a maze, and some cheese.

* Video: http://www.youtube.com/watch?v=X4XjYXFRIAQ&amp;start=1970
* Code: https://github.com/EronWright/nupic-mouse
* By: Eron Wright

#### Visualizing Word-SDRs

Continuing with the NLP project I introduced in the Kickoff presentation, I
created bitmap images of the word SDRs predicted by the NuPIC temporal pooler
and compared them to the words the CEPT API associated them with.

* Video: http://www.youtube.com/watch?v=X4XjYXFRIAQ&amp;start=3240
* Code: https://github.com/rhyolight/nupic_nlp
* By: Matt Taylor

#### Pilot

This team taught the CLA to learn to control a quadcopter. Their objective was
to pilot the quadcopter by controlling its vertical speed to fly to a desired
altitude and hover there. The supervised learning approach involved having the
CLA watch an expert flyer and learn those sequences, and use its prediction of
those sequences to directly control the copter in the face of noise.

* Video: http://www.youtube.com/watch?v=X4XjYXFRIAQ&amp;start=4080
* Code: https://github.com/chetan51/pilot
* By: Chetan Surpur, Jay Gokhale, Josh Rose, Xuyen On, Eron Wright

#### Spatial Pooler Visualization

Ian showed a very enlightening visualization of a live spatial pooler being fed
parts of an image, one piece at a time. His hack displayed the cellular
activation given different SP settings, as well as visualization of the column
permanences.

* Video: http://www.youtube.com/watch?v=X4XjYXFRIAQ&amp;start=6110
* Code: https://github.com/iandanforth/spviewer
* By: Ian Danforth

#### What Does the Fox Eat?

Subutai used the word SDR association framework defined in
[nupic_nlp](http://github.com/rhyolight/nupic_nlp) to associate three word
phrases, teaching it sentences like "elephants eat leaves", "dogs like sleep",
and "cows eat grass". After some training, Subutai asks NuPIC,
["What does the fox eat?"](http://www.youtube.com/watch?v=jofNR_WkoCE)
Find out the answer by watching the video!

* Video: http://www.youtube.com/watch?v=X4XjYXFRIAQ&amp;start=7084
* Code: https://github.com/subutai/nupic_nlp
* By: Subutai Ahmad


## Conclusion

Lastly, our CEO and Chairman of the Grok/Numenta Board, Donna Dubinsky, said
[a few inspirational words](http://www.youtube.com/watch?v=X4XjYXFRIAQ&amp;start=8506)
at the end of the hackathon. Thanks, Donna!

This was a really fun event to plan, and it emphasizes what a great community we
have with NuPIC. Thank you everyone, for helping make this open source project
what it is today. I am looking forward to planning our next hackathon this
Spring!

[Comments on Reddit](http://www.reddit.com/r/MachineLearning/comments/1q2ef6/nupic_2013_fall_hackathon_outcome/)

**By the way!** You can see all the videos and photos taken at this hackathon on
our  [YouTube channel](http://www.youtube.com/channel/UC8-ttzWLgXZOGuhUyrPlUuA)
and [Flickr page](http://www.flickr.com/photos/107852893@N04/).
