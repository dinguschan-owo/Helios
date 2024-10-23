// Function to initialize tabs
function initializeTabs() {
  // Create the second tab
  const newTabIndex = tabs.length;
  const newTab = document.createElement('div');
  newTab.className = 'tabaa';
  newTab.innerHTML = `<span class="tab-nameaa">New Tab</span><i class="fas fa-times close-btnaa"></i>`;
  document.querySelector('.uptop-baraa').insertBefore(newTab, document.getElementById('add-tabaa'));

  const newContent = document.createElement('div');
  newContent.className = 'contentaa tab-contentaa';
  newContent.innerHTML = tabs[0].content.replace(/\${currentTabIndex}/g, newTabIndex);
  document.body.appendChild(newContent);

  tabs.push({ url: 'helios://start', content: newContent.innerHTML });

  // Close the original tab
  const originalTab = document.querySelector('.tabaa');
  originalTab.remove();
  document.querySelectorAll('.tab-contentaa')[0].remove();
  tabs.shift();

  // Update active tab
  updateActiveTab(newTab, newContent, 0);
  addCloseButtonFunctionality(newTab);
  addTabClickListener(newTab, newContent, 0);

  // Update currentTabIndex
  currentTabIndex = 0;
}

// Call initializeTabs when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeTabs);
      
let currentTabIndex = 0;
const tabs = [{
    url: 'helios://start',
    content: `
        <h23>Helios</h23>
        <h21>𝚖𝚊𝚍𝚎 𝚋𝚢 𝚍𝚒𝚗𝚐𝚞𝚜𝚌𝚑𝚊𝚗!</h21>
        <div class="search-baraa">
          <div class="search-containeraa">
  <div class="search-engine-dropdownaa" onclick="toggleDropdown(${currentTabIndex})">
    <img src="https://www.google.com/favicon.ico" alt="Google" id="selected-engine-${currentTabIndex}">
  </div>
  <div class="dropdown-contentaa" id="engineDropdown-${currentTabIndex}">
    <div class="status-messageaa" id="statusMessage-${currentTabIndex}">Searching with Google</div>
    <a href="#" onclick="selectEngine('https://4get.ca/favicon.ico', '4get', ${currentTabIndex})" data-engine="4get">
      <img src="https://4get.ca/favicon.ico" alt="4get"> -<s>Search with 4get</s>-
    </a>
    <a href="#" onclick="selectEngine('https://www.google.com/favicon.ico', 'Google', ${currentTabIndex})" data-engine="Google">
      <img src="https://www.google.com/favicon.ico" alt="Google"> &nbspSearch with Google
    </a>
    <a href="#" onclick="selectEngine('https://www.bing.com/favicon.ico', 'Bing', ${currentTabIndex})" data-engine="Bing">
      <img src="https://www.bing.com/favicon.ico" alt="Bing"> &nbspSearch with Bing
    </a>
    <a href="#" onclick="selectEngine('https://duckduckgo.com/favicon.ico', 'DuckDuckGo', ${currentTabIndex})" data-engine="DuckDuckGo">
      <img src="https://duckduckgo.com/favicon.ico" alt="DuckDuckGo"> -<s>Search with DuckDuckGo</s>-
    </a>
  </div>
</div>
            <input type="text" placeholder="Search the web or type a URL" id="search-input-${currentTabIndex}">
            <i class="fas fa-search search-iconaa"></i>`
}];

const trustedSchemes = ['helios://', 'https://'];

document.getElementById('add-tabaa').addEventListener('click', function () {
    const newTabIndex = tabs.length;
    const newTab = document.createElement('div');
    newTab.className = 'tabaa';
    newTab.innerHTML = `<span class="tab-nameaa">New Tab</span><i class="fas fa-times close-btnaa"></i>`;
    document.querySelector('.uptop-baraa').insertBefore(newTab, this);

    const newContent = document.createElement('div');
    newContent.className = 'contentaa tab-contentaa';
    newContent.innerHTML = tabs[0].content.replace(/\${currentTabIndex}/g, newTabIndex);
    document.body.appendChild(newContent);

    tabs.push({ url: 'helios://start', content: newContent.innerHTML });

    updateActiveTab(newTab, newContent, newTabIndex);
    addCloseButtonFunctionality(newTab);
    addTabClickListener(newTab, newContent, newTabIndex);
});

