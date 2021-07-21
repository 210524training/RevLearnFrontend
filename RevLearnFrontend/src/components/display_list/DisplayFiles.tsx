/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import {
  View, Button, Platform, Image,
} from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Attachment } from '../../models/Attachment';
import { downLoadFile, getFileUrl } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import Linking from '../../hooks/Linking';

type Props = {
  attachments: Attachment[],
}

const DisplayFiles: React.FC<Props> = ({ attachments }) => {
  const [url, setUrl] = useState<string>();
  const download = async (attachment: Attachment) => {
    const resultUrl = await getFileUrl(attachment.key);
    console.log('retrived');
    if(Platform.OS === 'web') {
      Linking.openURL(resultUrl, '_blank');
    } else {
      // downLoadFile(attachment.key);
      FileSystem.downloadAsync(
        resultUrl,
        `${FileSystem.documentDirectory}${attachment.name}.${attachment.type}`,
      )
        .then(({ uri }) => {
          console.log('Finished downloading to ', uri);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    // downLoadFile(resultUrl);
    // ${FileSystem.documentDirectory}
  };

  return (
    <View>
      {attachments
        && attachments.map((element, index) => (
          <Button key={index} title={`Download ${element.name}`} onPress={(event) => { download(element); }}/>
        ))
      }

      {url
        && <Image source={{ uri: url }}/>}
    </View>
  );
};

export default DisplayFiles;
