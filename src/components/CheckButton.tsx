import React, { useState } from 'react';
import { styles } from "./style";
import { View} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function CheckButton(){
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return(
    <View style={styles.checkBoxArea}>
      <CheckBox
        checked={checked}
        checkedColor="green"
        uncheckedColor="gray"
        onPress={handleCheck}
      />
    </View>
  );
}