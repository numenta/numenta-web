---
author: Matthew Taylor
description: "Grid cells are cool"
date: 2018/05/17
hideImage: true
org: Open Source Community Manager
keywords: "grid cells"
title: "How Grid Cells Map Space"
header: "How Grid Cells Map Space"
type: post
scripts: 
 - https://code.jquery.com/jquery-3.3.1.slim.min.js
 - https://d3js.org/d3.v5.min.js
 - https://htm-community.github.io/building-htm-systems/bhtms-how-do-grid-cells-work-0.2.2.js
---

<h1>How Grid Cells Map Space</h1>

<blockquote>
    This blog post contains interactive visualizations that may not work on older web browsers.
</blockquote>

<p>
    A <em><strong><a target="_blank" href="http://www.scholarpedia.org/article/Grid_cells">grid cell</a></strong></em> is a type of pyramidal neuron that responds to location. To do this, each grid cell creates a cognitive map of space. One example of grid cell behavior is how one grid cell might respond to an agent's location in a room. Play the movie below and watch as one grid cell fires as a mouse moves throughout a room. These firing fields form a hexagonal lattice across the room.
</p>

<iframe width="445" height="250" src="https://www.youtube.com/embed/i9GiLBXWAHI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<p>While <em>grid cells in the entorhinal cortex</em> have been found to help identify an animal's position in space, recent evidence suggests that grid cell-like mechanisms may be <strong>present in the neocortex</strong>. We propose that <a target="_blank" href="https://www.youtube.com/watch?v=zVGQeFFjhEk">cortical grid cells exist in every cortical column</a> and play an essential role in all cortical function. Based on this premise, we're working on a theoretical framework for understanding what cortical columns do.</p>

<p>
    In order to understand how grid cells can represent objects in space, it's easier to <em>understand first how grid cells can represent one unique location in space</em>. The series of interactive visualizations below will guide you through these concepts.
</p>

<h2>A Simulation of Grid Cells in Action</h2>

<p>
    <a onclick="toggleSim(true)">Click here</a> to start the interactive visualization below, where you can see an object moving through a 2-dimensional space, which wraps at the edges. This 2D space is being mapped by 3 grid cells (<a onclick="showOnly('red')">red</a>, <a onclick="showOnly('blue')">blue</a>, and <a onclick="showOnly('green')">green</a>). The color splotches are each grid cell's firing fields, or the locations in the space where the cell has fired recently in response to the object's location. These spikes fade away as they are replaced with new firings as the object moves through the space.
</p>

<p>
    As the grid cells' firing fields <a onclick="showOnly()">fill in</a>, notice they project slightly differently across the space. Each one has a different orientation and scale. But they all create the same spaced pattern.
</p>

<div id="gridCellFiringFields" class="widget"></div>

<p>
    If you're a fast reader, the firing fields may not have filled in much yet. If you are at a  computer, hover your mouse over the 2D space to control the location of the object and watch as each grid cell fires in response to your movement. See if you can find the firing fields yourself as you move the cursor across the space.
</p>

<p>
    To stop the simulation, uncheck the "Random Walk" checkbox or just <a onclick="toggleSim(false)">click here</a>.
</p>

<h2>One Grid Cell's Firing Fields</h2>

<p>
    One grid cell observes the space below and only reacts to certain places. The locations it activates in response to are called <strong>firing fields</strong>. In the figure above, you can see that each color cell has many firing fields. As an attended object gets closer to the center of the field, the probability of the grid cell firing becomes higher.
</p>

<p>
    In the <a onclick="toggleOneGridCell(true)">figure below</a>, one grid cell's firing fields are displayed as filled circles in a hexagonal lattice. This represents all the locations the grid cell is receptive to. As you mouse over the filled circles, they change color, indicating that the grid cell monitoring this space is firing. The grid cell has noticed something within its receptive field.
</p>

<div id="oneGridCell"></div>

