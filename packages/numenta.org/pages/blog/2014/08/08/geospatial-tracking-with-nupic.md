---
author: "Matthew Taylor"
brief: "We have developed and open-sourced a project called the NuPIC Geospatial Tracking Application, which demonstrates how NuPIC can be used to provide anomaly indications for geospatial data."
date: 2014/08/08
hideImage: false
image: ../images/image.png
org: "Open Source Manager"
tags: nupic geospatial tracking application open source gps anomaly gpx videos
title: "Geospatial Tracking With NuPIC"
type: post
---

We have developed and open-sourced a project called the [NuPIC Geospatial
Tracking Application](https://github.com/numenta/nupic.geospatial), which
demonstrates how NuPIC can be used to provide anomaly indications for geospatial
data. Specifically, it can accept GPS track information in
[GPX](http://www.topografix.com/gpx.asp) format and output indications of
anomalous activity for each point along the tracks. This could be useful for a
number of interesting applications:

- Air Safety
    - Monitor location, speed and trajectory of commercial aircraft
- Maritime Domain Awareness
    - Detect abnormal ship routes or unexpected ports of entry
    - Spot unexpected travel impediments — weather, malfunctions, piracy
- Family and Pet Care
    - Receive alerts when family members deviate from normal routes or locations
    - Track teen driving patterns and speeds
- Fleet and Professional Driver Tracking
    - Monitor driver route and activity compliance
    - Collect anomalous route data to understand traffic conditions or road
      obstructions
- Personnel Compliance and Safety
    - Monitor employee movements in hazardous industries - mining, public
      safety, military
    - Ensure service coverage - security guards, hospitality workers, sales
      associates
- Supply Chain Visibility
    - Monitor inventory movement through supply chains to identify anomalies and
      delays
    - Spot new bottlenecks or service disruptions in delivery networks

You can see a simple tutorial of how to import GPS information from standard GPX
files in this video:

[![NuPIC Geospatial Tracking Application Tutorial](http://img.youtube.com/vi/M4dD9wCQLkA/hqdefault.jpg)](http://www.youtube.com/watch?v=M4dD9wCQLkA)

Numenta has also authored a white paper entitled
[Geospatial Tracking: Learning the Patterns in Movement and Detecting Anomalies](http://numenta.com/assets/pdf/whitepapers/Geospatial%20Tracking%20White%20Paper.pdf),
which provides details about our motivation, potential use-cases, and underlying
technologies.

At the heart of this new capability is the `GeospatialCoordinateEncoder`, which
converts geospatial coordinate information into a format that is compatible with
NuPIC, exposing the characteristics of location information that allows the
cortical underpinnings of NuPIC to understand it. In a way, this is analogous to
providing a "new sense" of location awareness that we humans currently don't
have. For details about how the Geospatial Coordinate Encoder works to encode
this data for NuPIC, see the following video by Numenta engineer Chetan Surpur:

[![Geospatial Coordinate Encoder](http://img.youtube.com/vi/KxxHo-FtKRo/hqdefault.jpg)](http://www.youtube.com/watch?v=KxxHo-FtKRo)

We hope this demonstration of NuPIC's geospatial tracking capabilities inspires
others to create more interesting implementations in the fields listed above.
The [NuPIC Geospatial Tracking Application](https://github.com/numenta/nupic.geospatial)
is really just a showcase, and a simple implementation to demonstrate NuPIC's
efficacy in this field.

[Comments on Reddit](http://www.reddit.com/r/MachineLearning/comments/2dx0uc/geospatial_tracking_with_nupic/)
