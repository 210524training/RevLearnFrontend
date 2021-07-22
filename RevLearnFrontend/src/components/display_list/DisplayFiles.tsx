/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import {
  View, Platform, Image, Text,
} from 'react-native';
import { Button } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';
import { Attachment } from '../../models/Attachment';
import { downLoadFile, getFileUrl } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import Linking from '../../hooks/Linking';
import { ResourceStyles } from '../../styles/ResourceStyles';
import B from '../BoldText';

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
          <View key={index} style={ResourceStyles.card}>
            <Text style={ResourceStyles.item}><B input={'Resource Name: '}/>{element.name}</Text>
            <Text style={ResourceStyles.item}><B input={'File Type: '}/>{element.type}</Text>
            <Text style={ResourceStyles.item}><B input={'Resource Description: '}/>{element.discription}</Text>
            <Button
              style={ResourceStyles.item}
              color='#00B2D4'
              mode={'contained'}
              onPress={() => { download(element); }}
            >
            Download {element.name}
            </Button>
          </View>
        ))
      }

      {url
        && <Image source={{ uri: url }}/>}
    </View>
  );
};

export default DisplayFiles;
