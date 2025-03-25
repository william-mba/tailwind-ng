// @ts-check

// Allows us to bring in the recommended core rules from eslint itself
const eslint = require('@eslint/js');

// Allows us to use the typed utility for our config, and to bring in the recommended rules for TypeScript projects from typescript-eslint
const tseslint = require('typescript-eslint');

// Allows us to bring in the recommended rules for Angular projects from angular-eslint
const angular = require('angular-eslint');

// Export our config array, which is composed together thanks to the typed utility function from typescript-eslint
module.exports = tseslint.config(
	{
		// Everything in this config object targets our TypeScript files (Components, Directives, Pipes etc)
		files: ['**/*.ts'],
		extends: [
			// Apply the recommended core rules
			eslint.configs.recommended,
			// Apply the recommended TypeScript rules
			...tseslint.configs.recommended,
			// Optionally apply stylistic rules from typescript-eslint that improve code consistency
			...tseslint.configs.stylistic,
			// Apply the recommended Angular rules
			...angular.configs.tsRecommended,
		],
		// Set the custom processor which will allow us to have our inline Component templates extracted
		// and treated as if they are HTML files (and therefore have the .html config below applied to them)
		processor: angular.processInlineTemplates,
	},
	{
		// Everything in this config object targets our HTML files (external templates,
		// and inline templates as long as we have the `processor` set on our TypeScript config above)
		files: ['**/*.html'],
		extends: [
			// Apply the recommended Angular template rules
			...angular.configs.templateRecommended,
			// Apply the Angular template rules which focus on accessibility of our apps
			...angular.configs.templateAccessibility,
		],
		rules: {},
	},
);
