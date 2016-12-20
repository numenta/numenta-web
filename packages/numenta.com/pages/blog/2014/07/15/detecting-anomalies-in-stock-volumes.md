---
author: "Viraj Sinha"
brief: "I decided to apply Grok and the Cortical Learning Algorithm to stock data: have the CLA learn patterns and alert me to anomalies. I decided to monitor volume"
date: 2014/07/15
image: ../images/image.png
org: "Engineering Intern"
tags: anomaly, detection, stock, finance, volume
title: "Detecting Anomalies in Stock Volumes"
type: post
---

In the film Pi, a mathematician by the name of Maximllian Cohen derives the
mathematics for universal prediction pattern in stock data (using, as the
movie’s namesake may suggest, the number Pi). With his math, Max is able to
predict the precise activity of the market, in real time. The movie takes a turn
for the cerebral (and is worth a watch), but the idea of predicting stock data
stuck with me. Rather than using Max’s math, I decided to apply Grok and the
Cortical Learning Algorithm to stock data: have the CLA learn patterns and alert
me to anomalies.

I decided to primarily monitor stock volume, which can be an interesting
indicator of a share’s performance. Usually, a drastic event in volume indicates
a change in the recent trend of a given share: a volume spike signifies interest
by investors (or trading algorithms), often related to buy orders when the price
is significantly low, or sell orders when the price is high. By using Grok to
monitor volume anomalies, I can get a notification on my phone when a given
share is being traded in an unusual way.

Trade volume often peaks towards the beginnings and ends of the day, as after-
hours orders are filled in the mornings, or as close-price orders are filled in
the evening. Since Grok actually learns the patterns rather than being a simple
threshold-based system, it does very well learning patterns and filtering the
signal from the noise.

![Google Finance Graph](../images/1.png "Google Finance Graph")

Here’s a real life example from the ticker for 3D Systems Corporation (DDD). 3D
Systems Corporation builds and sells 3D printers and scanners, as well as sells
3D printed parts to everyone from the automotive to the dental and healthcare
industries. In the first image (taken directly from Google Finance), we can see
a trade volume spike on July 1st just moments before a huge increase in price
(and a continued increase in trade volume). In the second (taken from Grok), we
see an anomaly detected with the volume spike! When this happened, I got a
notification sent to my phone, telling me to check out DDD’s anomalous behavior.
I quickly got online and watched the action live, as the price skyrocketed and
then dropped back down. If I’d actually had DDD in my portfolio, I would’ve
known that the price spiked, and would’ve seen it drop back down by the end of
the day. It’s very convenient to be told when a share is doing something like
this, rather than having to watch multiple prices during the day.

![Grok Anomaly Chart](../images/2.png "Grok Anomaly Chart")

Interestingly, we don’t see any anomalies after the first red peak on the
anomaly chart. This is because Grok, by default, suppresses additional anomalies
for an hour after an initial detection—the red peak on the chart is synonymous
with a detected anomaly. Since Grok fires off a cell phone notification every
time it sees an anomaly, we decided we didn’t want to spam the user with
multiple notifications within a certain time period. If you look closely at the
graph, you can even see the perfectly flat section for about 1 hour after the
initial red anomaly. If we didn’t have this suppression turned on, we’d expect
to see additional anomalies detected around 8:40 and 9:05 that day.

I’m writing this post a week after this event, and the press has had some time
to catch up. There are a few speculative reasons for this price spike, including
a change in management<sup>[1]</sup>, and news of recent advancements in
medical-grade 3D printing which will allow for antibiotic-infused
implants<sup>[2]</sup>. This is pretty exciting news, all of which I likely
wouldn’t have noticed if it weren’t for Grok.

[1] http://www.marketnewscall.com/volume-buzzers-3d-systems-corporation-nyseddd-ezchip-semiconductor-ltd-nasdaqezch/1231261/
[2] http://3dprint.com/7793/3d-print-antibiotics-implants/
