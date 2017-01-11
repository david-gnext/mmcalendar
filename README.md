# mmcalendar
Myanmar calendar google Api with fullcalendar.js

# Note
`If you want to use ,you can change your own google client id and calendar id by using your gmail account ` <br>
`သင့္ကိုယ္တိုင္Gmailအေကာင့္ၿဖင့္ google client id and calendar id ကိုရယူၿပီးေအာက္ေဖာ္ၿပပါလိုင္းမွာေၿပာင္းထည့္ေပးလိုက္ပါ`

# index.html (***ဒီဖိုင္ရဲ႕ေအာက္ေဖာ္ၿပပါလုိင္းနံပါတ္မွာေၿပာင္းေပးပါ***)
```Javascript

33: $(document).ready( function() {
34:  function onLoadFn() {
35:  gapi.client.setApiKey("your api key");
36:  checkAuth();
37: }
38:  gapi.load("client", onLoadFn);
39://Global variables to access the calendar
40:     clientId = 'your client Id',
41:     scopes = 'https://www.googleapis.com/auth/calendar',
42:     calendarId = 'your gmail or calendar id',
43:     eventsList = [];  
```
