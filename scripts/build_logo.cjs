const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <style>
      .badge-bg { fill: #f5eee6; }
      .badge-rim { stroke: #3a2213; stroke-width: 6; fill: none; }
      .brand-fill { fill: #3a2213; }
      .heart-line {
        stroke: #3a2213;
        stroke-width: 12;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
      }
      .brand-label {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 34px;
        font-weight: 400;
        letter-spacing: 0.36em;
        fill: #3a2213;
        text-anchor: middle;
      }
    </style>
  </defs>

  <!-- Circular Badge -->
  <circle cx="500" cy="500" r="486" class="badge-bg" />
  <circle cx="500" cy="500" r="486" class="badge-rim" />

  <!-- Logo Glyphs 'ju' -->
  <g class="brand-fill">
    <!-- Dot of 'j' -->
    <circle cx="418" cy="258" r="60" />

    <!-- 'j' Body with distinctive retro wedge top and ball terminal -->
    <path d="
      M 322 382
      L 472 326
      L 472 536
      C 472 622 426 680 326 680
      C 222 680 134 634 134 566
      A 72 72 0 1 1 278 566
      C 278 604 246 626 206 626
      C 190 626 176 616 168 604
      C 190 636 242 656 304 656
      C 386 656 408 608 408 536
      L 408 412
      C 392 412 368 406 348 398
      Z
    " />

    <!-- 'u' Body with matching wedge tops, rounded trough, and flared wing terminal -->
    <path d="
      M 492 382
      L 632 326
      L 632 368
      C 614 382 602 404 602 432
      L 602 510
      C 602 546 616 564 642 564
      C 668 564 682 546 682 510
      L 682 432
      C 682 404 670 382 652 368
      L 672 376
      L 806 326
      L 806 462
      C 806 512 828 554 858 568
      C 852 588 824 598 788 598
      C 744 598 724 570 716 538
      C 700 578 662 598 620 598
      C 556 598 522 560 522 506
      L 522 432
      C 522 404 510 388 492 382
      Z
    " />
  </g>

  <!-- Text: MADE FOR JU. -->
  <text x="515" y="746" class="brand-label">MADE FOR JU.</text>

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
  " class="heart-line" />
</svg>`;

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1000 }
});
const pngData = resvg.render().asPng();

fs.writeFileSync('/app/applet/logo.svg', svg);
fs.writeFileSync('/app/applet/public/logo.svg', svg);
fs.writeFileSync('/app/applet/logo.png', pngData);
fs.writeFileSync('/app/applet/public/logo.png', pngData);
fs.writeFileSync('/logo.svg', svg);
fs.writeFileSync('/public/logo.svg', svg);
fs.writeFileSync('/logo.png', pngData);
fs.writeFileSync('/public/logo.png', pngData);

console.log('BUILD_LOGO COMPLETE: logo.svg and logo.png generated.');
