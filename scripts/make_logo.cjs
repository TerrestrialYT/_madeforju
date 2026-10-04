const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <style>
      .bg { fill: #f3ece3; }
      .border { stroke: #351e0e; stroke-width: 8; fill: none; }
      .choco { fill: #351e0e; }
      .choco-stroke { stroke: #351e0e; stroke-width: 13; stroke-linecap: round; stroke-linejoin: round; fill: none; }
      .subtext {
        font-family: 'Outfit', 'Montserrat', -apple-system, sans-serif;
        font-size: 40px;
        font-weight: 500;
        letter-spacing: 0.38em;
        fill: #351e0e;
        text-anchor: middle;
      }
    </style>
  </defs>

  <!-- Background Cream Circle & Outer Border -->
  <circle cx="500" cy="500" r="488" class="bg" />
  <circle cx="500" cy="500" r="488" class="border" />

  <!-- Logo Glyphs -->
  <g class="choco">
    <!-- Dot of 'j' -->
    <circle cx="416" cy="256" r="60" />

    <!-- Letter 'j' -->
    <path d="
      M 470 326
      C 442 338 386 360 322 384
      L 352 416
      C 374 404 394 398 408 398
      L 408 534
      C 408 610 376 676 274 676
      C 198 676 132 622 132 546
      C 132 478 188 430 256 430
      C 288 430 310 446 322 468
      C 314 496 292 516 262 516
      C 246 516 234 506 234 492
      C 234 484 238 478 244 472
      C 208 476 190 504 190 546
      C 190 600 234 634 286 634
      C 368 634 416 578 416 498
      L 416 384
      C 416 348 438 332 470 326
      Z
    " />

    <!-- Letter 'u' -->
    <path d="
      M 630 324
      C 600 338 546 360 488 384
      L 516 416
      C 536 406 554 398 568 398
      L 568 506
      C 568 554 598 596 664 596
      C 714 596 746 564 758 526
      C 766 548 784 570 816 584
      C 842 594 856 586 852 566
      C 844 544 826 522 812 494
      L 812 398
      C 824 398 842 406 862 416
      L 890 384
      C 832 360 778 338 748 324
      C 768 344 768 366 768 398
      L 768 496
      C 768 532 752 558 718 558
      C 682 558 666 532 666 496
      L 666 398
      C 666 366 666 344 688 324
      L 630 324
      Z
    " />
  </g>

  <!-- Subtitle: MADE FOR JU. -->
  <text x="500" y="750" class="subtext">MADE FOR JU.</text>

  <!-- Heart Icon (Outline) -->
  <path d="
    M 500 840
    C 490 820 460 798 435 815
    C 405 835 410 875 440 905
    L 500 955
    L 560 905
    C 590 875 595 835 565 815
    C 540 798 510 820 500 840
    Z
  " class="choco-stroke" />
</svg>`;

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1000 }
});
const pngData = resvg.render().asPng();

// Save to both public and root paths
fs.writeFileSync('/app/applet/logo.png', pngData);
fs.writeFileSync('/app/applet/public/logo.png', pngData);
fs.writeFileSync('/logo.png', pngData);
fs.writeFileSync('/public/logo.png', pngData);

// Also write logo.svg
fs.writeFileSync('/app/applet/logo.svg', svg);
fs.writeFileSync('/app/applet/public/logo.svg', svg);

console.log('SUCCESS: logo.png & logo.svg generated! File size:', pngData.length);
