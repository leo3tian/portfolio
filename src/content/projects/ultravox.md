---
title: "Software Engineering Intern @ Ultravox AI"
company: "Ultravox AI"
type: "Experience"
description: "Developing data pipelines for 5 million hours of data"
technologies: ["PostgreSQL", "React.js", "Node.js", "Stripe"]
image: "/projects/ignite-robotics1.png"
liveUrl: "https://ultravox.ai"
githubUrl: ""
featured: true
category: "Full-Stack Development"
date: "2025-06"
duration: "Summer 2025"
role: "Software Engineering Intern"
---

Ultravox AI is a startup developing voice AI. To make the step from robot to authentic human, we needed far more audio data, something on the scale of millions of hours - but the problem was, that scale of data is extremely expensive. 

As an intern, I generated datasets at a fraction of the cost by scraping podcasts online at a massive scale (think hundreds of AWS Lambda workers, running for days on end), processing them at an equally large scale (hundreds of H100 GPUs), then storing them at scale.

Some of my daily work included:
- Data discovery - scraping RSS feeds and downloading files through hundreds of EC2 instances and Cloudflare workers
- Programming data pipelines in Python, utilizing Whisper, Pyannote, Silero-VAD models
- Orchestrating hundreds of H100s through Kubernetes
- Comparing cloud providers (AWS, Cloudflare, GCP) for storage, weighing tradeoffs in costs, architecture and ecosystem

Impact I made:
- Delivered an audio dataset of 5 million hours (**50 times** what was previously available, with an equivalent price of ~$10 million)
- Reconstructed the high-quality Spotify-100k dataset from RSS feeds
- Delivered a data pipeline that transcribes, diarizes, segments, and standardizes audio data
- Delivered accompanying infrastructure to fully saturate H100s by running data pipelines in parallel

My favorite challenges:
- What makes good audio data for developing conversational TTS, and how can we filter out the bad audio?
- How to saturate an H100?
- How can I utilize compute that we own, but nobody is using?  
- How to host a 40 TB dataset?
- How to programatically detect if an audio file has no/poor dialog based off just its title, author, and keywords?
- Now that I can do this for one file/gpu/worker/video, how can I do this for one thousand? one million?