---
title: "SaaS Scanners"
description: "How Stratum scans your infrastructure from the cloud."
category: "Core Concepts"
order: 3
---

# SaaS Scanners

Stratum uses a distributed network of cloud-based scanning nodes to evaluate your security posture from the outside in.

## How it Works

When you trigger a scan, the Stratum Control Plane orchestrates a set of specialized containers across our global fleet. These scanners perform several phases of analysis:

### 1. Asset Discovery
Mapping out every reachable endpoint, port, and service associated with your infrastructure.

### 2. Fingerprinting
Identifying the exact versions of software and hardware running on your systems.

### 3. Vulnerability Analysis
Testing for known CVEs, misconfigurations, and weak cryptographic settings.

## No Agents Required

Since Stratum is a pure SaaS solution, you do not need to install any software on your servers. Our scanners interact with your services just as a real-world attacker (or a legitimate user) would.

For internal-only assets, we provide **Stratum Relay**, a lightweight dockerized proxy that securely tunnels scan traffic to your private network.
