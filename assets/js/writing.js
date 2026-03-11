/* writing.js — Fetch recent arXiv papers (vanilla JS, no jQuery) */

function nameToAbbrev(name) {
    const parts = name.trim().split(/\s+/);
    const lastName = parts[parts.length - 1];
    let initials = '';
    for (let i = 0; i < parts.length - 1; i++) {
        initials += parts[i][0] + '. ';
    }
    return initials + lastName;
}

function setupWriting() {
    const container = document.getElementById('recent-papers');
    if (!container) return;

    const numPapers = 3;
    const url = 'https://export.arxiv.org/api/query?search_query=au:barclay_t+cat:astro-ph&start=0&max_results=100&sortBy=submittedDate';

    fetch(url)
        .then(function (response) {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(function (xmlText) {
            const parser = new DOMParser();
            const xml = parser.parseFromString(xmlText, 'application/xml');
            const entries = xml.querySelectorAll('entry');

            container.innerHTML = '';
            let count = 0;

            entries.forEach(function (entry) {
                if (count >= numPapers) return;

                const authors = entry.querySelectorAll('author name');
                if (authors.length === 0) return;

                // Check if "Barclay" is in the first 3 author positions
                let hasBarclay = false;
                for (let i = 0; i < Math.min(3, authors.length); i++) {
                    const lastName = authors[i].textContent.trim().split(/\s+/).pop();
                    if (lastName.toLowerCase() === 'barclay') {
                        hasBarclay = true;
                        break;
                    }
                }
                if (!hasBarclay) return;

                // Build author string
                let authorStr = '';
                const maxShow = 5;
                for (let i = 0; i < Math.min(maxShow, authors.length); i++) {
                    const abbrev = nameToAbbrev(authors[i].textContent);
                    if (i === 0) {
                        authorStr = abbrev;
                    } else {
                        authorStr += ', ' + abbrev;
                    }
                }
                if (authors.length > maxShow) {
                    authorStr += ' et al.';
                } else if (authors.length === 2) {
                    authorStr = nameToAbbrev(authors[0].textContent) + ' & ' + nameToAbbrev(authors[1].textContent);
                }

                const title = entry.querySelector('title').textContent.replace(/[\r\n]+/g, ' ').trim();
                const link = entry.querySelector('id').textContent.trim();
                const rawDate = entry.querySelector('published').textContent.trim();
                const dateParts = rawDate.split('T')[0].split('-');
                const dateStr = '(' + dateParts[1] + '/' + dateParts[0] + ')';

                const div = document.createElement('div');
                div.className = 'paper-entry';
                div.innerHTML =
                    '<span class="paper-date">' + dateStr + '</span>' +
                    '<span class="paper-authors">' + authorStr + '</span>' +
                    '<br/><a class="paper-title" href="' + link + '">' + title + '</a>';

                container.appendChild(div);
                count++;
            });

            if (count === 0) {
                container.innerHTML = '<p class="error">No recent papers found.</p>';
            }
        })
        .catch(function () {
            container.innerHTML = '<p class="error">Unable to retrieve paper list.</p>';
        });
}
