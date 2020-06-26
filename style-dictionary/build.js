const StyleDictionary = require('style-dictionary');

console.log('Design Tokenizer build started...');
console.log('\n==============================================');


// REGISTER THE CUSTOM TRANFORMS

StyleDictionary.registerTransform({
  name: 'custom-size/px', 
  type: 'value',
  matcher: function(prop) {
      return prop.path.includes("size") || 
             prop.path.includes("sectionSize") || 
             prop.path.includes("gutterSize") || 
             prop.path.includes("offset") || 
             prop.path.includes("letterSpacing") || 
             prop.path.includes("lineHeight") || 
             prop.path.includes("radius") || 
             prop.path.includes("offset-x") || 
             prop.path.includes("offset-y");
  },
  transformer: function(prop) {
      return `${prop.value}px`;
  }
});

StyleDictionary.registerTransform({
  name: 'custom-string/quotes', 
  type: 'value',
  matcher: function(prop) {
      return prop.path.includes("fontName");
  },
  transformer: function(prop) {
      return `"${prop.value}"`;
  }
});


StyleDictionary.registerTransformGroup({
  name: 'custom/css',
  transforms: ["attribute/cti", "name/cti/kebab", "custom-size/px", "custom-string/quotes", "color/css"]
});

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');


// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();


console.log('\n==============================================');
console.log('\nDesign Tokenizer build completed! Check your build folder for results.');