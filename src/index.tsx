import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "./lib/tailwind";
import { BottomTabs } from "./navigation";

export const ScreenProvider = () => {
    return (
        <SafeAreaView mode="margin" style={tw`flex-1`}>
            <BottomTabs />
        </SafeAreaView>
    );
};
