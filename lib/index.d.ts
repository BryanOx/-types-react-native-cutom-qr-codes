declare module 'react-native-custom-qr-codes' {
  import { PureComponent } from 'react';
  import { ImageProps } from 'react-native';

  export type CODE_STYLE =
    | 'circle'
    | 'diamond'
    | 'dot'
    | 'ninja'
    | 'quare'
    | 'sharp';

  export type EYES_STYLE =
    | 'circle'
    | 'diamond'
    | 'quare';
  
  export type ECL_OPTIONS =
    | 'L'
    | 'M'
    | 'Q'
    | 'H';

  export interface QRCodeProps {
    backgroundColor?: string;
    backgroundImage?: ImageProps['source'];
    codeStyle?: CODE_STYLE;
    color?: string;
    content?: string;
    ecl?: ECL_OPTIONS;
    gradientDirection?: [number, number, number, number];
    innerEyeStyle?: EYES_STYLE;
    linearGradient?: [string, string];
    logo?: ImageProps['source'];
    logoSize?: number;
    outerEyeStyle?: EYES_STYLE;
    padding?: number;
    size?: number;
  }

  /**
   * @description Custom module declarations of Custom QR Codes.
   * 
   * @author BryanOx
   * 
   * @param {QRCodeProps} props Object with the props of the Custom QR Code Component
   * @param props.backgroundColor Default: `white`.
   * @param props.backgroundImage Default: `undefined`. This is the images used as the filling of the QA Code piece.
   * The Eyes can not be styled if a background image is used.
   * @param props.codeStyle Default: `square`. The styles of the centre QR Code pieces.
   * @param props.color Default: `black`. The color of the QR Code.
   * @param props.content Default: `No Content`. The String to be encoded in the QR Code.
   * @param props.ecl Default: `L`. The error correction level of the QR Code.
   * @param props.gradientDirection Default: `[0, 0, 170, 0]`. The numbers that define the orientation of the linear gradient.
   * @param props.innerEyeStyle Default: `square`. The style of the inside of the QR Code's eyes.
   * @param props.linearGradient Default `undefined`.
   * @param props.logo Default `undefined`. The image to be put in the center of the QR Code.
   * Must use a higher `ecl` for QR Code to work with a logo.
   * @param props.logoSize Default `undefined`. The size of the logo in the QR Code.
   * @param props.outerEyeStyle Default `square`. The style of the outside of the QR Code's eyes.
   * @param props.padding Default `1`. The padding between the edge of the component and the QR Code itself
   * (In terms of QR code piece sizes).
   * @param props.size Default `250`. The width & height of the component.
   */
  export const QRCode: PureComponent<QRCodeProps>;
}
