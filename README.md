# mecca-paint

A [re-frame](https://github.com/day8/re-frame) application for producing, converting and editing SVG images and animated pixel art.

This repo was formed from a collection of techniques I developed while working on the graphical elements of the [MECCA Platform](https://github.com/porkostomus/mecca) and [Mario Music Composer](https://github.com/porkostomus/mario-music-composer). The frustration involved through enduring the learning curve of numerous graphical tools pushed me to learn to write my own SVG library. It supports importing raster images and converting them to vector paths while preserving 100% of the retro-look.

## Development Mode

### Run application:

```
clojure -A:fig -b dev -r
```

## Production Build

```
clj -m figwheel.main -O advanced -bo dev
```