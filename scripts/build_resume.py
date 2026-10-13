#!/usr/bin/env python3
# Append an ANSI-art resume as a trailing HTML comment, so `curl -L shahdev.me`
# in a terminal shows a colored resume while browsers render the page as normal.
# Idempotent: strips any previously-appended block (everything after </html>).
import sys, re

path = sys.argv[1]
src = open(path, "r", encoding="utf-8").read()

# Keep only up to and including the first </html>
m = re.search(r"</html>", src)
assert m, "no </html> found"
base = src[:m.end()] + "\n"

E = "\x1b"
def sgr(c): return E + "[" + c + "m"
R   = sgr("0")        # reset
B   = sgr("1")        # bold
ACC = sgr("38;5;43")  # teal/green accent
WHT = sgr("1;38;5;255")
DIM = sgr("38;5;245")
FNT = sgr("38;5;240")

def link(url, text):   # OSC-8 hyperlink; degrades to plain text where unsupported
    return E + "]8;;" + url + E + "\\" + text + E + "]8;;" + E + "\\"

def item(name, desc, w=16):
    return "    " + ACC + "› " + R + WHT + name.ljust(w) + R + DIM + "· " + desc + R

def lrow(label, val, url):
    return "    " + DIM + label.ljust(11) + R + ACC + link(url, val) + R

L = []
a = L.append
a("")
a("  " + ACC + "▌ " + WHT + "DEV SHAH" + R)
a("  " + ACC + "▌ " + DIM + "sophomore · UIUC · systems & networking" + R)
a("  " + FNT + "─" * 60 + R)
a("")
a("  " + B + ACC + "NOW — RESEARCH" + R)
a(item("eBPF / XDP LB", "kernel packet steering, Maglev hashing  (wip)"))
a(item("HTTP server", "from scratch, in C — the whole stack  (wip)"))
a("")
a("  " + B + ACC + "PREVIOUSLY BUILT" + R)
a(item("Unlimited SAT", "SAT-prep platform, reached paying users"))
a(item("OpenFix", "agentic GitHub issue resolver"))
a(item("Lofi-Study", "productivity site built around low-fidelity sound"))
a(item("Bhojan", "an AI calorie tracker"))
a("")
a("  " + B + ACC + "ELSEWHERE" + R)
a("    " + DIM + "1st " + R + "AMD AI Design Competition   " + DIM + "2nd " + R + "Fall CTF 2026   " + DIM + "chess " + R + "~1800 Elo")
a("")
a("  " + B + ACC + "LINKS" + R)
a(lrow("email", "devshah3@illinois.edu", "mailto:devshah3@illinois.edu"))
a(lrow("github", "github.com/coderustypro", "https://github.com/coderustypro"))
a(lrow("x", "x.com/devshahthinks", "https://x.com/devshahthinks"))
a(lrow("linkedin", "linkedin.com/in/dev10shah", "https://www.linkedin.com/in/dev10shah/"))
a("")
a("  " + FNT + "you ran `curl` on a portfolio — the same bytes are a web page." + R)
a("  " + FNT + "open " + R + ACC + "https://shahdev.me" + R + FNT + " to watch it report its own delivery." + R)
a("")

resume = "\n".join(L)

# Clear screen + scrollback + home, so the HTML curl already dumped is wiped,
# then print the resume on a clean screen. Conceal the closing --> on exit.
CLEAR = E + "[2J" + E + "[3J" + E + "[H"
block = "<!--" + CLEAR + resume + R + "\n" + sgr("8") + "\n-->\n"

assert "--" not in resume, "resume must not contain -- (would break the HTML comment)"

out = base + block
open(path, "w", encoding="utf-8").write(out)
print("appended ANSI block; file bytes:", len(out.encode("utf-8")))
