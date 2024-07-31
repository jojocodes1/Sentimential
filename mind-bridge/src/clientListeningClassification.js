/**
 * Author: Franklin Munoz
 * Date of Last Update: 7/31/2024
 * Description: Class to use custom text classification on a user's folder of lyrics and create a dictionair/hashmap with emotions as keys and numbers of each emotions as values.
 */
import { LyricTextClassifier } from "./LyricTextClassifier.ts";

export class clientListeningClassification{
    static #CN;
    emotionMap;
    constructor(clientName) {
        this.CN = clientName;
        this.emotionMap = new Map();
    }
    
}