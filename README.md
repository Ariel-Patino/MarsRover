# Instruccion

npm used:

```console
foo@bar:~$ npm --version

8.11.0
```

node used:

```console
foo@bar:~$ node --version

v18.3.0
```

React version:

---

import React from 'react';

const REACT_VERSION = React.version;

REACT_VERSION = 18.1.0

---

<br/>
<br/>

# Run app

To install dependencies run:

```console
foo@bar:~$ npm install
```

For having .env file execute:

```console
foo@bar:~$ cp .env.example .env
```

Change the DEMO_KEY value by your own NASA API Key, follow instruccions https://api.nasa.gov/

For execute app run:

```console
foo@bar:~$ npm run dev
```

---

Web App will run in: _localhost:3000_

---

**Note:**
It is posibble run _prettier_, _test_, _lint_, etc. Just verify the _package.json_ file and see _scripts_ section, then run the command:

---

npm run \<any script in package.json>

---

Example:

```console
foo@bar:~$ npm run prettier
```