document.querySelectorAll('.tabaa').forEach((tab, index) => {
    addCloseButtonFunctionality(tab);
    addTabClickListener(tab, document.querySelectorAll('.tab-contentaa')[index], index);
});

function addCloseButtonFunctionality(tab) {
    tab.querySelector('.close-btnaa').addEventListener('click', function () {
        const index = Array.from(document.querySelectorAll('.tabaa')).indexOf(tab);
        tab.remove();
        document.querySelectorAll('.tab-contentaa')[index].remove();
        tabs.splice(index, 1);
        if (index === currentTabIndex) {
            const newActiveTab = document.querySelectorAll('.tabaa')[index] || document.querySelectorAll('.tabaa')[index - 1];
            if (newActiveTab) {
                newActiveTab.click();
            }
        }
    });
}

function addTabClickListener(tab, content, index) {
    tab.addEventListener('click', function () {
        updateActiveTab(tab, content, index);
    });
}

function updateActiveTab(tab, content, index) {
    document.querySelectorAll('.tab-contentaa').forEach(content => {
        content.classList.remove('activeaa');
    });

    document.querySelectorAll('.tabaa').forEach(tab => {
        tab.classList.remove('activeaa');
    });

    tab.classList.add('activeaa');
    content.classList.add('activeaa');

    currentTabIndex = index;
    const url = tabs[index].url;
    document.getElementById('url-baraa').value = url;

    updateTabContent(url, content, tab);
    updateLockIcon(url);
    updateSpecialDivs(url);
}

