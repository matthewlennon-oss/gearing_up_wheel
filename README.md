# Wheel Radius Force Spinner

A simplified static GitHub Pages package for a Year 7 wheel-and-axle lesson.

## What is included

- `index.html` - the simplified simulator.
- `styles.css` - responsive layout and print styles.
- `script.js` - wheel-size selection, spin animation and reading display.
- `model.js` - the hidden model used to generate force readings.
- `worksheet.html` - printable student worksheet matched to the simple simulator.
- `teacher-guide.html` - printable answer guide and hidden model settings.
- `tests/model-check.js` - small Node check for the expected readings.
- `favicon.svg` - local browser icon.
- `.nojekyll` - keeps GitHub Pages from applying Jekyll processing.

## Upload to GitHub

Upload the contents of this folder to the root of a GitHub repository. The file `index.html` should sit at the repository root.

Then enable GitHub Pages from the main branch and root folder.

## Student task

Students choose only one variable: wheel radius.

They then spin the wheel and record one reading: force needed in Newtons.

## Hidden model

The simulator keeps these values fixed:

- axle radius: 2 cm
- resistance/load: 60 N
- run length: 1 turn
- friction ignored

Expected readings:

| Wheel radius | Force needed |
|---:|---:|
| 4 cm | 30 N |
| 8 cm | 15 N |
| 12 cm | 10 N |

Mechanical advantage is not shown in the simulator. Students can calculate it later from the worksheet.

## Local check

```bash
node tests/model-check.js
```

Expected result:

```text
model checks passed
```