<p>
    Each grid cell can project onto space in many ways. Above, you can <a onclick="resetOneGridCell()">change</a> the orientation and scale of this grid cell's projection onto the 2D space. Try moving the sliders now.
</p>

<p>
    One grid cell is not enough to represent a location in space. As you can easily see above, the representation is ambiguous, and could represent a number of places in the space. That's why grid cells work together in <em>modules</em>.
</p>

<h2>The Grid Cell Module</h2>

<p>
    A <a onclick="toggleOneGridCellModule(true)">grid cell module</a> is simply a group of grid cells sharing the same projection properties onto space. Using many grid cells, we can cover a patch of space and use it to tile over a larger space.
</p>

<div id="oneGridCellModule"></div>

<p>
    The overlay on the bottom left shows all 16 grid cells within the module, and which one is currently active in response to an object's location in space. Hover your mouse over the parallelogram shape in the overlay to see each individual grid cell's firing fields.
</p>

<p>
    One grid cell module can tell us a lot more about an object's location in space than a lone grid cell. As you mouse-over the space above, notice how the grid cell module knows your mouse cursor must be within one of many locations moving across the space. But it cannot decipher an exact location.
</p>

<p>
    Again, one grid cell module is not enough to uniquely map space. But when we use many grid cell modules together, we can map a virtually infinite amount of space.
</p>

<h2>Grid Cell Modules Working Together</h2>

<p>
    When grid cell modules work together, they can uniquely map space by combining their representations. Each cell in a grid cell module is like a bit in an <a target="_new" href="https://www.youtube.com/watch?v=ZDgCdWTuIzc">Sparse Distributed Representation (SDR)</a>. As you can see <a onclick="toggleManyGcm(true)">below</a>, this space is being mapped with <span class="gcmCount">?</span> grid cell modules each with 16 cells (<span class="cellCount">?</span> grid cells).
</p>

<div id="manyGridCellModules"></div>

<p>
    Let's try something. First, <a onclick="manyGcmSelect(4)">select only 4 grid cell modules</a>. <a onclick="toggleManyGcm(true)">Turn on</a> the random walk, then <a onclick="hideGcmLocationMarker(true)">hide the location marker</a>. With only a few grid cell modules mapping this space, it is hard to tell where the object is without turning the marker <a onclick="manyGcmSetMarker(true)">on</a> and <a onclick="manyGcmSetMarker(false)">off</a>. But if you <a onclick="manyGcmSelect(16)">increase the number of grid cell modules</a>, you can easily tell where the object is by looking for the space with the <a onclick="manyGcmSetMarker(true)">most overlap</a>. Use your mouse to hover over the space and explore. Use the checkbox above or <a onclick="toggleManyGcm(false)">click here</a> to turn off the animation.
</p>

<h2>Grid Cell Modules are Sparse Distributed Representations</h2>

<p>
    Grid cell module activations are SDRs, and can be used to represent semantic location information in many ways in the brain. Many grid cell modules' SDR representations can be used to create unique binary representations of space.
</p>

<div id="gcmAsSdr"></div>

<div id="gcmAsSdr"></div>

<h2>Grid Cells in the Neocortex</h2>

<p>
    Grid cells, located in the medial entorhinal cortex, represent the location of an animal in various environments. We propose that the lower layers of the neocortex have cells that work on principles similar to those used by grid cells. Whereas grid cells represent the location of one thing (<em>the body</em>) the neocortex simultaneously represents the location of <em>hundreds</em> of things. Cortical columns that receive input from different parts of the body track the location of each body part relative to external reference frames.
</p>

<p>
    Because of these unique properties, we think grid cells are extremely important processing units for our brains to understand space and represent objects in reality. For even more reasons why I'm excited about grid cells, check out Episode 14 of <a href="http://numenta.org/htm-school/">HTM School</a> below!
</p>

<iframe width="445" height="250" src="https://www.youtube.com/embed/mP7neeymcUY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