function updateTabContent(url, content, tab) {
    localStorage.setItem(`tab_${currentTabIndex}`, url);
    sessionStorage.setItem(`tab_${currentTabIndex}`, url);
  
    if (url === 'helios://start') {
        content.innerHTML = `
        <h23>Helios</h23>
        <h21>𝚖𝚊𝚍𝚎 𝚋𝚢 𝚍𝚒𝚗𝚐𝚞𝚜𝚌𝚑𝚊𝚗!</h21>
        <div class="search-baraa">
          <div class="search-containeraa">
  <div class="search-engine-dropdownaa" onclick="toggleDropdown(${currentTabIndex})">
    <img src="https://www.google.com/favicon.ico" alt="Google" id="selected-engine-${currentTabIndex}">
  </div>
  <div class="dropdown-contentaa" id="engineDropdown-${currentTabIndex}">
    <div class="status-messageaa" id="statusMessage-${currentTabIndex}">Searching with Google</div>
    <a href="#" onclick="selectEngine('https://4get.ca/favicon.ico', '4get', ${currentTabIndex})" data-engine="4get">
      <img src="https://4get.ca/favicon.ico" alt="4get"> -<s>Search with 4get</s>-
    </a>
    <a href="#" onclick="selectEngine('https://www.google.com/favicon.ico', 'Google', ${currentTabIndex})" data-engine="Google">
      <img src="https://www.google.com/favicon.ico" alt="Google"> &nbspSearch with Google
    </a>
    <a href="#" onclick="selectEngine('https://www.bing.com/favicon.ico', 'Bing', ${currentTabIndex})" data-engine="Bing">
      <img src="https://www.bing.com/favicon.ico" alt="Bing"> &nbspSearch with Bing
    </a>
    <a href="#" onclick="selectEngine('https://duckduckgo.com/favicon.ico', 'DuckDuckGo', ${currentTabIndex})" data-engine="DuckDuckGo">
      <img src="https://duckduckgo.com/favicon.ico" alt="DuckDuckGo"> -<s>Search with DuckDuckGo</s>-
    </a>
  </div>
</div>
            <input type="text" placeholder="Search the web or type a URL" id="search-input-${currentTabIndex}">
            <i class="fas fa-search search-iconaa"></i>`;
        
        tab.querySelector('.tab-nameaa').textContent = 'New Tab';
        tabs[currentTabIndex].content = content.innerHTML;
        tabs[currentTabIndex].url = url;

        document.getElementById(`search-input-${currentTabIndex}`).addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                const enteredUrl = this.value;
                if (enteredUrl) {
                    updateTabContent(enteredUrl, content, tab);
                }
            }
        });

    } else if (url === 'helios://settings') {
        content.innerHTML = `
        <h20>Helios Settings</h20><br>
        <div class="settings-gridaa">
            <div class="settings-blockaa">   <h24>&nbspHistory&nbsp</h24>             <button id="clear-history-${currentTabIndex}" class="clear-buttonaa">Clear History</button></div>
            <div class="settings-blockaa"><h24>Cloaking</h24>    <button class="cloak-buttonaa" onclick="openInAboutBlank(${currentTabIndex})">Open in about:blank</button>
    <button class="cloak-buttonaa" onclick="openInBlob(${currentTabIndex})">Open in blob:</button></div>
            <div class="settings-blockaa"><h24>&nbspSilly&nbsp</h24>    <button id="show-content-button">Show Content</button>
</div>
            <div class="settings-blockaa">Block 4 Info</div>
            <div class="settings-blockaa">Block 5 Info</div>
            <div class="settings-blockaa">Block 6 Info</div>
            <div class="clear-blockaa">

            </div>
        </div>
        <div id="clear-message-${currentTabIndex}" class="clear-messageaa"></div>
        `;
        tab.querySelector('.tab-nameaa').textContent = 'Settings';
        tabs[currentTabIndex].content = content.innerHTML;
        tabs[currentTabIndex].url = url;

        document.getElementById(`clear-history-${currentTabIndex}`).addEventListener('click', function() {
            localStorage.removeItem(`tab_${currentTabIndex}`);
            sessionStorage.removeItem(`tab_${currentTabIndex}`);
            const messageDiv = document.getElementById(`clear-message-${currentTabIndex}`);
            messageDiv.textContent = 'History has been cleared for this tab!';
            messageDiv.style.display = 'block';
            
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 3000);
        });
    } else {
        fetchExternalContent(url, content, currentTabIndex);
    }

    document.getElementById('url-baraa').value = url;
    
    tabs[currentTabIndex].content = content.innerHTML;
    tabs[currentTabIndex].url = url;

    updateLockIcon(url);
    updateSpecialDivs(url);
}
async function fetchExternalContent(url, content, tabIndex) {
    const proxies = [
        `https://api.codetabs.com/v1/proxy?quest=${url}`,
        `https://api.codetabs.com/v1/tmp/?quest=${url}`,
        `https://corsproxy.io/?${url}`,
        `https://api.allorigins.win/raw?url=${url}`
    ];

    const timeout = 10000;

    async function fetchWithProxy(proxy) {
        return new Promise((resolve, reject) => {
            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), timeout);

            fetch(proxy, { signal: controller.signal })
                .then(response => {
                    clearTimeout(id);
                    if (!response.ok) {
                        reject(`Failed to fetch content from ${proxy}: ${response.statusText}`);
                    }
                    return response.text();
                })
                .then(resolve)
                .catch(reject);
        });
    }

    let htmlText;
    for (const proxy of proxies) {
        try {
            htmlText = await fetchWithProxy(proxy);
            break;
        } catch (error) {
            console.error(`Error with proxy ${proxy}: ${error}`);
        }
    }

    if (!htmlText) {
        console.error('Failed to fetch content from all proxies');
        return;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    const title = doc.title;
    const tab = document.querySelectorAll('.tabaa')[tabIndex];
    if (tab) {
        tab.querySelector('.tab-nameaa').textContent = title || 'Untitled';
    }

    // Create a new function to handle resource fetching
async function fetchResource(url) {
  for (const proxy of proxies) {
    try {
      const response = await fetch(`${proxy}${url}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch resource ${url}`);
      }
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('text/css')) {
        const cssText = await response.text();
        return modifyCss(cssText);
      } else {
        return await response.blob();
      }
    } catch (error) {
      console.error(`Error fetching resource with proxy ${proxy}: ${error}`);
    }
  }
  console.error(`Failed to fetch resource ${url} with all proxies`);
  return null;
}

    // Modify images, scripts, and stylesheets to use proxied URLs
    const resources = doc.querySelectorAll('img, script, link[rel="stylesheet"]');
    for (const resource of resources) {
        const originalSrc = resource.src || resource.href;
        if (originalSrc) {
            const blob = await fetchResource(originalSrc);
            if (blob) {
                const blobUrl = URL.createObjectURL(blob);
                if (resource.tagName === 'IMG') {
                    resource.src = blobUrl;
                } else if (resource.tagName === 'SCRIPT') {
                    resource.src = blobUrl;
                } else if (resource.tagName === 'LINK') {
                    resource.href = blobUrl;
                }
            }
        }
    }

    content.innerHTML = doc.documentElement.outerHTML;

    // Rewrite relative URLs to absolute URLs
    const baseUrl = new URL(url);
    content.querySelectorAll('a[href]').forEach(a => {
        try {
            a.href = new URL(a.getAttribute('href'), baseUrl).href;
        } catch (e) {
            console.error('Error rewriting URL:', e);
        }
    });

    tabs[tabIndex].content = content.innerHTML;
    tabs[tabIndex].url = url;
}
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('tab_')) {
            const url = localStorage.getItem(key);
            // Logic to create a new tab with this URL
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const urlBar = document.getElementById('url-baraa');
    const content = document.getElementById('contentaa');

    urlBar.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const url = urlBar.value;
            fetchExternalContent(url, content, currentTabIndex);
        }
    });
});



