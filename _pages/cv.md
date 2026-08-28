---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* **MSc in Big Data Technology**, The Hong Kong University of Science and Technology, 2022–2023 (GGA: 3.76)
* **BSc in Mathematics and Applied Mathematics**, South China University of Technology, 2018–2022 (GPA: 3.63/4.00, top 10%)
  * First prize, American Mathematical Contest in Modeling
  * Outstanding Graduate of the Class of 2022

[Download my resume (PDF)]({{ base_path }}/files/Resume_Lukeyan.pdf)

Work experience
======
* **Aug 2023 – Jan 2024: Research Assistant**, The Hong Kong University of Science and Technology
  * Developed iOS features for an indoor positioning system using BLE, GPS, and IMU signals.
  * Improved PDR methods with threshold filtering and enabled detection of shaking, running, walking, and standing states.
  * Achieved real-time positioning accuracy of approximately 2–5 meters.

* **Feb 2023 – Jun 2023: Software Engineer**, Meta Metopia Technology Co., Ltd.
  * Contributed to a Hong Kong Web3.0 standardization white paper and virtual currency mechanism research.
  * Implemented user permission-management features in Solidity.

* **Jul 2022 – Sep 2022: Data Analyst**, Airdoc Technology Development Co., Ltd.
  * Collected over 10,000 pieces of public information with Python crawlers for recommendation scenarios.
  * Studied Spark applications in medical imaging and data-processing workflows.

* **Jul 2021 – Sep 2021: Data Analyst**, Ping An Insurance (Group) Company of China, Ltd.
  * Used Hive SQL to produce weekly and monthly reports for small-business insurance data.
  * Used a random forest model in R to identify more than 1,000 small-business owners from 100,000 auto-insurance customers.
  
Skills
======
* **Programming:** Python (PyTorch), SQL, R, MATLAB, C++, Swift, Solidity
* **Data and systems:** PySpark, Spark, Hive, data mining, recommendation, sensor fusion
* **Languages:** Mandarin (native), English (fluent; CET-4, CET-6, TOEFL)

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Interests
======
Electronic piano (amateur level 10), saxophone, reading, and swimming.
