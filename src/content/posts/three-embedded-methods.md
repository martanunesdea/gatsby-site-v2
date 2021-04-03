---
template: blog-post
title: Bare-metal vs. RTOS vs. Embedded Linux
slug: /bare-meta-rtos-embedded-linux
tags: Embedded Software
date: 2021-03-12 19:37
description: Exploring the three different flavours of Embedded Software Engineering
featuredImage: /assets/screen-post-hixmjh9xhoo-unsplash.jpg
---
It seems the field of embedded software is largely organised into three different methods of working. Bare-metal programming, where the software is directly written to interact with memory registers, peripherals, etc. RTOS programming, where the software is reliant on a largely-available (or, I suppose, proprietory) real-time operating system. Or, more recently gaining popularity, using modified versions of Linux to fit a memory-constrained device. 

In reality, we could split these into two groups: OS-based or non-OS based, since RTOS and Linux are both operating systems. However, in my opinion and experience, Linux and RTOS are really quite different. RTOS is very specifically targeting microcontrollers whereas Embedded Linux is a bit more of a DIY take-what-you-need method. 

I work with bare-metal profesionally but I have very briefly learnt about RTOS when I was working on a wearable device. And, of course, the environment to program the ESP32 in C is based on freeRTOS. So, I have had some exposure to that. 

Embedded Linux, however, I don't know much about. Most of what I know comes from working with my Raspberry Pi. Raspbian is a variation of Debian, which is one of the popular Linux distros. Just like Debian, there is a distro called Yocto that is much more targeted to embedded devices. From what I understand, Rasbpian and Yocto (and other Embedded Linux variations) take only what they need from Linux to save some memory space. 

I'll be trying to get my hands on some Embedded Linux projects by programming my Raspberry Pi. However, I foresee I may at some point need to get a dedicated board where I can experiment a bit with the Yocto distribution.