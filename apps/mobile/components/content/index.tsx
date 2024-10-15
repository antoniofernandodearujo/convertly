import {
    View
} from 'react-native';
import styles from './styles';
// components
import Title from '../title';
import ButtonOptions from '../buttonOptions';
import InputFile from '../inputFile';

export default function Content() {
    return (
        <View style={styles.container}>

            <Title />

            <ButtonOptions 
                qtdButtonsOptions={2} 
                label={['PDF para Word', 'Word para PDF']}  
            />

            <InputFile />
        </View>
    );
}