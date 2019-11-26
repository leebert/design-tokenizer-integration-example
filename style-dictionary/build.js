const StyleDictionary = require('style-dictionary').extend(__dirname + '/config.json');
const fs = require('fs');
const _ = require('lodash');

console.log('Design Tokenizer build started...');
console.log('\n==============================================');

// FORMATTER

const spacingTemplate = _.template( fs.readFileSync('templates/spacing-objects.template') );
const shapeTemplate = _.template( fs.readFileSync('templates/shape-objects.template') );

StyleDictionary.registerFormat({
  name: 'custom/spacing-objects',
  formatter: spacingTemplate
});

StyleDictionary.registerFormat({
  name: 'custom/shape-objects',
  formatter: shapeTemplate
});


// FILTERS

StyleDictionary.registerFilter({
  name: 'isSpacer',
  matcher: function(prop) {
    return prop.path.includes("spacer");
  }
})

StyleDictionary.registerFilter({
  name: 'isRadius',
  matcher: function(prop) {
    return prop.path.includes("corner-radius");
  }
})

// TRANFORMS

StyleDictionary.registerTransform({
  name: 'custom/size-px', 
  type: 'value',
  matcher: function(prop) {
      return prop.path.includes("size") || 
             prop.path.includes("grid") || 
             prop.path.includes("letterSpacing") || 
             prop.path.includes("radius") || 
             prop.path.includes("offset-x") || 
             prop.path.includes("offset-y");
  },
  transformer: function(prop) {
      return `${prop.value}px`;
  }
});

StyleDictionary.registerTransform({
  name: 'custom/name-nodash',
  type: 'name',
  transformer: function(prop) {
    let res = prop.name.split("-");
    if (res.length > 1) {
      var str = res[0];
      for (i = 1; i < res.length; i++) {
        str = str + res[i].charAt(0).toUpperCase() + res[i].substring(1);
      }
      return str;
    }
    else {
      return prop.name;
    }
  }
});

// TRANFORM GROUPS

StyleDictionary.registerTransformGroup({
  name: 'custom/css',
  transforms: ["attribute/cti", "name/cti/kebab", "custom/size-px", "color/css"]
});

StyleDictionary.registerTransformGroup({
  name: 'custom/javascript',
  transforms: ["custom/name-nodash"]
});

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');


// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();


console.log('\n==============================================');
console.log('\nDesign Tokenizer build completed! Check your build folder for results.');