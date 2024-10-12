import Label from '@/components/Label';
import {Pressable, Text, View} from 'react-native';

const LandingSection: React.FC = () => {
  return (
    <View style={{borderWidth: 1}}>
      <Label variant="display.small" color="#111">
        Modern solution for your project
      </Label>

      <Label variant="body.large" color="#111">
        "Viktor CNC" makes new things possible in manufacturing so you can make
        new things possible for the whole world
      </Label>

      <Pressable
        onPress={() => {
          alert('111');
        }}>
        <Text>CONTACT WITH ME</Text>
      </Pressable>
    </View>
  );
};

export default LandingSection;
