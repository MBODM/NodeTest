function createHtml(title) {
    // The 'html' comment here is used by the vs code extension 'es6-string-html' to colorize our html.
    return /*html*/ `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>NodeTest</title>
                <style>
                    body {
                        font-family: Arial
                    }
                </style>
            </head>
            <body>
                <h1>${title}</h1>
                <p>To get some json content use "/json" as route in the url.</p>
                <a href="/json">Or you can simply click this link here.</a>
            </body>
        </html>
    `;
    // Info:
    // Of course we can also use Node.js to get this content by reading a html file. Or use
    // MVC packages like Express, Koa, Fastify and others. This is solely for demo purposes.
}

module.exports.create = createHtml