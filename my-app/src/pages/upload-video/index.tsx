import * as React from 'react';

export class UploadVideo extends React.Component {
  public blobService = null;
  constructor() {
    super({});
    const blobUri = 'https://ahhhmalizerstorage.blob.core.windows.net';
    this.blobService = (window as any).AzureStorage.Blob.createBlobServiceWithSas(
      blobUri,
      '?sv=2018-03-28&ss=bfqt&srt=sco&sp=rwdlacup&st=2019-04-12T01%3A03%3A00Z&se=2019-04-15T01%3A03%3A00Z&sig=%2B%2Bwg8RJ0FYz4HP4OICOBVbJcz4kzG8MdD8BNqSsqEMk%3D'
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
