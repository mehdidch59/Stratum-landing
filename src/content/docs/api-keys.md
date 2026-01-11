---
title: "API Keys"
description: "How to authenticate your requests with the Stratum API."
category: "Developers"
order: 5
---

# API Keys

To interact with the Stratum API programmatically, you must use an API Key.

## Generating a Key

1. Log in to the [Stratum Dashboard](https://app.stratum-app.com).
2. Navigate to **Settings > Developer Settings**.
3. Click on **Create New API Key**.
4. Give your key a descriptive name and select its scope (Read-only or Admin).
5. **Copy the secret key.** You will not be able to see it again.

## Using the Key

Include your API key in the `Authorization` header of your HTTP requests:

```bash
curl -X GET "https://api.stratum-app.com/v1/scans" \
     -H "Authorization: Bearer YOUR_API_KEY"
```

## Security Best Practices

- Never commit your API keys to version control.
- Use environment variables to store keys in your application.
- Regularly rotate your keys to minimize the risk of exposure.
