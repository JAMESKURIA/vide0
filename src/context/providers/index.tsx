import { ScreenProvider } from "@/index";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { StatusBar } from "expo-status-bar";

export default function Providers() {
    return (
        <>
            <StatusBar style="auto" />
            <PaperProvider>
                <SafeAreaProvider>
                    <ScreenProvider />
                </SafeAreaProvider>
            </PaperProvider>
        </>
    );
}
