/**
 * Author: Franklin Munoz
 * Date of Last Update: 8/6/2024
 * Description: class which intakes lyric data as an array of multi-line strings and returns a json string of a map for the front end to use to display
 */
// import { clientListeningClassification } from "./clientListeningClassification.ts";

// export class intakeToClassificationMadeAccessible{
//     private lyrics;
//     private lyricCount;
//     private lyricMap;
//     public static accessible;
//     private constructor(lyrics, size){
//         this.lyrics = new Array<String>(size);
//         this.lyricCount = size;
//     }
//     public getInstance(lyrics, size): intakeToClassificationMadeAccessible{
//         if (intakeToClassificationMadeAccessible.accessible == null) {
//             return intakeToClassificationMadeAccessible.accessible = new intakeToClassificationMadeAccessible(lyrics, size);
//         } else {
//             return intakeToClassificationMadeAccessible.accessible;
//         } 
//     }
//     /**
//      * classifies all strings in array and returns string of map
//      */
//     public classifyAllLyrics(): Promise<String> {
//         const classifier = new clientListeningClassification("placeholder");
//         Promise.all(this.lyrics.map(input => { return classifier.classifyThis(input)})).then((results) => {
//             this.lyricMap = classifier.getMap();
//         });
//         return this.lyricMap;
//     }
// }
