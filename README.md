# Description

This is an exercise in Backbone.js with the following requirements:

- make a list of clips of a particular format
- the list is produced by requests to an API (mocked here with static json files)
- the API response has the following format:

```javascript
{
  "page": "1",
  "has_next": "true",
  "content": [
    {
      // clip properties
    }
  ]
}
```
- in the bottom of the list, there is a button to load more clips
- if the response from the API indicates that there are no more clips (`"has_next": "false"`),
the button should disappear

The result is deployed [here](http://azangru.github.io/simple-backbone-exercise).
