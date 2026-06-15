import { s } from "react-native-size-matters";
import { StyleSheet } from 'react-native';
import { AppColors } from "./colors";


export const SharedPaddingHorizontal = s(20)

export const commonStyles = StyleSheet.create({
    shadow: {
        //IOS
        shadowColor: AppColors.deepGrey,
        shadowOffset: {
            width: 2,
            height: 4
        },

        shadowOpacity: .2,
        shadowRadius: 4,

        //Android
        elevation: 2
    }
})