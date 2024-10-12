import typography, {TypographyVariant} from '@/utils/typography/Typography';
import {Text, TextProps} from 'react-native';

type Props = Pick<TextProps, 'children'> & {
  variant: TypographyVariant;
  color: string;
};

const Label: React.FC<Props> = props => {
  const {variant, color, children} = props;

  return (
    <Text
      style={{
        fontSize: typography[variant].fontSize,
        fontWeight: typography[variant].fontWeight,
        lineHeight: typography[variant].lineHeight,
        letterSpacing: typography[variant].letterSpacing,
        color,
      }}>
      {children}
    </Text>
  );
};

export default Label;
