---
author: Christy Maver
brief: I'm pleased to announce that we have released an iOS version of HTM for Stocks, a demonstration application that enables anybody to experience HTM technology firsthand. Previously available for Android only, HTM for Stocks now can be
date: 2016/02/18
image: ../images/image.png
org: Director of Marketing
tags: htm for stocks apple app store hierarchical temporal memory numenta
title: HTM for Stocks available in the App Store
type: post
---

### Numenta Newsletter &mdash; February 18, 2016

I’m pleased to announce that we have released an iOS version of
[HTM for Stocks](/htm-for-stocks/), a demonstration application that enables
anybody to experience HTM technology firsthand. Previously available for Android
only, HTM for Stocks now can be found in the App Store.

[HTM for Stocks](/htm-for-stocks/) continuously monitors stock price, stock
volume and Twitter volume for roughly 200 publicly traded companies and alerts
you in real time when something unusual is happening. Results are displayed from
most to least anomalous, so you can determine what is important and where to
focus.

This application not only makes detecting securities anomalies easy, but it also
highlights the value of HTM.  For example, you don’t have to know what you’re
looking for to find these real-time anomalies. HTM starts learning hundreds of
models immediately.  In this case, it creates a model for three data streams per
stock: stock price, stock volume and Twitter volume.  The application
continuously compares a prediction of the next data point with the actual next
point and, if the overall behavior is unexpected, it reports an anomaly.  No
human intervention is required. You don’t have to tune it or define parameters.
You don’t need to know anything about the stocks.  Because HTM for Stocks
continuously learns, it adapts well to changes. For example, if a stock price
spikes but then continues to stay at that level, HTM for Stocks learns the
higher price is a new normal.

Perhaps one of the nicest benefits of this application is that it displays
stocks from most to least anomalous activity. This ability to cut through vast
amounts of noisy data and surface only the companies where something unusual is
happening is extremely valuable and time-saving.   In this application, we’re
monitoring stocks, but you could use the same principles to find anomalous
behavior in many types of data streams:

*	Machine sensor data - to do preventative maintenance and know which machines
  need repairs
*	Human behavior metrics – to identify suspicious activity
*	GPS coordinates – to track vehicles and find deviations from an expected route

Like all of our sample applications, we’ve made the
[source code available](https://github.com/numenta/numenta-apps), and we hope to
see developers create derivative products.  If you are interested in developing
HTM for Stocks into a commercial product, you can contact us at
[sales@numenta.com](mailto:sales@numenta.com).

In the meantime, we hope that our readers who are also iPhone users will
download HTM for Stocks and give it a try.