async function fetchExternalContent(url, content, tabIndex) {
    const proxies = [
        `https://api.codetabs.com/v1/proxy?quest=${url}`,
        `https://api.codetabs.com/v1/tmp/?quest=${url}`,
        `https://corsproxy.io/?${url}`,
        `https://api.allorigins.win/raw?url=${url}`
    ];

    const timeout = 10000;

    async function fetchWithProxy(proxy) {
        return new Promise((resolve, reject) => {
            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), timeout);

            fetch(proxy, { signal: controller.signal })
                .then(response => {
                    clearTimeout(id);
                    if (!response.ok) {
                        reject(`Failed to fetch content from ${proxy}: ${response.statusText}`);
                    }
                    return response.text();
                })
                .then(resolve)
                .catch(reject);
        });
    }

    let htmlText;
    for (const proxy of proxies) {
        try {
            htmlText = await fetchWithProxy(proxy);
            break;
        } catch (error) {
            console.error(`Error with proxy ${proxy}: ${error}`);
        }
    }

    if (!htmlText) {
        console.error('Failed to fetch content from all proxies');
        return;
    }
  
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    const title = doc.title;
    const tab = document.querySelectorAll('.tabaa')[tabIndex];
    if (tab) {
        tab.querySelector('.tab-nameaa').textContent = title || 'Untitled';
    }

  async function fetchAndInjectResources(html, tabIndex) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const resources = [];
        const cssLinks = doc.querySelectorAll('link[rel="stylesheet"]');
        const jsScripts = doc.querySelectorAll('script[src]');
        const images = doc.querySelectorAll('img');
        const videos = doc.querySelectorAll('video');
        const audios = doc.querySelectorAll('audio');

        cssLinks.forEach(link => resources.push(link.href));
        jsScripts.forEach(script => resources.push(script.src));
        images.forEach(img => resources.push(img.src));
        videos.forEach(video => {
            if (video.src) resources.push(video.src);
            video.querySelectorAll('source').forEach(source => resources.push(source.src));
        });
        audios.forEach(audio => {
            if (audio.src) resources.push(audio.src);
            audio.querySelectorAll('source').forEach(source => resources.push(source.src));
        });

        const fetchResource = async (url) => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Failed to fetch resource ${url}`);
                }
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('text')) {
                    return await response.text();
                } else {
                    return await response.blob();
                }
            } catch (error) {
                console.error(error);
                return null;
            }
        };

        const promises = resources.map(fetchResource);
        const results = await Promise.all(promises);

        const shadowContainer = document.createElement('div');
        shadowContainer.style.position = 'relative';
        shadowContainer.style.width = (content.clientWidth - 0) + 'px';
        shadowContainer.style.height = (content.clientHeight + 100) + 'px';
        shadowContainer.style.overflow = 'auto';
        shadowContainer.style.border = 'none';

        const shadowRoot = shadowContainer.attachShadow({ mode: 'open' });
        const defaultStyle = document.createElement('style');
        defaultStyle.textContent = `
            :host {
                all: initial;
                background-color: #fff !important;
            }
        `;
        shadowRoot.appendChild(defaultStyle);
        shadowRoot.innerHTML += html;

        const fixRelativeURLs = (baseUrl) => {
            const elements = shadowRoot.querySelectorAll('a[href], link[href], script[src], img[src], video[src], audio[src], source[src]');

            elements.forEach(element => {
                const attributeName = element.hasAttribute('href') ? 'href' : 'src';
                const url = new URL(element.getAttribute(attributeName), baseUrl);
                element.setAttribute(attributeName, url.href);
            });
        };

        results.forEach((result, index) => {
            const url = resources[index];
            if (result instanceof Blob) {
                const objectURL = URL.createObjectURL(result);
                const elements = shadowRoot.querySelectorAll(`[src="${url}"]`);
                elements.forEach(element => element.src = objectURL);
            } else if (typeof result === 'string') {
if (url.endsWith('.css')) {
  const style = document.createElement('style');
  style.textContent = result; // result is already modified CSS
  shadowRoot.appendChild(style);
} else if (url.endsWith('.js')) {
                    const script = document.createElement('script');
                    script.textContent = result;
                    shadowRoot.appendChild(script);
                }
            }
        });

        // Execute inline scripts
        shadowRoot.querySelectorAll('script:not([src])').forEach(script => {
            const newScript = document.createElement('script');
            newScript.textContent = script.textContent;
            shadowRoot.appendChild(newScript);
        });

        shadowRoot.querySelectorAll('style').forEach(style => {
            style.textContent = `
                :host {
                    all: initial;
                }
                ${style.textContent}
            `;
        });

        const baseUrl = new URL(html.match(/<base href="([^"]+)"/)?.[1] || '', url).href;
        fixRelativeURLs(baseUrl);

        shadowRoot.querySelectorAll('a').forEach(anchor => {
            anchor.addEventListener('click', (event) => {
                event.preventDefault();
                const newUrl = anchor.href;
                updateTabContent(newUrl, content, tab);
            });
        });

        return shadowContainer;
    }

    const newShadowContainer = await fetchAndInjectResources(htmlText, tabIndex);
    content.innerHTML = '';
    content.appendChild(newShadowContainer);

    requestAnimationFrame(() => {
        tabs[tabIndex].content = content.innerHTML;
        tabs[tabIndex].url = url;
    });
}
function updateLockIcon(url) {
    const lockIcon = document.querySelector('.lock-iconaa');
    const isLocked = trustedSchemes.some(scheme => url.startsWith(scheme));
    if (isLocked) {
        lockIcon.classList.remove('fa-unlock');
        lockIcon.classList.add('fa-lock');
        lockIcon.style.color = '';
    } else {
        lockIcon.classList.remove('fa-lock');
        lockIcon.classList.add('fa-unlock');
        lockIcon.style.color = '#ffff80';
    }
}

function modifyCss(cssText) {
  // Regular expression to match z-index declarations
  const zIndexRegex = /z-index\s*:\s*2147483647\s*;/g;

  // Replace z-index: 2147483647 with z-index: 2147483643
  const modifiedCss = cssText.replace(zIndexRegex, 'z-index: 2147483643;');

  return modifiedCss;
}

function updateSpecialDivs(url) {
    const isHeliosURL = url.startsWith('helios://');
    const officialC = document.querySelector('.official-caa');
    const official = document.querySelector('.officialaa');

    if (officialC) {
        officialC.style.backgroundColor = isHeliosURL ? '' : '#52565b';
    }
    if (official) {
        official.style.backgroundColor = isHeliosURL ? '' : '#52565b';
        official.style.color = isHeliosURL ? '' : '#52565b';
    }
}

document.getElementById('url-baraa').addEventListener('input', function () {
    const url = this.value;
    tabs[currentTabIndex].url = url;
    updateLockIcon(url);
    updateSpecialDivs(url);
});

document.getElementById('url-baraa').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let url = e.target.value.trim();
        
        const hasValidScheme = trustedSchemes.some(scheme => url.startsWith(scheme));
        
        if (!hasValidScheme) {
            url = 'https://' + url;
        }

        const currentContent = document.querySelectorAll('.tab-contentaa')[currentTabIndex];
        const currentTab = document.querySelectorAll('.tabaa')[currentTabIndex];

        tabs[currentTabIndex].url = url;
        document.getElementById('url-baraa').value = url;
        updateTabContent(url, currentContent, currentTab);
        updateLockIcon(url);
        updateSpecialDivs(url);
    }
});

document.querySelector('.home-buttonaa').addEventListener('click', function () {
    changeTabContent('helios://start');
});

document.querySelector('.settings-buttonaa').addEventListener('click', function () {
    changeTabContent('helios://settings');
});

function changeTabContent(url) {
    const currentTab = document.querySelectorAll('.tabaa')[currentTabIndex];
    const currentContent = document.querySelectorAll('.tab-contentaa')[currentTabIndex];

    if (currentTab && currentContent) {
        document.getElementById('url-baraa').value = url;

        tabs[currentTabIndex].url = url;
        updateTabContent(url, currentContent, currentTab);

        const event = new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            key: 'Enter',
            code: 'Enter'
        });
        document.getElementById('url-baraa').dispatchEvent(event);
    }
}

    function openInAboutBlank() {
      const newWindow = window.open('about:blank', '_blank');
      newWindow.document.write(document.documentElement.outerHTML);
    }

    function openInBlob() {
      const html = document.documentElement.outerHTML;
      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    }

function toggleDropdown(tabIndex) {
    var dropdown = document.getElementById(`engineDropdown-${tabIndex}`);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    updateDropdownVisibility(tabIndex);
}

function selectEngine(iconSrc, engineName, tabIndex) {
    document.getElementById(`selected-engine-${tabIndex}`).src = iconSrc;
    document.getElementById(`selected-engine-${tabIndex}`).alt = engineName;
    document.getElementById(`statusMessage-${tabIndex}`).textContent = "Searching with " + engineName;
    toggleDropdown(tabIndex);
}

function updateDropdownVisibility(tabIndex) {
    var selectedEngine = document.getElementById(`selected-engine-${tabIndex}`).alt;
    var options = document.querySelectorAll(`#engineDropdown-${tabIndex} a`);
    options.forEach(function(option) {
        if (option.getAttribute("data-engine") === selectedEngine) {
            option.style.display = "none";
        } else {
            option.style.display = "flex";
        }
    });
}

