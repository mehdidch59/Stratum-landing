---
title: "Security Policies"
description: "Define rules and compliance standards for your infrastructure."
category: "Core Concepts"
order: 4
---

# Security Policies

Policies are the heart of Stratum's automation. They define what is considered "secure" in your specific environment.

## Default Policies

Every Stratum workspace comes with industry-standard policies pre-configured:
- **Pillars of Security**: Basic hygiene (open SSH, expired certs).
- **PCI-DSS Compliance**: Specifically for payment processing environments.
- **SOC2 Monitoring**: Focused on data integrity and access control.

## Custom Policies

You can create custom policies using our **Rule Builder**. For example:
- "Notify the DevOps team if any S3 bucket becomes public."
- "Block any build if a Critical vulnerability is found in the production cluster."
- "Require TLS 1.3 for all web-facing assets."

## Remediation Workflows

When a policy is violated, Stratum doesn't just alert you. You can configure **Remediation Workflows**:
- Auto-generate a Jira ticket.
- Send a Slack notification to the relevant channel.
- Execute a webhook to trigger a Lambda function for auto-healing.
