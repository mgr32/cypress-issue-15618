# cypress-issue-15618

**Reproduce steps**
1. Run npm install.
2. Run npm start.
3. Run test.spec.js.

**Outcome**

Test fails - video output:

https://user-images.githubusercontent.com/6533636/152991571-cb60c27f-321c-41c4-ac1b-d889a7f11715.mp4

**Workaround**:

Now edit `cypress-issue.html` - change:
```
:root {
    scroll-behavior: smooth;
}
```

to:
```
:root {
    scroll-behavior: auto;
}
```

and re-run the test - it succeeds, video output:

https://user-images.githubusercontent.com/6533636/152991593-dd5e1659-c6ea-4ce5-a1c1-cd8c50c73b18.mp4

Alternatively, leave `scroll-behavior: smooth` and downgrade Cypress to 6.7.0 (the highest working version). 

**More info**
Reproduced on Windows 10, Node 16.13.1 and on all browsers - Chrome 97, Firefox 96 and Electron 94.