window.onclick = function(event) {
    if (!event.target.matches('.search-engine-dropdownaa') && !event.target.matches('.search-engine-dropdownaa img')) {
        var dropdowns = document.querySelectorAll('.dropdown-contentaa');
        dropdowns.forEach(function(dropdown) {
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    tabs.forEach((tab, index) => {
        document.getElementById(`statusMessage-${index}`).textContent = "Searching with Google";
        updateDropdownVisibility(index);
    });
});
      
document.getElementById('url-baraa').addEventListener('input', function(e) {
    this.value = this.value.toLowerCase();
});
      
      // Function to check if a string is a valid URL
function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Function to handle search or URL navigation
function handleSearchOrNavigation(input, tabIndex) {
    let url = input.trim();
    
    // Check if it's a valid URL
    if (isValidURL(url) || /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(url)) {
        if (!/^https?:\/\//i.test(url)) {
            url = 'https://' + url;
        }
        updateTabContent(url, document.querySelectorAll('.tab-contentaa')[tabIndex], document.querySelectorAll('.tabaa')[tabIndex]);
    } else {
        // If not a URL, perform a search
        const selectedEngine = document.getElementById(`selected-engine-${tabIndex}`).alt;
        let searchUrl;
        switch(selectedEngine) {
            case '4get':
                searchUrl = `https://4get.ca/web?q=${encodeURIComponent(input)}`;
                break;
            case 'Google':
                searchUrl = `https://www.google.com/search?q=${encodeURIComponent(input)}`;
                break;
            case 'Bing':
                searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(input)}`;
                break;
            case 'DuckDuckGo':
                searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(input)}`;
                break;
            default:
                searchUrl = `https://www.google.com/search?q=${encodeURIComponent(input)}`;
        }
        updateTabContent(searchUrl, document.querySelectorAll('.tab-contentaa')[tabIndex], document.querySelectorAll('.tabaa')[tabIndex]);
    }
}

// Add event listener for the search input in each tab
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('search-iconaa')) {
        const tabIndex = parseInt(event.target.closest('.search-baraa').querySelector('input').id.split('-')[2]);
        const input = document.getElementById(`search-input-${tabIndex}`).value;
        handleSearchOrNavigation(input, tabIndex);
    }
});

