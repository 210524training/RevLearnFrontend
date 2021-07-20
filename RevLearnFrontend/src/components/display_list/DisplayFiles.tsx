import React from 'react';
import { View, Button } from 'react-native';
import { Attachment } from '../../models/Attachment';
import { downLoadFile, getFileUrl } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import Linking from '../../hooks/Linking';

type Props = {
  attachments: Attachment[],
}

const DisplayFiles: React.FC<Props> = ({ attachments }) => {
  const download = async (attachment: Attachment) => {
    const resultUrl = await getFileUrl(attachment.key);
    Linking.openURL(resultUrl, '_blank');
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
