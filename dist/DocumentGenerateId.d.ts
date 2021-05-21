interface charactorType {
    alphalower: boolean;
    alphaupper: boolean;
    number: boolean;
    symbol: string;
}
/**
 * Generate a unique ID in Document
 */
export default class {
    #private;
    /**
     * @param {number} length - Length of ID (Excluding the prefix part)
     * @param {charactorType} charactorType - Type of characters used for ID
     * @param {string} prefix - Prefix of ID
     * @param {number} trialLimit - Maximum number of attempts if the generated ID exists in the document
     */
    constructor(length?: number, charactorType?: charactorType, prefix?: string, trialLimit?: number);
    /**
     * Generate a random string
     *
     * @returns {string} Value of ID
     */
    private _getRandom;
    /**
     * Generate a unique ID in document
     *
     * @returns {string} Value of ID
     */
    generate(): string;
}
export {};
//# sourceMappingURL=DocumentGenerateId.d.ts.map