// Add event listener for the Enter key in search inputs
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && event.target.id.startsWith('search-input-')) {
        const tabIndex = parseInt(event.target.id.split('-')[2]);
        handleSearchOrNavigation(event.target.value, tabIndex);
    }
});
      
      document.querySelector('.reload-buttonaa').addEventListener('click', function() {
    const currentContent = document.querySelectorAll('.tab-contentaa')[currentTabIndex];
    const currentTab = document.querySelectorAll('.tabaa')[currentTabIndex];
    const currentUrl = tabs[currentTabIndex].url;
    
    updateTabContent(currentUrl, currentContent, currentTab);
});
      
      // Initialize history storage
const tabHistory = new Map();

// Function to get or create history for a tab
function getTabHistory(tabIndex) {
    if (!tabHistory.has(tabIndex)) {
        tabHistory.set(tabIndex, {
            history: [],
            currentIndex: -1
        });
    }
    return tabHistory.get(tabIndex);
}

// Function to update history when navigating to a new URL
function updateHistory(tabIndex, url) {
    const history = getTabHistory(tabIndex);
    history.currentIndex++;
    history.history = history.history.slice(0, history.currentIndex);
    history.history.push(url);
}

// Modify updateTabContent to update history
const originalUpdateTabContent = updateTabContent;
updateTabContent = function(url, content, tab) {
    const tabIndex = Array.from(document.querySelectorAll('.tabaa')).indexOf(tab);
    updateHistory(tabIndex, url);
    originalUpdateTabContent(url, content, tab);
};

