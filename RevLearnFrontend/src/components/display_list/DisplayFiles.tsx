/* eslint-disable no-unused-expressions */
import React from 'react';
import { View, Button, Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Attachment } from '../../models/Attachment';
import { downLoadFile, getFileUrl } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import Linking from '../../hooks/Linking';

type Props = {
  attachments: Attachment[],
}

const DisplayFiles: React.FC<Props> = ({ attachments }) => {
  const download = async (attachment: Attachment) => {
    const resultUrl = await getFileUrl(attachment.key);
    console.log('retrived');
    if(Platform.OS === 'web') {
      Linking.openURL(resultUrl, '_blank');
    } else {
      // downLoadFile(attachment.key);
      FileSystem.downloadAsync(
        resultUrl,
        `${FileSystem.documentDirectory}${attachment.name}.`,
      )
        .then(({ uri }) => {
          console.log('Finished downloading to ', uri);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    // downLoadFile(resultUrl);
  };

  return (
    <View>
      {attachments
        && attachments.map((element, index) => (
          <Button key={index} title={`Download ${element.name}`} onPress={(event) => { download(element); }}/>
        ))
      }
    </View>
  );
};

export default DisplayFiles;
