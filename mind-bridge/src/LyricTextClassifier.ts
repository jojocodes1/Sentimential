export class LyricTextClassifier{

  //singleton pattern  
  public static I = new LyricTextClassifier();
  private constructor() { };

  async Classify(lyric: String): Promise<String> {

    const bodytext = `
      {
    "displayName": "Classifying documents",
    "analysisInput": {
      "documents": [
        {
          "id": "1",
          "language": "en-us",
          "text": ${lyric}
        }
      ]
    },
    "tasks": [
       {
        "kind": "CustomMultiLabelClassification",
        "taskName": "Multi Label Classification",
        "parameters": {
          "projectName": "PsionicSync",
          "deploymentName": "psionicsynctest"
        }
      }
    ]
  }`;
  
    const reqOptions = {
      method: 'POST',
      headers: { 'Ocp-Apim-Subscription-Key': '0344a2e729204d3b9c7091d9a2fe25fb'},
      body: bodytext  
    };

    const reqResult = {
        method: 'GET',
        headers: { 'Ocp-Apim-Subscription-Key': '0344a2e729204d3b9c7091d9a2fe25fb'}  
    };
  
    const response = await fetch('https://psionicsynctc.cognitiveservices.azure.com/language/analyze-text/jobs?api-version=2022-05-01', reqOptions);

    if (response.status === 202) {
      //extract url from operation location header field
    const results = await fetch(response.headers['operation-location'], reqResult);


    //TODO parse results and 
    const data = results.json;
    return data["tasks"].items[0].results["documents"]["class"].category;
    }
    return 'error';
  };

};