// Back button functionality
document.querySelector('.backward-buttonaa').addEventListener('click', function() {
    const history = getTabHistory(currentTabIndex);
    if (history.currentIndex > 0) {
        history.currentIndex--;
        const previousUrl = history.history[history.currentIndex];
        const currentContent = document.querySelectorAll('.tab-contentaa')[currentTabIndex];
        const currentTab = document.querySelectorAll('.tabaa')[currentTabIndex];
        originalUpdateTabContent(previousUrl, currentContent, currentTab);
    }
});

// Forward button functionality
document.querySelector('.forward-buttonaa').addEventListener('click', function() {
    const history = getTabHistory(currentTabIndex);
    if (history.currentIndex < history.history.length - 1) {
        history.currentIndex++;
        const nextUrl = history.history[history.currentIndex];
        const currentContent = document.querySelectorAll('.tab-contentaa')[currentTabIndex];
        const currentTab = document.querySelectorAll('.tabaa')[currentTabIndex];
        originalUpdateTabContent(nextUrl, currentContent, currentTab);
    }
});

// Initialize history for existing tabs
document.querySelectorAll('.tabaa').forEach((tab, index) => {
    const url = tab.querySelector('.tab-nameaa').textContent === 'New Tab' ? 'helios://start' : document.getElementById('url-baraa').value;
    updateHistory(index, url);
});
      
      function closeTab(tab) {
    const index = Array.from(document.querySelectorAll('.tabaa')).indexOf(tab);
    tab.remove();
    document.querySelectorAll('.tab-contentaa')[index].remove();
    tabs.splice(index, 1);
    tabHistory.delete(index);

    // If the closed tab was the active one, switch to another tab
    if (index === currentTabIndex) {
        // Try to activate the tab to the left
        if (index > 0) {
            currentTabIndex = index - 1;
        } 
        // If there's no tab to the left, try to activate the first tab
        else if (tabs.length > 0) {
            currentTabIndex = 0;
        } 
        // If there are no tabs left, create a new one
        else {
            document.getElementById('add-tabaa').click();
            return;
        }

        const newActiveTab = document.querySelectorAll('.tabaa')[currentTabIndex];
        const newActiveContent = document.querySelectorAll('.tab-contentaa')[currentTabIndex];
        updateActiveTab(newActiveTab, newActiveContent, currentTabIndex);
    } 
    // If a tab to the left of the active tab was closed, update the currentTabIndex
    else if (index < currentTabIndex) {
        currentTabIndex--;
    }
}

