# debug-prerender
This little nodejs http server aims to help you debug your prerender installation.

# How to use?
On your server (the server you will need to get the pages pre-rendered).
  ```shell
  git clone https://github.com/tuliofaria/debug-prerender.git
  cd debug-prerender
  npm install
  node server.js
  ```
  You should be able to see some output when acessing the http://localhost:3000. Everytime one request arrives, it will be logged into logs.txt.
  
# Change your url rewriter to point to http://localhost:3000. For example, in IIS, we could do this:
  ```xml
<rule name="Prerender" stopProcessing="true">
  <conditions>
    <add input="{QUERY_STRING}" pattern="(.*)_escaped_fragment_=(.*)" />
  </conditions>
  <action type="Rewrite" url="http://localhost:3000/http://{HTTP_HOST}{REQUEST_URI}" appendQueryString="false" />
</rule>
  ```
