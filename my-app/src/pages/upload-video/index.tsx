import * as React from 'react';

export class UploadVideo extends React.Component {
  public blobService = null;
  constructor() {
    super({});
    const blobUri = 'https://ahhhmalizerstorage.blob.core.windows.net';
    this.blobService = (window as any).AzureStorage.Blob.createBlobServiceWithSas(
      blobUri,
      '%2FXnkPTIbJYSI%2BbHB%2FrDdcjQqTGOPR%2BZ6bYn99IpovNU%3D'
    );
  }

  public render() {
    return (
      <div>
        <input accept="video/*" type="file" onChange={e => this.uploadfile(e.target.files)} />
      </div>
    );
  }

  public uploadfile(files: any) {
    const service: any = this.blobService;
    const file = files[0];
    const customBlockSize = file.size > 1024 * 1024 * 32 ? 1024 * 1024 * 4 : 1024 * 512;
    if (service != null) {
      service.singleBlobPutThresholdInBytes = customBlockSize;
      // let finishedOrError = false;
      const speedSummary = service.createBlockBlobFromBrowserFile(
        'test',
        file.name,
        file,
        { blockSize: customBlockSize },
        (error: any, result: any, response: any) => {
          // finishedOrError = true;
          if (error) {
            // Upload file failed
          } else {
            window.alert('success');
            // Upload successfully
          }
        }
      );
      speedSummary.on('progress', () => {
        // const process = speedSummary.getCompletePercent();
        // displayProcess(process);
      });
    }
  }
}
