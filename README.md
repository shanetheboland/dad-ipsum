# Dad Ipsum

A lorem ipsum generator in the language of Dads.

## Getting started

* Clone the project and Add a new git remote
* In terminal run
```bash
    git clone git@github.com:shanetheboland/dad-ipsum.git yourNewRepoName
    cd yourNewRepoName

    # add new git remote
    rm -rf .git
    git init
    git remote add origin git@github.com:yourUserName/yourNewRepoName.git
```

* git remote -v will allow you to check that you have changed the remote origin correctly. The output should look like:
```bash
    origin git@github.com:yourUserName/yourNewRepoName.git (fetch)
    origin git@github.com:yourUserName/yourNewRepoName.git (push)
```

## Dev environment
To set up a convenient dev environment run this at the root of the project

```bash
npm install .
```

Then run

```
npm start
```

* Once you add & commit files you are ready to publish run:
```bash
git push origin master
```

# Author

[Nick Jubrey](http://nickjubrey.com "Nick Jubrey - Web Designer")
[Shane Boland](http://shanetheboland.com "Shane Boland - Frontend Designer")

# License

The MIT License (MIT)

Copyright (c) 2014 @mrmrs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.