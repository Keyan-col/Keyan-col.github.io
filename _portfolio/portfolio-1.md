---
title: "Sifu Indoor Positioning System"
excerpt: "A mobile indoor positioning system combining BLE, GPS, IMU, and improved PDR methods."
collection: portfolio
---

<p class="project-meta">Mobile sensing / Real-time systems / HKUST</p>

## The challenge

Indoor positioning is difficult when GPS becomes unreliable and sensor signals are noisy. The goal was to provide a useful real-time location estimate on iOS while recognizing how a person was moving.

## My contribution

* Implemented iOS features using BLE, GPS, and IMU signals.
* Integrated threshold filtering into improved pedestrian dead reckoning (PDR) methods.
* Added detection for shaking, running, walking, and standing states.
* Reached practical positioning accuracy of approximately 2-3 meters.

## What I learned

The strongest result came from treating the system as a complete sensing pipeline: signal quality, user state, and positioning logic had to be considered together rather than optimized in isolation.
