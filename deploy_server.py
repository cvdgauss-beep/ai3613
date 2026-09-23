# -*- coding: utf-8 -*-
"""
Static host for the Next.js static export (out/).
Rewrites extension-less paths so Next.js client-side navigation targets work:
    /en               -> /en.html
    /en/products      -> /en/products.html
    /en/about         -> /en/about.html
    /ar/products/bus-... -> /ar/products/bus-...html
A request for a real directory keeps default index.html behaviour.
"""
import http.server
import os
import socketserver

PORT = int(os.environ.get("PORT", "8080"))
ROOT = os.path.dirname(os.path.abspath(__file__))


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def translate_path(self, path):
        translated = super().translate_path(path)

        # Extension-less URL wins over a same-name directory (out/ has both
        # en.html and an en/ folder; /en must serve en.html, never a listing).
        html_candidate = translated + ".html"
        if os.path.isfile(html_candidate):
            return html_candidate

        if os.path.isfile(translated):
            return translated

        if os.path.isdir(translated):
            # Real directory with assets / index.html -> default behaviour.
            return translated

        return translated

    def end_headers(self):
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()


class ThreadingServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True


if __name__ == "__main__":
    with ThreadingServer(("0.0.0.0", PORT), Handler) as httpd:
        print(f"Serving {ROOT} on 0.0.0.0:{PORT}")
        httpd.serve_forever()
