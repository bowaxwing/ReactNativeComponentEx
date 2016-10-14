import React, {Component} from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    TextInput
} from 'react-native';

import {Style} from './style';
import {Wrapper} from './../Layout';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height : 0
        }
    }
    render() {
        return (
            <Wrapper title="TextInput 예제" {...this.props}>
                <KeyboardAvoidingView behavior="padding" contentContainerStyle={Style.keyboardWrap} style={Style.keyboardWrap}>
                    <ScrollView style={Style.Contents}>
                        <View style={Style.Item}>
                            <Text>autoCapitalize : 'none', 'sentences'(default), 'words', 'characters'</Text>
                            <TextInput autoCorrect={false} autoCapitalize="none" style={Style.textInput} />
                        </View>
                        <View style={Style.Item}>
                            <Text>defaultValue</Text>
                            <TextInput defaultValue="defaultValue" style={Style.textInput} />
                        </View>
                        <View style={Style.Item}>
                            <Text>placeholder</Text>
                            <TextInput placeholder="placeholder" placeholderTextColor="red" style={Style.textInput} />
                        </View>
                        <View style={Style.Item}>
                            <Text>keyboardType // Cross-platform 'default', 'email-address', 'numeric', 'phone-pad',</Text>
                            <TextInput placeholder="placeholder" keyboardType="default" style={Style.textInput} />
                        </View>
                        <View style={Style.Item}>
                            <Text>multiline</Text>
                            <Text>onContentSizeChange를 통해서 height 변경</Text>
                            <TextInput
                                multiline={true}
                                onContentSizeChange={(event) => {
                                    this.setState({height: event.nativeEvent.contentSize.height});
                                }}
                                style={[Style.textInput, {height: Math.max(44, this.state.height)}]} />
                        </View>
                        <View style={Style.Item}>
                            <Text>secureTextEntry</Text>
                            <TextInput secureTextEntry={true} style={Style.textInput} />
                        </View>
                        <View style={Style.Item}>
                            <Text>returnKeyType // Cross-platform 'done', 'go', 'next', 'search', 'send', </Text>
                            <TextInput returnKeyType="done" style={Style.textInput} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Wrapper>


        )
    }
}