// Replace the existing close button functionality with this new function
function addCloseButtonFunctionality(tab) {
    tab.querySelector('.close-btnaa').addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the tab from being activated when closing
        closeTab(tab);
    });
}

// Update existing tabs with the new close functionality
document.querySelectorAll('.tabaa').forEach(tab => {
    addCloseButtonFunctionality(tab);
});
      
      // Function to handle the square button click (browser reset)
function handleSquareButtonClick() {
    // Close all tabs except the first one
    const tabs = document.querySelectorAll('.tabaa');
    for (let i = tabs.length - 1; i > 0; i--) {
        closeTab(tabs[i]);
    }

    // Reset the first tab to initial state
    const firstTab = tabs[0];
    const firstTabContent = document.querySelectorAll('.tab-contentaa')[0];
    
    // Update tab name
    firstTab.querySelector('.tab-nameaa').textContent = 'New Tab';
    
    // Reset URL bar
    document.getElementById('url-baraa').value = 'helios://start';
    
    // Reset tab content
    updateTabContent('helios://start', firstTabContent, firstTab);
    
    // Reset tab history
    const history = getTabHistory(0);
    history.history = ['helios://start'];
    history.currentIndex = 0;
    
    // Update active tab
    updateActiveTab(firstTab, firstTabContent, 0);
}

// Add the square button to the DOM
const squareButton = document.createElement('div');
squareButton.className = 'square-buttonaa';
squareButton.id = 'square-buttonaa';
squareButton.textContent = '×';
squareButton.title = 'Reset Browser';

// Insert the square button before the first tab
const topBar = document.querySelector('.uptop-baraa');
topBar.insertBefore(squareButton, topBar.firstChild);

// Add event listener to the square button
squareButton.addEventListener('click', handleSquareButtonClick);

// Add CSS for the square button
const style = document.createElement('style');
style.textContent = `
    .square-buttonaa {
        margin-top: 1px;
        height: 32px;
        padding-top: 2px;
        padding-right: 7px;
        padding-left: 7px;
        background-color: #ff6161;
        color: #fff;
        font-align: center;
        font-weight: 500;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 36px;
        cursor: pointer;
        margin-right: 9px;
        transition: background-color 0.3s;
        user-select: none;
        margin-bottom: 1.02px;
        margin-left: -2px;
    }

    .square-buttonaa:hover {
        background-color: #ff4747;
    }
`;
document.head.appendChild(style);

        function toggleFullscreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        }
