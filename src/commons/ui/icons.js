import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import {
  MaterialCommunityIcons,
  Fontisto,
  Ionicons,
  Feather,
} from '@expo/vector-icons';

export const RightIcon = (props) => (
  <MaterialCommunityIcons name='chevron-right' {...props} />
);
export const DownIcon = (props) => (
  <MaterialCommunityIcons name='chevron-down' {...props} />
);
export const VisaIcon = (props) => <Fontisto name='visa' {...props} />;
export const PaypalIcon = (props) => <Fontisto name='paypal' {...props} />;
export const MasterCardIcon = (props) => (
  <Fontisto name='mastercard' {...props} />
);

export const CheckIcon = (props) => (
  <Svg
    width={25}
    height={25}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <G clipPath='url(#a)'>
      <Path
        d='M15.73 1.36a4.516 4.516 0 0 0-6.46 0l-.972.996-1.39-.017a4.516 4.516 0 0 0-4.569 4.569l.016 1.39-.994.972a4.516 4.516 0 0 0 0 6.46l.995.972-.017 1.39a4.516 4.516 0 0 0 4.569 4.569l1.39-.016.972.994a4.516 4.516 0 0 0 6.46 0l.972-.995 1.39.017a4.514 4.514 0 0 0 4.569-4.569l-.016-1.39.994-.972a4.516 4.516 0 0 0 0-6.46l-.995-.972.017-1.39a4.514 4.514 0 0 0-4.569-4.569l-1.39.016-.972-.994v-.002Zm.448 9.35-4.687 4.687a.781.781 0 0 1-1.107 0l-2.343-2.344a.78.78 0 0 1 .852-1.276c.095.04.181.097.254.17l1.79 1.792 4.135-4.136a.782.782 0 1 1 1.106 1.106Z'
        fill='#13C122'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h25v25H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export const FailedIcon = (props) => (
  <Svg
    width={25}
    height={25}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <G clipPath='url(#a)'>
      <Path
        d='M17.906.228A.781.781 0 0 0 17.355 0h-9.71a.781.781 0 0 0-.551.228L.228 7.094A.781.781 0 0 0 0 7.645v9.71c0 .206.082.405.228.551l6.866 6.866a.781.781 0 0 0 .551.228h9.71a.781.781 0 0 0 .551-.228l6.866-6.866a.781.781 0 0 0 .228-.551v-9.71a.781.781 0 0 0-.228-.551L17.906.228ZM8.366 7.26l4.134 4.136 4.134-4.136a.781.781 0 1 1 1.107 1.107L13.605 12.5l4.136 4.134a.78.78 0 0 1 0 1.107.78.78 0 0 1-1.107 0L12.5 13.605 8.366 17.74a.781.781 0 1 1-1.107-1.107l4.136-4.134L7.26 8.366a.782.782 0 0 1 1.107-1.107Z'
        fill='red'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h25v25H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export const RefundIcon = (props) => (
  <Svg
    width={25}
    height={25}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <Path
      d='M24.505 4.688a3.125 3.125 0 0 0-3.125-3.125H10.317a3.125 3.125 0 0 0-2.373 1.09L.377 11.484a1.562 1.562 0 0 0 0 2.035l7.567 8.828a3.126 3.126 0 0 0 2.373 1.09H21.38a3.125 3.125 0 0 0 3.125-3.125V4.688ZM9.108 9.146a.782.782 0 0 1 1.104-1.106l3.355 3.354 3.353-3.354a.783.783 0 0 1 1.105 1.106L14.672 12.5l3.353 3.353a.782.782 0 0 1-1.105 1.106l-3.353-3.354-3.354 3.354a.78.78 0 1 1-1.105-1.106l3.354-3.353-3.354-3.353Z'
      fill='#606060'
    />
  </Svg>
);
export const PersonIcon = (props) => (
  <Svg
    width={25}
    height={25}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <Path
      d='M12.5 12.5a4.688 4.688 0 1 0 0-9.376 4.688 4.688 0 0 0 0 9.376Zm3.125-4.688a3.125 3.125 0 1 1-6.25 0 3.125 3.125 0 0 1 6.25 0Zm6.25 12.5c0 1.563-1.563 1.563-1.563 1.563H4.688s-1.562 0-1.562-1.563c0-1.562 1.563-6.25 9.375-6.25 7.813 0 9.375 4.688 9.375 6.25Zm-1.563-.006c-.001-.384-.24-1.54-1.3-2.6-1.018-1.018-2.935-2.081-6.512-2.081-3.578 0-5.494 1.063-6.513 2.081-1.059 1.06-1.296 2.216-1.3 2.6h15.625Z'
      fill='#fff'
    />
  </Svg>
);
export const MicIcon = (props) => <Ionicons name='mic-outline' {...props} />;
export const SearchIcon = (props) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <G clipPath='url(#a)'>
      <Path
        d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.012 1.012 0 0 0-.115-.1v.001ZM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z'
        fill='#606060'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h16v16H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);
export const FilterIcon = (props) => <Feather name='filter' {...props} />;
