# What?
A starter kit that demonstrates one way to integrate design tokens into your designer/developer pipeline.

## How?
1. Clone or download this repo.
2. Install [style-dictionary](https://amzn.github.io/style-dictionary/#/).
3. Launch Figma and install the Design Tokenizer [plugin](https://www.figma.com/file/4wWBG2jvrepyuV1cvOzsL3/ExampleDesignTokenLibrary).
4. Use Design Tokenizer to export your design tokens. You can use this [example design libary](https://www.figma.com/file/4wWBG2jvrepyuV1cvOzsL3/ExampleDesignTokenLibrary) as a starting point.
5. Save the json file to `style-dictionary/properties`. 
6. Run `style-dictionary build` to generate the css variables saved to `style-dictionary/build/tokens.css`. 
7. Copy-paste the variables into `example-site/css/styles.css`.
7. Profit $$$.

## Huh?
[Email Me](mailto:lbrenner@alegion.com)