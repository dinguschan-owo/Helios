## ***`Common Questions`***

Ok so a lot of people have been asking how Helios works (and how it can be completely unblockable) so this quick(?) blurb should hopefully help explain it to you. first, i wanna start by explaining what a proxy is. Heres how a web proxy works:
\
\
![image](https://github.com/user-attachments/assets/25e4405b-1cdd-42ad-b22c-ff64377d8df7)

Lets break it down.

1. the client (you) sends a request (e.g., a web page or API request) to the proxy server instead of straight to the target server
2. the proxy then processes, evaluates or modifies (and sometimes logs) your request and traffic. This might hide your IP address for anonymity, cache data to speed up responses, apply security or access policies, or most commonly with web proxies, disguise your entire user ID and traffic. this is sometimes done just to be anonymous online, or to bypass adminstration blocked sites, or even to visit region locked sites or content.
3. the proxy forwards your (possibly modified) request to the target server
4. the target servers recieves your request, now masked by the proxy server, and responds by fufilling the request and sending it back to the proxy server
5.  the proxy processes the response (e.g., filtering content) and sends it back to you, effectivly letting you complete the request by proxy. thats where the phrase web proxy comes from.

Now that we know what a web proxy is, lets take a look at Helios. when you make a request to a website with Helios, Helios doesn't use your web browsers functionality to do that. instead, it sends a fetch() request for the cource code of website in question using Javascript, cutting out your actual browser entirely and making your requests, and therfore web traffic, invisible. nothing affiliated with your actual browser or even device can see these requests, including extensions and built in monitering software. this is awesome, except for the fact websites often dont like humoring fetch() requests due to security concerns like abuse, spam, and scraping. to prevent such activities, most modern websites will enforce the same-origin policy (SOP), which restricts requests made from a different domain, protocol, or port than the origin of the page. what this means is without a valid header that tells the website that you come from the same server, domain, or port as the website it will not let you view the site. 

this is where CORS (Cross-Origin Resource Sharing) comes into play. CORS allows requests, whethere it be Javascript or browser users to view the website, without coming from the same source as the website by specifing how servers can allow resources to be shared across domains. however, websites often don't set valid CORS headers for all domains (for good reasons, like the ones mentioned earlier), leaving tools like Helios unable to fetch the data directly. to bypass these restrictions, Helios can route your requests through a CORS proxy. whats a CORS proxy? glad you asked. heres how a CORS proxy works:
\
\
![image](https://github.com/user-attachments/assets/1f0f9c99-c3b8-47be-a59c-5f3c0e558ebf)

Lets break it down.

1.  the client (you) sends a Javascript fetch() request through Helios to the CORS server instead of straight to the target server, because the fetch() request will be blocked by the reiciving servers due to it not having a valid CORS header.
2.  The CORS proxy server acts as an intermediary for your request. it modifies your request by appending a valid CORS header to your request, transforming your Javascript bot request into what appears as a legitimate client from the server's perspective.
3.  The CORS proxy server sends off this newly masked request to the target server, which gets tricked by the appended CORS header and gives up and sends back its source code to the CORS proxy.
4.  the CORS proxy returns your source code laden request back to Helios to assemble and display for your browsing enjoyment.

Wait a minute. Those two seem excatly the same? whats the difference? Lets break it down. Again.

A traditional web proxy acts as an intermediary for your traffic, relaying your requests to a target server and then sending the response back to you. However, the proxy server **can** see and log everything that goes through it, including sensitive information like login credentials, personal data, and search history (yikes!). this is a potential privacy risk, as many proxies that are advertised to be free for the user will track your browsing behavior to store amd sell for cash to keep their services running. this is obviously not good at all.

Helios, on the other hand, is designed to minimize any exposure of your requests and traffic. unlike traditional web proxies, Helios operates completely client-side. when you make a request to a website, Helios bypasses your browser's default networking mechanisms and uses JavaScript's fetch() function to make the request. this means the CORS and target servers never sees your actual browser or info — it only interacts with the fetch() request, which makes your actual browsing activity invisible to the target server as well and browser. 

Use Helios guys, dont trust any shifty ass Networks on the internet named after random objects that promise free proxy use. *cough cough, * titanium. keep your info safe.
## ***`Background`***

this is the orgignal Helios proxy slapped together soley by me, dinguschan. its a web browser proxy thing i whipped up while absolutly zonked out of my goose, and its in NO way finished. the aim is to be a replacement for dingusProxy, a replacement for your spyware ridden admin controlled browser, and just a plain better proxy than anything any skiddy ass anti censorship "networks" on the internet could cook up. the idea for this was to expand upon dingusProxy's specialized static host, clientside, local, and html css js only web proxy code and unfuck the mess of code in there. i added sandboxed tabs, specialized settings and cloaking, built in threat protection and- I JUST WANNA TO CLONE CHROME. I WANNA BLATENTLY COPY CHROME SOOOOO FUCKING BAD. ITS GONNA BE 𝘽𝙀𝙏𝙏𝙀𝙍 ITS GONNA BE 𝙁𝘼𝙎𝙏𝙀𝙍 ITS GONNA TAKE YOUR ADMINS SHITASS CENSORSHIP AND FUCK. IT. UP. BEAT THAT SHIT DOWN WITH A RUSTY STEEL PIPE WRENCH MADE OF DINGUSCHAN CERTIFIED BOMB ASS CODE. 

to use Helios you can visit one of the offical links below, or click the "Download Helios Offline" option in the menu dropdown. you can also go through the file tree in the repository and download the "Helios-Offline.html" file to get the same result. this file can not be blocked unless your admin physically deletes the file off of your device, which was the main point of Helios, and i STRONGLY recomend doing this. you can also host this on any static or non static hosting service like Netlify, Heroku, Vercel, or whatever happens to not be blocked by your admin, or alternitivly just copy and paste into Codepen, Replit, or any WYSIWYG HTML editor on the internet for extremely quick access, without having it show up in your history!

## ***`Official Links`***

- https://helios-browser.vercel.app/
- https://helios-blue.vercel.app/
- https://helios-browser.w3spaces.com/

## ***`How To Use`***

1. clone this repo, host on ANY site hoster, static or not, (Netlify/Render/CodeSandbox/Vercel/Heroku/etc.) and deploy the project. if you plan to deploy with Vercel, you do not have to clone this repo, and the button for quick deploy is right below these instructions
2. deploy
3. use freely!

alternativly: 

1. download the offline file either from this repo or from the dropdown menu in Helios (`Helios-Offline.html`)
3. open the file in your browser (broser in a browser haha).
4. go crazy!

alternativly alternativly:

1. copy and the entirerty of `Helios-Offline.html`, or copy `index.html`, `style.css`, and `script.js` seperartly
2. visit ANY online WYSIWYG HTML editor (Webmaker/CodeBeautify/OnlineHtmlEditor/Codepen/etc.)
3. paste and replace `<style>` and `<script>` tags where appropriate (not nessasary if you copied `Helios-Offline.html`
4. enjoy uncesored local browsing!

***Note: This last method will create a temporary Helios instance, and you will have to repeat these steps everytime you close or reset the tabs, unless you download the HTML**

alternativly alternativly alternativly:

1. click on the green code button in this repo
2. click on the codespaces tab
3. create a new codespace by clicking the "Create codespace on main" button
4. navagate to the terminal near the bottom and run `python3 -m http.server 8080`
5. click the "Make Public" option in the popup that shows up, or go to the Ports tab, right click on 8080, hover on "Port Visiblity" and click "Public"
6. click on the Forwarded Address in the Ports tab. it should look something like `https://<your-repo-name>-<random-id>.<your-username>.github.dev`
7. boom! use your temorary link for its full 30 minute lifetime!

***Note: To extend the life of your codespace link visit your profile settings, go to the Codespaces tab, and change the "Default idle timeout" time from 30 minutes to 240 minutes, which is the maximum time.**

## ***`Deploy This Project`***
Vercel:
 
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdinguschan-owo%2FHelios%2Ftree%2Fmain%2F)

## ***`Features`***

- open up to 23 tabs before it starts breaking (thats a lot!)
- search bar for searching
- basic navigation buttons (back, forwards, reload, home)
- settings page
- website caching
- about:blank and blob: cloaking
- clear all tabs and reset browser button (why would you want this you freak)

## ***`License`***

do whatever the you want with this code, its open sauce! just please PLEASE credit me, cause i worked hard on this :(

## ***`Compatibility`***

Helios works in the latest versions of:

- Chrome
- Firefox
- Tor Browser
- Edge
- Opera
- Brave
- Vivaldi

but does not work in:

- Safari

sorry Apple users.
   
## ***`𝚄𝚙𝚍𝚊𝚝𝚎 𝚂𝚌𝚑𝚎𝚍𝚞𝚕𝚎`***

fuck you there is no update schedule ill push updates whenever i fucking feel like it. i do promise to constantly update though, because i love you guys (litrally nobody) :33

## ***`Known Issues`***

NONE ITS PERFECT (submit a issue if you find one and ill fix it)
