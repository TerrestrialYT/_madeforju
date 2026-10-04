const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <style>
      .bg { fill: #f5ede4; }
      .circle-rim { stroke: #3a1e0d; stroke-width: 6; fill: none; }
      .brand-fill { fill: #3a1e0d; }
      .heart-stroke {
        stroke: #3a1e0d;
        stroke-width: 13;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
      }
      .brand-sub {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 34px;
        font-weight: 400;
        letter-spacing: 0.38em;
        fill: #3a1e0d;
        text-anchor: middle;
      }
    </style>
  </defs>

  <!-- Circular Base -->
  <circle cx="500" cy="500" r="486" class="bg" />
  <circle cx="500" cy="500" r="486" class="circle-rim" />

  <!-- Main 'ju' mark -->
  <g class="brand-fill">
    <!-- Dot of 'j' -->
    <circle cx="418" cy="260" r="62" />

    <!-- 'j' Glyph with slanted top and big round ball terminal -->
    <path d="
      M 346 376
      L 472 324
      L 472 540
      C 472 626 428 682 326 682
      C 224 682 134 636 134 568
      A 72 72 0 1 1 278 568
      C 278 606 248 628 206 628
      C 190 628 176 618 168 606
      C 190 638 242 658 304 658
      C 386 658 408 610 408 538
      L 408 395
      L 346 415
      Z
    " />

    <!-- 'u' Glyph with parallel slanted tops, rounded basin, and flared winged swash terminal -->
    <path d="
      M 494 376
      L 632 324
      L 632 370
      C 610 385 596 410 596 440
      L 596 512
      C 596 544 608 562 632 562
      C 656 562 668 544 668 512
      L 668 440
      C 668 410 654 385 632 370
      L 670 376
      L 806 324
      L 806 460
      C 806 510 826 550 858 568
      C 852 588 824 598 788 598
      C 744 598 724 570 716 538
      C 700 578 662 598 620 598
      C 558 598 524 562 524 510
      L 524 440
      C 524 410 508 388 494 376
      Z
    " />
  </g>

  <!-- Text: MADE FOR JU. -->
  <text x="515" y="748" class="brand-sub">MADE FOR JU.</text>

  <!-- Outline Heart ♡ -->
  <path d="
    M 500 842
    C 490 822 462 805 438 820
    C 410 838 412 872 440 902
    L 500 952
    L 560 902
    C 588 872 590 838 562 820
    C 538 805 510 822 500 842
    Z
  " class="heart-stroke" />
</svg>`;

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1000 }
});
const pngData = resvg.render().asPng();

fs.writeFileSync('/app/applet/logo.svg', svg);
fs.writeFileSync('/app/applet/public/logo.svg', svg);
fs.writeFileSync('/app/applet/logo.png', pngData);
fs.writeFileSync('/app/applet/public/logo.png', pngData);
fs.writeFileSync('/logo.png', pngData);
fs.writeFileSync('/public/logo.png', pngData);

console.log('SUCCESS: Generated logo.svg & logo.png');
