import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Text from './Text';
import Subheading from './Subheading';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        margin: 15,
        borderRadius: 7
    },
    repoItemHeader: {
        flexDirection: 'row',
        flexGrow: 0,
        flexBasis: 'auto',
        justifyContent: 'flex-start'
    },
    repoHeaderDetails: {
        marginLeft: 15,
    },
    languageTag: {
        alignSelf: 'flex-start',
        backgroundColor: '#0366d6',
        padding: 5,
        borderRadius: 7,
        overflow: 'hidden',
        marginTop: 10
    },
    repoHeaderItem: {
        marginTop: 10,
        flexDirection: 'row',
    },
    repoTextWrap: {
        width: win.width - 100,
        flexWrap: 'wrap'
    }
});

const RepoItemHeader = ({ avatar, fullName, description, language, id }) => {
    return (
        <View style={styles.repoItemHeader}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <View style={styles.repoHeaderDetails}>
                    <Subheading
                        style={styles.repoHeaderItem}
                        fontWeight='bold'
                        testID='fullName'
                    >
                        {fullName}
                    </Subheading>
                <View style={styles.repoHeaderItem}>
                    <Text
                        style={styles.repoTextWrap}
                        color='textSecondary'
                        testID='description'
                    >
                        {description}
                    </Text>
                </View>
                <View style={styles.languageTag}>
                    <Text color='white' testID='language'>{language}</Text>
                </View>

            </View>
        </View>
    );
};

export default RepoItemHeader;