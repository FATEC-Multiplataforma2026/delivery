import { View, Text, StyleSheet } from 'react-native';
import Button from '@/components/button';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, World!</Text>
            <Button title="Click Me!" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#444',
        flex: 1,
        padding: 32,
        justifyContent: 'center',
        gap: 16,
    },
    text: {
        color: '#FFF',
    }
});