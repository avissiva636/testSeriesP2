const cheerio = require('cheerio');

function simplifyTable(pastedHTML) {
    const $ = cheerio.load(pastedHTML);

    // Find and simplify table elements
    $('table').each((index, table) => {

        const tableAttributesToRemove = Object.keys(table.attribs);
        tableAttributesToRemove.forEach(attr => {
            $(table).removeAttr(attr);
        });

        // Add the desired class to the table
        $(table).addClass('table table-bordered');

        // Find tbody and remove its attributes
        $(table).find('tbody').each((index, tbody) => {
            const tbodyAttributesToRemove = Object.keys(tbody.attribs);
            tbodyAttributesToRemove.forEach(attr => {
                $(tbody).removeAttr(attr);
            });
        });

        // Iterate through each td and tr element
        $(table).find('tr').each((index, tr) => {
            // Remove all attributes from the tr            
            const trAttributesToRemove = Object.keys(tr.attribs);
            trAttributesToRemove.forEach(attr => {
                $(tr).removeAttr(attr);
            });

            $(tr).find('td').each((index, td) => {
                // Remove style from the td
                const tdAttributesToRemove = Object.keys(td.attribs);
                tdAttributesToRemove.forEach(attr => {
                    $(td).removeAttr(attr);
                });
                //check for span element
                if ($(td).children('span').length === 0) {
                    // Wrap the content of each td with a span
                    const content = $(td).html();
                    $(td).empty().append(`<span style="caret-color: rgb(68, 68, 68); color: rgb(68, 68, 68); font-family: &quot;Open Sans&quot;, serif;">${content}</span>`);
                }
                // const content = $(td).html();
                // $(td).empty().append(`<span>${content}</span>`);

            });
        });
    });

    // Get the simplified HTML
    const simplifiedHTML = $.html();

    return simplifiedHTML;
}

module.exports={simplifyTable};