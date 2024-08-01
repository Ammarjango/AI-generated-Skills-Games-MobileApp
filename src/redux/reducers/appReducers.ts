import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Image } from 'react-native-svg';
import { ImageSourcePropType } from 'react-native';

const initialState: any = {
  show: false,
  UserData: {
    accessToken: '',
    message: '',
    status: '',
    user: {
      __v: 0,
      _id: '',
      createdAt: '',
      email: '',
      friends: [],
      hobbies: [],
      isDeleted: false,
      isVerified: false,
      otp: null,
      otpExpire: null,
      password: '',
      phoneNumber: '',
      points: 0,
      updatedAt: '',
      userName: '',
    }
  },
  Texture: '',
  Textureb:'',
  Texturec:'',
  Number:'',
};
const appData = createSlice({
  name: 'allStates',
  initialState,
  reducers: {

    userData: (state, action: PayloadAction<any>) => {
      return { ...state, UserData: action.payload };
    },
    Texturea: (state, action: PayloadAction<ImageSourcePropType>) => {
      return { ...state, Texture: action.payload };
    },
    Textureb: (state, action: PayloadAction<ImageSourcePropType>) => {
      return { ...state, Textur: action.payload };
    },
    Texturec: (state, action: PayloadAction<ImageSourcePropType>) => {
      return { ...state, Textu: action.payload };
    },
    Number: (state, action: PayloadAction<any>) => {
      return { ...state, number: action.payload };
    },
  },
});

export const { userData, Texturea,Textureb,Texturec,Number } =
  appData.actions;

export default appData.reducer;
