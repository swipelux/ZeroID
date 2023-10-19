# ZeroID Key Storage

## How to use

1. Install SDK
2. Display the widget for the end user
3. Use end users API keys in your project

### Install

Just add the script tag to your head section of your HTML page.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Your site</title>
        <script src="https://zeroid.swipelux.com/sdk.js"></script>
    </head>
    <body>
    </body>
</html>

```

### Display widget

In the body section, add an HTML element for the widget to get placed to.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Your site</title>
        <script src="https://zeroid.swipelux.com/sdk.js"></script>
    </head>
    <body>
        <!-- div with sample id for the widget placement in further -->
        <div id="widget-here"></div>
    </body>
</html>
```

Now you can make the widget shown

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your site</title>
    <script src="https://zeroid.swipelux.com/sdk.js"></script>
</head>
<body>
<!-- div with sample id for the widget placement in further -->
<div id="widget-here"></div>
<script>
    
    const placeForWidget = document.getElementById("widget-here");

    const zeroID = ZeroIdSdk.initStorage(placeForWidget);

</script>
</body>
</html>
```

<img width="500px" src="zeroid/public/storage_1.png">

### Use widget

When "My keys" button clicked for the first time click the Metamask signature request appears

<img width="500px" src="zeroid/public/sigrequest.png">

It is being used to identify the user by wallet, so then we can prepare a personal key bucket for you. <b>No fee is charged.</b>

Once signed, the key management pop-up is shown,

Where you can

- add
- update
- remove 

your <b>OpenAI API Key</b>

<img width="500px" src="zeroid/public/storage_2.png">

### Use your keys in code

After key is saved it can be retrieved in code


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your site</title>
    <script src="https://zeroid.swipelux.com/sdk.js"></script>
</head>
<body>
<!-- div with sample id for the widget placement in further -->
<div id="widget-here"></div>
<script>

    const placeForWidget = document.getElementById("widget-here");

    const zeroID = ZeroIdSdk.initStorage(placeForWidget);

    // using you OpenAI key
    zeroID.openAIKey()
            .then(res => res.value)
            .then(openAIKey => {
                // your logic here
                
            })
            .catch(console.error);

</script>
</body>
</html>
```

### Also 

You can find various

| Name            | Description               | Call example                        |
|-----------------|---------------------------|-------------------------------------|
| `credentials`   | Return all credentials    | `zeroID.credentials()`              |
| `credential`    | Return credential by name | `zeroID.credential(name)`           |
| `openAIKey`     | Return OpenAI key         | `zeroID.openAIKey()`                |
| `addCredential` | Add new credential        | `zeroID.addCredential(name, value)` |

