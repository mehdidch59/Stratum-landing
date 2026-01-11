---
title: "Webhooks"
description: "Receive real-time notifications about security events."
category: "Developers"
order: 6
---

# Webhooks

Webhooks allow you to build custom integrations that react to events in your Stratum workspace.

## How Webhooks Work

When a specific event occurs (e.g., a scan completes or a high-severity vulnerability is found), Stratum sends an HTTP POST request to the URL you specify. This request contains a JSON payload with details about the event.

## Configuring a Webhook

1. Go to **Settings > Integrations**.
2. Click **Add Webhook**.
3. Enter your **Endpoint URL**.
4. Select the **Events** you want to subscribe to:
   - `scan.started`
   - `scan.completed`
   - `vulnerability.discovered`
   - `policy.violation`
5. Save the configuration.

## Example Payload

```json
{
  "event": "vulnerability.discovered",
  "timestamp": "2024-03-20T14:30:00Z",
  "data": {
    "severity": "CRITICAL",
    "type": "SQL Injection",
    "target": "api.production.internal",
    "remediation_url": "https://app.stratum-app.com/issues/123"
  }
}
```

## Security & Verification

Stratum signs every webhook request with a secret key. You should verify the signature in the `X-Stratum-Signature` header to ensure the request came from us.
