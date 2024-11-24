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

Now that we know what a web proxy is, lets take a look at Helios. when you make a request to a website with Helios, Helios doesn't use your web browsers functionality to do that. instead, it sends a fetch() request for the cource code of website in question using Javascript, cutting out your actual browser's rendering software entirely and making your requests, and therfore web traffic, invisible. nothing affiliated with your actual browser or even device can see these requests, including extensions and built in monitering software. this is awesome, except for the fact websites often dont like humoring fetch() requests due to security concerns like abuse, spam, and scraping. to prevent such activities, most modern websites will enforce the same-origin policy (SOP), which restricts requests made from a different domain, protocol, or port than the origin of the page. what this means is without a valid header that tells the website that you come from the same server, domain, or port as the website it will not let you view the site. 

this is where CORS (Cross-Origin Resource Sharing) comes into play. CORS allows requests, whethere it be Javascript or browser users to view the website, without coming from the same source as the website by specifing how servers can allow resources to be shared across domains. however, websites often don't set valid CORS headers for all domains (for good reasons, like the ones mentioned earlier), leaving tools like Helios unable to fetch the data directly. to bypass these restrictions, Helios can route your requests through a CORS proxy. whats a CORS proxy? glad you asked. heres how a CORS proxy works:
\
\
![image](https://github.com/user-attachments/assets/1f0f9c99-c3b8-47be-a59c-5f3c0e558ebf)

Lets break it down (2).

1.  the client (you) sends a Javascript fetch() request through Helios to the CORS server instead of straight to the target server, because the fetch() request will be blocked by the reiciving servers due to it not having a valid CORS header.
2.  The CORS proxy server acts as an intermediary for your request. it modifies your request by appending a valid CORS header to your request, transforming your Javascript bot request into what appears as a legitimate client from the server's perspective.
3.  The CORS proxy server sends off this newly masked request to the target server, which gets tricked by the appended CORS header and gives up and sends back its source code to the CORS proxy.
4.  the CORS proxy returns your source code laden request back to Helios to assemble and display for your browsing enjoyment.

Wait a minute. Those two seem excatly the same? whats the difference? Lets break it down. Again.

A traditional web proxy acts as an intermediary for your traffic, relaying your requests to a target server and then sending the response back to you. However, the proxy server **can** see and log everything that goes through it, including sensitive information like login credentials, personal data, and search history (yikes!). this is a potential privacy risk, as many proxies that are advertised to be free for the user will track your browsing behavior to store amd sell for cash to keep their services running. this is obviously not good at all. How is a CORS proxy different? it isnt, other than the fact that most CORS proxies (inludign the ones Helios uses) must adhere to strict regulations to protect user privacy. this includes being secured with SSL (ensuring encrypted data transmission) and following a no-logging policy, meaning your requests aren't stored or sold. i checked to make sure Helio's DO abide by these rules. i dont trust them any more than you do. However, Helios takes it a step further — encrypting your requests before they even hit the proxy. This adds an extra layer of protection, ensuring that even if someone tries to snoop on the proxy itself, your data stays safe. Helios also bypasses your browser's default networking mechanisms and uses JavaScript's fetch() function to make the requests, meaning the CORS and target servers never sees your actual browser, user agent, or any other browser info — it only interacts with the fetch() request, which makes your actual browsing activity invisible to the target server and browser (not the CORS server however, but again, strict user privacy regulations and built in encryption. 

Im not telling you to use Helios overy anything else, but dont trust any shifty ass Networks on the internet named after random objects that promise free proxy use. *cough cough, * titanium. theres no such thing as a free lunch (or proxy), so keep your info safe.
