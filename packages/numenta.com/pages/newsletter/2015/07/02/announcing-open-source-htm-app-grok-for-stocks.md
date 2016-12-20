---
author: Donna Dubinsky
brief: Over the last two years, we have created a series of example applications that illustrate the capabilities of HTM. Grok for IT Analytics, available for download on the Amazon Web Services Marketplace
date: 2015/07/02
image: ../images/image.png
org: CEO
tags: htm for stocks monitor stock price volume twitter anomaly outlier detection numenta open source htm app application nupic
title: "July 2015 Newsletter: Announcing HTM for Stocks - Open Source Example HTM App"
type: post
---

### Numenta Newsletter

**July 02, 2015**

Dear Numenta newsletter subscriber:

Over the last two years, we have created a series of example applications that
illustrate the capabilities of HTM.  Grok for IT Analytics, available for
download on the Amazon Web Services Marketplace, uses HTM to detect anomalies in
AWS server metrics. We have published source code for several other example
applications that use HTM to detect anomalies in human behavior, and in GPS
data. But up until now it hasn’t been easy for an individual to get a sense of
how HTM-based anomaly detection works; you either need to bring up an AWS server
instance, or put in a reasonable amount of software development effort.

So we have created a new example application, called HTM for Stocks, which
makes it much easier for you to experience how HTM detects anomalies. HTM for
Stocks is available for free here:
[Download HTM for Stocks](/htm-for-stocks/#get). At this
point, the application is available only for an Android mobile device.

HTM for Stocks applies HTM modeling and anomaly detection to 200 large
capitalization public companies.  The application automatically models three
data streams for each stock:  stock volume, stock price, and Twitter volume.  It
figures out “normal” for each of these data streams for each company, and then
lets you know if something abnormal has occurred.  

Here is what we hope you will notice when using HTM for Stocks:

* HTM enables automatic modeling of many models here, we are creating 600
  separate models (3 for each of 200 companies).  No human intervention is
  required to adjust parameters or tune models.

* HTM models learn continuously, with each new data point.  If a company changes
  its fundamentals, taking its stock volume to a new level, at first it will
  show an anomaly, but after a short period, it will learn the “new normal”.

* The models are ranked by the most anomalous to the least anomalous.  If you
  scroll down, you will note that many of the stocks show no anomalies.  This
  ranking of anomalies allows you to focus on the companies that are the most
  different from the norm.

Some of the anomalies detected by HTM for Stocks may appear obvious but others
are subtle and not easily detected by a human.  For example, if you watch stock
volumes, you will see that there often is a spike in the beginning and at the
end of the trading day.  It will notice if those spikes continue longer than
normal for that particular stock.  Such examples demonstrate the power of
finding temporal patterns

When you see an anomaly, it’s very informative to look at the Twitter stream for
the corresponding time frame.  There, you often will be able to quickly
determine the reason for the anomaly, such as an earnings announcement, a
takeover bid, a lawsuit, or a rapidly growing interest in something the company
did.

In keeping with our focus as a technology provider, we do not intend to build
HTM for Stocks into a full commercial application, and so we have provided the
source code for HTM for Stocks alongside our NuPIC open source project at
https://github.com/numenta/numenta-apps, available under a AGPL v3
license<sup>\*</sup>. Developers may find that HTM for Stocks code can be used to
create derivative products that track other data streams.  We also welcome
partners who are interested in a commercial license to the HTM for Stocks code;
in this case please write to [sales@numenta.com](mailto:sales@numenta.com).

We hope that you will enjoy using HTM for Stocks.  We welcome your feedback at
[feedback@numenta.com](mailto:feedback@numenta.com).

<sup>\*</sup>*This content has been updated to reflect our
  [new AGPL license](http://numenta.org/blog/2015/08/17/licensing-update.html).*
