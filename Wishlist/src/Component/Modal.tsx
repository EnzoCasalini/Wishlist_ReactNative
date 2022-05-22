import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import RNModal from "react-native-modal";
type ModalProps = {
    isVisible: boolean;
    children: React.ReactNode;
    [x: string]: any;
};

export const Modal = ({
                          isVisible = false,
                          children,
                          ...props
                      }: ModalProps) => {
    return (
        <RNModal
            isVisible={isVisible}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={800}
            backdropTransitionOutTiming={800}
            {...props}>
            {children}
        </RNModal>
    );
};

const ModalContainer = ({ children }: { children: React.ReactNode }) => (
    <View style={styles.container}>{children}</View>
);

const ModalHeader = ({ title }: { title: string }) => (
    <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
    </View>
);

const ModalBody = ({ children }: { children?: React.ReactNode }) => (
    <View style={styles.body}>{children}</View>
);

const ModalFooter = ({ children }: { children?: React.ReactNode }) => (
    <View style={styles.footer}>{children}</View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "solid",
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15,
    },
    text: {
        paddingTop: 10,
        textAlign: "center",
        fontSize: 20,
    },
    body: {
        justifyContent: "center",
        paddingHorizontal: 15,
        minHeight: 100,
        minWidth: "80%",
    },
    footer: {
        width: "80%",
        padding: 10,
    },
});

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;