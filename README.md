![Banner Image](https://github.com/leebert/design-tokenizer-integration-example/blob/master/example-site/images/banner.png)

### What?
A starter kit that demonstrates one way to integrate design tokens into your designer/developer pipeline.

### How?
1. Clone or download this repo.
1. Install [style-dictionary](https://amzn.github.io/style-dictionary/#/).
1. Launch Figma and install the Design Tokenizer [plugin](https://www.figma.com/file/4wWBG2jvrepyuV1cvOzsL3/ExampleDesignTokenLibrary).
1. Use Design Tokenizer to export your design tokens. You can use this [example design libary](https://www.figma.com/file/4wWBG2jvrepyuV1cvOzsL3/ExampleDesignTokenLibrary) as a starting point.
1. Save the json file to `style-dictionary/properties`. 
1. If you haven't already, navigate to `style-dictionry/` and run `npm install` to setup dependencies.
1. Run `npm run build` to generate css variables, which are saved to `style-dictionary/build/tokens.css`. 
1. Copy-paste the variables into the `:root` selector of `example-site/css/styles.css`.
1. 💰💰💰.

### Huh?
[Email Me](mailto:lbrenner@alegion.com)
