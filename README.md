# Generate a unique ID in Document

[![npm version](https://badge.fury.io/js/%40saekitominaga%2Fdocument-generate-id.svg)](https://badge.fury.io/js/%40saekitominaga%2Fdocument-generate-id)

Generate a unique ID in Document.

## Demo

- [Demo page](https://saekitominaga.github.io/document-generate-id/demo.html)

## Examples

```JavaScript
import DocumentGenerateId from '@saekitominaga/document-generate-id';

const documentGenerateId1 = new DocumentGenerateId();
documentGenerateId1.generate(); // e.g. GUaHJ6ao5m

const documentGenerateId2 = new DocumentGenerateId(8, {
  alphalower: true,
  alphaupper: false,
  number: true,
  symbol: '-_:.',
}, 'js-', 3);
documentGenerateId2.generate(); // e.g. js-7f3h1w:l
```

## Constructor

```TypeScript
new DocumentGenerateId(
	length = 10,
	charactorType = {
		alphalower: true,
		alphaupper: true,
		number: true,
		symbol: '',
	},
	prefix = '',
	trialLimit = 10
)
```

### Parameters

<dl>
<dt><code>length</code> [Optional]</dt>
<dd>Length of ID (Excluding the prefix part)</dd>
<dt><code>charactorType</code> [Optional]</dt>
<dd>Type of characters used for ID
	<dl>
	<dt><code>alphalower</code> [Optional]</dt>
	<dd>[a-z]</dd>
	<dt><code>alphaupper</code> [Optional]</dt>
	<dd>[A-Z]</dd>
	<dt><code>number</code> [Optional]</dt>
	<dd>[0-9]</dd>
	<dt><code>symbol</code> [Optional]</dt>
	<dd>Enumerate symbol characters (e.g. '-_:.')</dd>
	</dl>
</dd>
<dt><code>prefix</code> [Optional]</dt>
<dd>Prefix of ID</dd>
<dt><code>trialLimit</code> [Optional]</dt>
<dd>Maximum number of attempts if the generated ID exists in the document</dd>
</dl>

## Methods

<dl>
<dt><code>generate(): string</code></dt>
<dd>Generate a unique ID in document</dd>
</dl>
