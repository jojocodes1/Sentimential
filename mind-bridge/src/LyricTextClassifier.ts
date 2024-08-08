/**
 * Author: Franklin Munoz
 * Date of Last Update: 7/30/2024
 * Description: Class for calling into the rest api for the custom text classification model, contains one method which takes in a string (lyrics) and returns its classification as a string.
 */

const delay = ms => new Promise( res => setTimeout(res, ms));

export class LyricTextClassifier{

  //singleton pattern  
  public static I = new LyricTextClassifier();
  private constructor() { };

  

  async Classify(lyric: String ): Promise<String> {

    const bodytext = {
      displayName: "Classifying documents",
      analysisInput: {
          documents: [
              {
                  id: "1",
                  language: "en-us",
                  text: lyric
              }
          ]
      },
      tasks: [
          {
              kind: "CustomMultiLabelClassification",
              taskName: "Multi Label Classification",
              parameters: {
                  projectName: "PsionicSync",
                  deploymentName: "psionicSynccurrent"
              }
          }
      ]
  };
  
    const reqOptions = {
      method: 'POST',
      headers: { 'Ocp-Apim-Subscription-Key': '0344a2e729204d3b9c7091d9a2fe25fb', "Content-Type": "application/json"},
      body: JSON.stringify(bodytext)
    };

    const reqResult = {
        method: 'GET',
        headers: { 'Ocp-Apim-Subscription-Key': '0344a2e729204d3b9c7091d9a2fe25fb'}  
    };
  
    return new Promise((resolve) => {
      fetch('https://psionicsynctc.cognitiveservices.azure.com/language/analyze-text/jobs?api-version=2022-05-01', reqOptions).then((response)=> {

        delay(6000).then(()=>{
          const operationLocation = response.headers.get('operation-location')!;

        fetch(operationLocation, reqResult).then((response)=> {
          response.json().then((json) => {
            const result = json['tasks'].items[0].results.documents[0].class[0].category;
            console.log('result: ', result);
            if (result != null) {
              resolve(result);
            } else {
              resolve("whoops");
            }
          });
        });
        });
      });
    });
  };

};