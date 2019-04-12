import * as React from 'react';

export class UploadVideo extends React.Component<{}, {}> {
  public blobService = null;
  constructor() {
    super({});
    const blobUri = 'https://' + 'STORAGE_ACCOUNT' + '.blob.core.windows.net';
    this.blobService = (window as any).AzureStorage.Blob.createBlobServiceWithSas(blobUri, 'SAS_TOKEN');
  }

  public render() {
    return <div>upload video</div>;
  }

  public uploadfile() {
    if (this.blobService != null) {
      this.blobService.createContainerIfNotExists('mycontainer', function(error, result) {
        if (error) {
          // Create container error
        } else {
          // Create container successfully
        }
      });
    }
  }
}
