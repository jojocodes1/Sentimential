/**
 * Author: Franklin Munoz
 * Date of Last Update: 7/31/2024
 * Description: Class to use custom text classification on a user's folder of lyrics and create a dictionair/hashmap with emotions as keys and numbers of each emotions as values.
 */
import { LyricTextClassifier } from "./LyricTextClassifier.ts";

export class clientListeningClassification{
    private CN;
    emotionMap;
    private joyCounter = 0;
    private sadnessCounter = 0;
    private fearCounter = 0;
    private angerCounter = 0;
    constructor(clientName) {
        this.CN = clientName;
        this.emotionMap = new Map([
            ["Joy", 0],
            ["Sadness", 0],
            ["Fear", 0],
            ["Anger", 0],   
        ]);
    }

    /**
     * classifies text and updates counters
     */
    public classifyThis(toClassify: string): Promise<void> {

        return new Promise(resolve => {
            LyricTextClassifier.I.Classify(toClassify).then((result) => {
                switch (result) {
                    case 'Joy':
                        this.joyCounter += 1;
                        break;
                    case 'Sadness':
                        this.sadnessCounter += 1;
                        break;
                    case 'Fear':
                        this.fearCounter += 1;
                        break;
                    case 'Anger':
                        this.angerCounter += 1;
                        break;
                    default:
                        console.log("HELP HELP SOMETHINGS WRONG OH NO SOMETHING WENT HORRIBLY WRONG");
                }
                resolve();
              });
        });
        
    }
    
    /**
     * updates map to match counters and returns the map as a json string
     */
    public getMap(): string {
        this.emotionMap.set("Joy", this.joyCounter);
        this.emotionMap.set("Sadness", this.sadnessCounter);
        this.emotionMap.set("Fear", this.fearCounter);
        this.emotionMap.set("Anger", this.angerCounter);
        this.joyCounter = 0;
        this.sadnessCounter = 0;
        this.fearCounter = 0;
        this.angerCounter = 0;
        const obj = Object.fromEntries(this.emotionMap);
        const jsonString = JSON.stringify(obj);
        return jsonString;
    }
}